# Internal Talent Matching System

This proof of concept application provides a natural language interface for HR representatives and managers to describe their hiring needs and to locate and match existing employees to new positions based on known skills and preferences.

## Architecture

The application follows this architecture:

- **User Interface**: Web-based interface for HR representatives and managers
- **Chat Bot**: Natural language processing interface
- **Local LLM**: Uses Ollama to process inputs and generate responses
- **Data Integration Layer**: Connects to various HR and learning systems
- **Context Manager**: Prepares data for the LLM
- **Recommendation Engine**: Matches employees to positions

## Data Sources (Simulated)

In a production environment, this application would integrate with:
- Workday
- Fuel50
- LinkedIn
- SumTotal
- Degreed
- Recognition Central

## Technology Stack

- TypeScript
- Express.js
- Ollama (Local LLM)
- Bootstrap for UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm
- Ollama installed locally

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Make sure Ollama is running with the llama3.2 model:
   ```
   ollama run llama3.2
   ```
4. Configure environment variables in `.env`:
   ```
   PORT=3000
   OLLAMA_API_URL=http://localhost:11434/api
   OLLAMA_MODEL=llama3.2:latest
   ```
5. Start the application:
   ```
   npm run build
   npm run start
   ```
6. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Describe the position requirements in natural language in the chat interface
   - Example: "I need a team to build a new customer relationship management system. We need strong frontend skills for the UI, database expertise for data modeling, and someone who understands our sales business unit."
2. The system will process your request and match it with internal employees
3. View the matching employees and the reasoning behind the matches
4. Review the team dynamics analysis and business unit insights

## Development

- `npm run build` - Build the TypeScript files
- `npm run start` - Start the production server
- `npm run dev` - Start the development server with hot reloading

## Project Structure

```
wit-hackathon/
├── src/
│   ├── data/              # Mock data sources
│   │   ├── mock-employees.ts
│   │   └── mock-tasks.ts
│   ├── models/            # Data models
│   │   ├── employee.model.ts
│   │   ├── skill.model.ts
│   │   ├── task.model.ts
│   │   └── ... (other models)
│   ├── routes/            # API routes
│   │   └── chat.ts
│   ├── services/          # Business logic
│   │   ├── data/          # Data services
│   │   │   └── mock-data.service.ts
│   │   ├── ollama/        # LLM integration
│   │   │   └── ollama.service.ts
│   │   └── recommendation/ # Recommendation engine
│   │       └── recommendation.service.ts
│   ├── public/            # Static files
│   │   ├── index.html     # Main HTML file
│   │   ├── css/           # CSS styles
│   │   └── js/            # Frontend JavaScript
│   └── index.ts           # Application entry point
├── dist/                  # Compiled TypeScript
├── DOCUMENTATION.md       # Detailed technical documentation
└── architecture.mmd       # Architecture diagram in Mermaid format
```

## Key Features

- **Natural Language Interface**: Describe hiring needs in plain language
- **Skill-Based Matching**: Find employees with matching hard and soft skills
- **Team Formation**: Generate optimal team compositions for projects
- **Business Unit Knowledge**: Consider domain expertise in recommendations
- **Comprehensive Logging**: Detailed logging of all LLM interactions for debugging and optimization
- **Rich Markdown Formatting**: Enhanced readability of responses with formatted headings, lists, tables, and emphasis
- **Staged Loading Indicators**: Real-time feedback during processing showing each step of the recommendation workflow

## Hackathon Extension Points

This codebase serves as a starting point for the hackathon. Key extension points include:

1. **Database Integration**: Replace mock data with a real database
2. **Remote LLM Integration**: Connect to a more powerful remote LLM
3. **UI Enhancement**: Improve the user interface or connect to another UI app
4. **Additional Data Sources**: Integrate with real HR systems
5. **Advanced Analytics**: Add more sophisticated matching algorithms
6. **Positions Feature Implementation**: Complete the positions feature by adding a backend API endpoint and data model (see DOCUMENTATION.md for details)
7. **Enhanced Logging**: Extend the logging system with persistent storage, structured logging, or a monitoring dashboard

For detailed technical documentation, please refer to the [DOCUMENTATION.md](./DOCUMENTATION.md) file.

## Known Issues and Solutions

Recent updates have addressed several issues:

1. Improved skill matching to use name-based comparison instead of ID-based
2. Enhanced matching algorithm to be more flexible with partial matches
3. Added fallback mechanisms to ensure recommendations are provided even when perfect matches aren't available
4. Implemented JSON extraction from LLM responses to handle cases where the LLM adds explanatory text around JSON objects

For more detailed information about these issues and their solutions, please refer to the [DOCUMENTATION.md](./DOCUMENTATION.md) file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
