# Understanding LLMs in the Talent Matching System
## A Beginner's Guide

This document explains in simple terms how our Talent Matching System uses Large Language Models (LLMs) to match employees to job positions. It's designed for developers who are new to AI and LLMs.

## What is an LLM?

A Large Language Model (LLM) is an AI system trained on vast amounts of text data that can understand and generate human-like text. Think of it as a super-smart text prediction system that can:

1. Understand natural language questions
2. Extract structured information from text
3. Generate human-like responses
4. Reason about information provided to it

In our application, we use Ollama, which is a tool that lets us run LLMs locally on our own computers instead of sending data to external services like ChatGPT.

## How Our System Works: The Big Picture

Our Talent Matching System follows this simple flow:

1. **User Input**: HR manager describes what they need in plain English
2. **Extraction**: LLM extracts structured information from the request
3. **Data Matching**: System finds relevant employees and tasks from our database
4. **Reasoning**: LLM explains why these employees are good matches
5. **Response**: System presents the matches and reasoning to the user

## The Two Key Services

### 1. Ollama Service

The Ollama Service is our direct connection to the LLM. It has one main job:

**Take a prompt (instructions + data) → Send it to the LLM → Get back a response**

```
User Request → Ollama Service → LLM → Response → Back to our app
```

#### How the Ollama Service Works (In Simple Terms)

1. **Setup**: The service connects to a locally running LLM (llama3 by default)
2. **Prompt Creation**: It wraps the user's request in a "system prompt" that gives the LLM context about its job
3. **API Call**: It sends this prompt to the LLM via a simple API call
4. **Response Handling**: It receives the LLM's response and returns it to whoever asked for it

The magic happens in the `createSystemPrompt` method, which tells the LLM what its job is:

```typescript
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
```

### 2. Recommendation Service

The Recommendation Service is the brain of our application. It:

1. Uses the Ollama Service to talk to the LLM
2. Gets data from the Mock Data Service
3. Combines the LLM's understanding with our employee data
4. Creates detailed recommendations

#### How the Recommendation Service Works (Step by Step)

1. **Requirement Extraction**:
   - Takes the user's natural language request
   - Creates an "extraction prompt" asking the LLM to identify key requirements
   - Sends this to the Ollama Service
   - Gets back structured data about what the user needs

2. **Data Matching**:
   - Takes the extracted requirements
   - Finds relevant tasks in our database
   - Finds employees with matching skills
   - Applies additional filters (location, availability, etc.)

3. **Team Formation**:
   - Creates a recommended team based on the matches
   - Assigns roles to team members
   - Considers team dynamics and business unit knowledge

4. **Reasoning Generation**:
   - Creates a "reasoning prompt" that includes:
     - The extracted requirements
     - The matching tasks
     - The matching employees
     - The recommended team
   - Asks the LLM to explain why these employees are good matches
   - Gets back a detailed explanation

## The Secret Sauce: Prompt Engineering

The most important concept to understand is **prompt engineering** - the art of crafting instructions for the LLM that will produce the results we want.

### Example: The Extraction Prompt

```typescript
const extractionPrompt = `
  Extract the key task requirements and project context from the following request:
  "${request}"
  
  Return a JSON object with the following structure:
  {
    "taskDescription": "extracted task description",
    "taskPurpose": "extracted purpose",
    "requiredHardSkills": ["skill1", "skill2", ...],
    "requiredSoftSkills": ["skill1", "skill2", ...],
    "location": "extracted location",
    ...
  }
  
  IMPORTANT: Your response must contain ONLY the JSON object, with no additional text.
`;
```

This prompt:
1. Clearly defines what we want (extract key information)
2. Provides the exact format we need (JSON structure)
3. Sets strict boundaries (ONLY the JSON object)

### Example: The Reasoning Prompt

```typescript
const reasoningPrompt = `
  I need to match employees to the following project requirements:
  ${JSON.stringify(extractedRequirements, null, 2)}
  
  Here are the identified tasks:
  ${JSON.stringify(tasks.map(t => ({...})), null, 2)}
  
  Here are the potential matching employees:
  ${JSON.stringify(matchingEmployees.map(e => ({...})), null, 2)}
  
  Provide a detailed explanation of why these employees match the project requirements.
  Focus on:
  1. Their hard skills and soft skills in relation to the task requirements
  2. Their experience and how it relates to the project context
  ...
  
  FORMAT YOUR RESPONSE USING MARKDOWN:
  - Use ## headings for main sections
  - Use ### for subsections
  - Use **bold** for employee names and important skills
  ...
`;
```

This prompt:
1. Provides all the data the LLM needs to reason about
2. Gives clear instructions on what to focus on
3. Specifies exactly how to format the response

## How Data Flows Through the System

Here's a simple diagram of how data flows through our system:

```
User Request
    ↓
RecommendationService.processRequest()
    ↓
OllamaService.generateResponse(extractionPrompt)
    ↓
LLM extracts structured requirements
    ↓
MockDataService provides employee and task data
    ↓
RecommendationService matches employees to requirements
    ↓
OllamaService.generateResponse(reasoningPrompt)
    ↓
LLM generates reasoning explanation
    ↓
Final response with matches and reasoning
```

## Why This Approach Works

1. **Natural Language Understanding**: LLMs excel at understanding human language, so users can describe what they need in plain English.

2. **Structured Data Extraction**: By asking the LLM to extract structured data, we bridge the gap between natural language and our database.

3. **Contextual Reasoning**: LLMs can consider multiple factors at once and explain their reasoning, making the recommendations more transparent.

4. **Flexibility**: The system can handle a wide variety of requests without needing to code specific rules for each scenario.

## Practical Tips for Working with LLMs

1. **Be Specific in Prompts**: The more specific your instructions to the LLM, the better the results.

2. **Structure the Output**: Always tell the LLM exactly how you want the response formatted.

3. **Provide Context**: LLMs work best when they understand the bigger picture of what they're trying to do.

4. **Handle Errors Gracefully**: LLMs can sometimes produce unexpected outputs, so always have error handling.

5. **Iterate on Prompts**: Finding the right prompt often takes experimentation and refinement.

## Conclusion

Our Talent Matching System uses LLMs to bridge the gap between natural language requests and structured data matching. The Ollama Service handles communication with the LLM, while the Recommendation Service orchestrates the entire process, from requirement extraction to final recommendation.

By understanding these core concepts, you can start working with the codebase even if you're new to AI and LLMs. The most important skill is crafting effective prompts that guide the LLM to produce the results you want.
