import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { RecommendationService } from '../services/recommendation/recommendation.service';
import { MockDataService } from '../services/data/mock-data.service';

// Create router
const router = express.Router();
const recommendationService = new RecommendationService();
const dataService = new MockDataService();

// Process chat message and generate response
const processChatMessage: RequestHandler = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }
    
    const result = await recommendationService.processRequest(message);
    
    res.json(result);
  } catch (error) {
    console.error('Error processing chat message:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
};

// Get all available tasks
const getAllTasks: RequestHandler = async (req, res) => {
  try {
    const tasks = await recommendationService.getAvailableTasks();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Get all employees
const getAllEmployees: RequestHandler = async (req, res) => {
  try {
    const employees = await recommendationService.getAllEmployees();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
};

// Find tasks suitable for a specific employee
const getTasksForEmployee: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await recommendationService.findTasksForEmployee(id);
    res.json(tasks);
  } catch (error) {
    console.error('Error finding tasks for employee:', error);
    res.status(500).json({ error: 'Failed to find tasks for employee' });
  }
};

// Find employees suitable for a specific task
const getEmployeesForTask: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const employees = await recommendationService.findEmployeesForTask(id);
    res.json(employees);
  } catch (error) {
    console.error('Error finding employees for task:', error);
    res.status(500).json({ error: 'Failed to find employees for task' });
  }
};

// Analyze task complexity and variability
const analyzeTask: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const analysis = await recommendationService.analyzeTask(id);
    res.json(analysis);
  } catch (error) {
    console.error('Error analyzing task:', error);
    res.status(500).json({ error: 'Failed to analyze task' });
  }
};

// Get employee assessments
const getEmployeeAssessments: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const assessments = await recommendationService.getEmployeeAssessments(id);
    res.json(assessments);
  } catch (error) {
    console.error('Error fetching employee assessments:', error);
    res.status(500).json({ error: 'Failed to fetch employee assessments' });
  }
};

// Get employee experiences
const getEmployeeExperiences: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const experiences = await recommendationService.getEmployeeExperiences(id);
    res.json(experiences);
  } catch (error) {
    console.error('Error fetching employee experiences:', error);
    res.status(500).json({ error: 'Failed to fetch employee experiences' });
  }
};

// NEW ROUTES FOR ENHANCED FUNCTIONALITY

// Get employees by project phase
const getEmployeesByProjectPhase: RequestHandler = async (req, res) => {
  try {
    const { phase } = req.params;
    const employees = await recommendationService.getEmployeesByProjectPhase(phase);
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees by project phase:', error);
    res.status(500).json({ error: 'Failed to fetch employees by project phase' });
  }
};

// Get employees with specific business unit knowledge
const getEmployeesByBusinessUnit: RequestHandler = async (req, res) => {
  try {
    const { businessUnit } = req.params;
    const employees = await recommendationService.getEmployeesByBusinessUnitKnowledge(businessUnit);
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees by business unit knowledge:', error);
    res.status(500).json({ error: 'Failed to fetch employees by business unit knowledge' });
  }
};

// Generate team recommendation based on a natural language request
const generateTeamRecommendation: RequestHandler = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }
    
    const result = await recommendationService.generateTeamRecommendation(message);
    
    res.json(result);
  } catch (error) {
    console.error('Error generating team recommendation:', error);
    res.status(500).json({ error: 'Failed to generate team recommendation' });
  }
};

// Get profiles for a list of employees (for sharing links)
const getEmployeeProfiles: RequestHandler = async (req, res) => {
  try {
    const { employeeIds } = req.body;
    
    if (!employeeIds || !Array.isArray(employeeIds) || employeeIds.length === 0) {
      res.status(400).json({ error: 'Employee IDs are required' });
      return;
    }
    
    const profiles = await Promise.all(
      employeeIds.map((id: string) => recommendationService.getEmployeeProfile(id))
    );
    
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching employee profiles:', error);
    res.status(500).json({ error: 'Failed to fetch employee profiles' });
  }
};

// Register routes
router.post('/process', processChatMessage);
router.get('/tasks', getAllTasks);
router.get('/employees', getAllEmployees);
router.get('/employee/:id/tasks', getTasksForEmployee);
router.get('/task/:id/employees', getEmployeesForTask);
router.get('/task/:id/analyze', analyzeTask);
router.get('/employee/:id/assessments', getEmployeeAssessments);
router.get('/employee/:id/experiences', getEmployeeExperiences);
router.get('/employees/by-project-phase/:phase', getEmployeesByProjectPhase);
router.get('/employees/by-business-unit/:businessUnit', getEmployeesByBusinessUnit);
router.post('/team-recommendation', generateTeamRecommendation);
router.post('/employee-profiles', getEmployeeProfiles);

export { router as chatRouter };
