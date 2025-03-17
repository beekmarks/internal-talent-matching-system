import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

interface OllamaResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

export class OllamaService {
  private baseUrl: string;
  private model: string;

  constructor() {
    this.baseUrl = process.env.OLLAMA_API_URL || 'http://localhost:11434/api';
    this.model = process.env.OLLAMA_MODEL || 'llama3';
    console.log(`[Ollama Service] Initialized with model: ${this.model}, API URL: ${this.baseUrl}`);
  }

  /**
   * Generate a response from the Ollama LLM
   * @param prompt The user's message
   * @returns The LLM's response
   */
  async generateResponse(prompt: string): Promise<string> {
    try {
      const requestId = this.generateRequestId();
      const systemPrompt = this.createSystemPrompt(prompt);
      
      // Log the request
      console.log(`\n[Ollama Request ${requestId}] Sending request to model: ${this.model}`);
      console.log(`[Ollama Request ${requestId}] Prompt length: ${systemPrompt.length} characters`);
      console.log(`[Ollama Request ${requestId}] Prompt preview: ${this.truncateForLogging(prompt)}`);
      
      const startTime = Date.now();
      
      const response = await axios.post<OllamaResponse>(`${this.baseUrl}/generate`, {
        model: this.model,
        prompt: systemPrompt,
        stream: false
      });
      
      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000; // Convert to seconds
      
      // Log the response
      console.log(`[Ollama Response ${requestId}] Received after ${duration.toFixed(2)}s`);
      console.log(`[Ollama Response ${requestId}] Response length: ${response.data.response.length} characters`);
      console.log(`[Ollama Response ${requestId}] Response preview: ${this.truncateForLogging(response.data.response)}`);

      return response.data.response;
    } catch (error) {
      console.error('[Ollama Error] Error calling Ollama API:', error);
      if (axios.isAxiosError(error) && error.response) {
        console.error('[Ollama Error] Status:', error.response.status);
        console.error('[Ollama Error] Data:', JSON.stringify(error.response.data));
      }
      throw new Error('Failed to generate response from LLM');
    }
  }

  /**
   * Create a system prompt with context for the LLM
   * @param userPrompt The user's message
   * @returns The formatted system prompt
   */
  private createSystemPrompt(userPrompt: string): string {
    return `
You are an AI assistant that helps HR representatives and managers match employees to job positions.
Your task is to understand the job requirements and employee skills to make the best matches.

Context: The user is an HR representative or manager looking to fill a position with internal talent.
They will describe the position requirements, and you should help them find suitable internal candidates.

User Request: ${userPrompt}

Please provide a helpful response that addresses their needs for internal talent matching.
`;
  }
  
  /**
   * Generate a unique request ID for logging
   * @returns A unique request ID
   */
  private generateRequestId(): string {
    return Math.random().toString(36).substring(2, 8);
  }
  
  /**
   * Truncate a string for logging purposes
   * @param text The text to truncate
   * @param maxLength The maximum length of the truncated text
   * @returns The truncated text
   */
  private truncateForLogging(text: string, maxLength: number = 150): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  }
}
