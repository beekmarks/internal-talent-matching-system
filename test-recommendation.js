const { RecommendationService } = require('./dist/services/recommendation/recommendation.service');

async function testRecommendationService() {
  console.log('Testing Recommendation Service...');
  
  const recommendationService = new RecommendationService();
  
  // Example natural language request
  const request = `
    I need to build a team for a new mobile app project. 
    The app will be a customer-facing banking application with high security requirements.
    We need people with experience in React Native, Node.js, and security protocols.
    The team should have strong communication skills and be able to work in a fast-paced environment.
    The project is in the inception phase and we need to deliver a prototype in 3 months.
    Knowledge of the finance business unit would be beneficial.
  `;
  
  console.log('Processing request:', request);
  
  try {
    // Test team recommendation
    console.log('\n--- Testing Team Recommendation ---');
    const teamRecommendation = await recommendationService.generateTeamRecommendation(request);
    console.log('Team Members:', teamRecommendation.teamMembers.map(e => `${e.name} (${e.position})`));
    console.log('Roles:', Object.entries(teamRecommendation.roles).map(([id, role]) => {
      const employee = teamRecommendation.teamMembers.find(e => e.id === id);
      return `${employee?.name}: ${role}`;
    }));
    console.log('Team Dynamics:', teamRecommendation.teamDynamics);
    console.log('Business Unit Insights:', teamRecommendation.businessUnitInsights);
    
    // Test full request processing
    console.log('\n--- Testing Full Request Processing ---');
    const result = await recommendationService.processRequest(request);
    console.log('Matching Employees:', result.matchingEmployees.length);
    console.log('Tasks:', result.tasks.map(t => t.description));
    console.log('Reasoning:', result.reasoning);
    
  } catch (error) {
    console.error('Error testing recommendation service:', error);
  }
}

testRecommendationService();
