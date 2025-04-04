document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const chatInput = document.getElementById('chat-input');
  const sendButton = document.getElementById('send-button');
  const chatMessages = document.getElementById('chat-messages');
  const resultsContainer = document.getElementById('results-container');
  const reasoningContainer = document.getElementById('reasoning-container');
  const matchingEmployees = document.getElementById('matching-employees');
  const positionsContainer = document.getElementById('positions-container');
  const positionsList = document.getElementById('positions-list');
  const employeesDirectory = document.getElementById('employees-directory');
  const employeesList = document.getElementById('employees-list');
  
  // Navigation elements
  const dashboardLink = document.getElementById('dashboard-link');
  const positionsLink = document.getElementById('positions-link');
  const employeesLink = document.getElementById('employees-link');

  // Configure marked.js options
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartypants: false,
    xhtml: false
  });

  // Event Listeners
  sendButton.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Navigation event listeners
  dashboardLink.addEventListener('click', showDashboard);
  positionsLink.addEventListener('click', showPositions);
  employeesLink.addEventListener('click', showEmployees);

  // Initialize - fetch positions and employees
  fetchPositions();
  fetchEmployees();

  /**
   * Send a message to the chat
   */
  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessageToChat('user', message);
    
    // Clear input
    chatInput.value = '';

    // Show initial loading message
    const loadingMessageId = addMessageToChat('system', 'Processing your request...', false);
    
    // Start showing staged loading messages
    showStagedLoadingMessages(loadingMessageId);

    // Send to backend
    fetch('/api/chat/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
      // Remove loading message
      const loadingMessage = document.getElementById(loadingMessageId);
      if (loadingMessage) {
        chatMessages.removeChild(loadingMessage);
      }
      
      // Add response to chat
      addMessageToChat('system', 'Here are the matching employees based on your requirements:', false);
      
      // Display results
      displayResults(data);
    })
    .catch(error => {
      console.error('Error:', error);
      // Remove loading message
      const loadingMessage = document.getElementById(loadingMessageId);
      if (loadingMessage) {
        chatMessages.removeChild(loadingMessage);
      }
      addMessageToChat('system', 'Sorry, there was an error processing your request. Please try again.');
    });
  }

  /**
   * Show staged loading messages to inform the user about the processing steps
   * @param {string} messageId - The ID of the loading message element
   */
  function showStagedLoadingMessages(messageId) {
    const loadingStages = [
      {
        message: "Analyzing your requirements...",
        delay: 2000
      },
      {
        message: "Extracting key skills and qualifications...",
        delay: 4000
      },
      {
        message: "Searching for matching employees in the database...",
        delay: 6000
      },
      {
        message: "Evaluating employee skills and experience...",
        delay: 8000
      },
      {
        message: "Analyzing team dynamics and project fit...",
        delay: 10000
      },
      {
        message: "Considering business unit knowledge and expertise...",
        delay: 12000
      },
      {
        message: "Evaluating employee availability and location...",
        delay: 14000
      },
      {
        message: "Forming team recommendations based on your requirements...",
        delay: 16000
      },
      {
        message: "Preparing detailed reasoning and explanations...",
        delay: 18000
      },
      {
        message: "Almost there! Finalizing recommendations...",
        delay: 20000
      }
    ];
    
    let currentStage = 0;
    const loadingElement = document.getElementById(messageId);
    
    if (!loadingElement) return;
    
    // Add loading class for animation
    loadingElement.classList.add('loading');
    
    const contentDiv = loadingElement.querySelector('.message-content');
    if (!contentDiv) return;
    
    // Add a progress indicator
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    contentDiv.appendChild(progressContainer);
    
    // Update the loading message with the current stage
    function updateLoadingMessage() {
      if (currentStage < loadingStages.length) {
        const stage = loadingStages[currentStage];
        contentDiv.innerHTML = `<p>${stage.message}</p>`;
        
        // Add progress indicator
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        
        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.style.width = `${(currentStage + 1) / loadingStages.length * 100}%`;
        
        progressContainer.appendChild(progress);
        contentDiv.appendChild(progressContainer);
        
        currentStage++;
        
        // Schedule the next update
        setTimeout(updateLoadingMessage, stage.delay);
      }
    }
    
    // Start updating the loading message
    updateLoadingMessage();
  }

  /**
   * Add a message to the chat
   * @param {string} sender - 'user' or 'system'
   * @param {string} content - Message content
   * @param {boolean} parseMarkdown - Whether to parse the content as markdown (default: true)
   * @returns {string} The ID of the message element
   */
  function addMessageToChat(sender, content, parseMarkdown = true) {
    const messageId = 'msg-' + Date.now();
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.id = messageId;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (parseMarkdown && sender === 'system') {
      // Parse markdown for system messages
      contentDiv.innerHTML = marked.parse(content);
    } else {
      // Regular text for user messages
      const paragraph = document.createElement('p');
      paragraph.textContent = content;
      contentDiv.appendChild(paragraph);
    }
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Apply syntax highlighting to code blocks
    if (parseMarkdown && sender === 'system') {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    }
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageId;
  }

  /**
   * Display the results from the chat response
   * @param {Object} data - Response data
   */
  function displayResults(data) {
    // Show results container
    resultsContainer.style.display = 'block';
    positionsContainer.style.display = 'none';
    employeesDirectory.style.display = 'none';
    
    // Display reasoning with markdown formatting
    reasoningContainer.innerHTML = marked.parse(data.reasoning);
    
    // Apply syntax highlighting to code blocks
    document.querySelectorAll('#reasoning-container pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
    
    // Display matching employees
    matchingEmployees.innerHTML = '';
    
    if (data.matchingEmployees && data.matchingEmployees.length > 0) {
      data.matchingEmployees.forEach(employee => {
        const employeeCard = createEmployeeCard(employee);
        matchingEmployees.appendChild(employeeCard);
      });
    } else {
      matchingEmployees.innerHTML = '<p>No matching employees found.</p>';
    }
  }

  /**
   * Create an employee card element
   * @param {Object} employee - Employee data
   * @returns {HTMLElement} Employee card element
   */
  function createEmployeeCard(employee) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    
    const card = document.createElement('div');
    card.className = 'employee-card';
    
    // Card header
    const header = document.createElement('div');
    header.className = 'employee-header';
    header.innerHTML = `
      <h4>${employee.name}</h4>
      <p>${employee.position} - ${employee.department}</p>
    `;
    
    // Card body
    const body = document.createElement('div');
    body.className = 'employee-body';
    
    // Skills section
    const skillsSection = document.createElement('div');
    skillsSection.className = 'skills-section';
    skillsSection.innerHTML = '<h5>Skills</h5>';
    
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills-container';
    
    employee.skills.forEach(skill => {
      const skillBadge = document.createElement('span');
      skillBadge.className = `skill-badge ${skill.level}`;
      skillBadge.textContent = skill.name;
      skillsContainer.appendChild(skillBadge);
    });
    
    skillsSection.appendChild(skillsContainer);
    
    // Preferences section
    const preferencesSection = document.createElement('div');
    preferencesSection.className = 'preferences-section mt-3';
    preferencesSection.innerHTML = `
      <h5>Preferences</h5>
      <p><strong>Job Types:</strong> ${employee.preferences.jobType.join(', ')}</p>
      <p><strong>Locations:</strong> ${employee.preferences.location.join(', ')}</p>
      <p><strong>Remote:</strong> ${employee.preferences.remote ? 'Yes' : 'No'}</p>
      <p><strong>Available for Transfer:</strong> ${employee.availableForTransfer ? 'Yes' : 'No'}</p>
    `;
    
    // Append sections to body
    body.appendChild(skillsSection);
    body.appendChild(preferencesSection);
    
    // Append header and body to card
    card.appendChild(header);
    card.appendChild(body);
    
    // Append card to column
    col.appendChild(card);
    
    return col;
  }

  /**
   * Create a position card element
   * @param {Object} position - Position data
   * @returns {HTMLElement} Position card element
   */
  function createPositionCard(position) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    
    const card = document.createElement('div');
    card.className = 'position-card';
    
    // Card header
    const header = document.createElement('div');
    header.className = 'position-header';
    header.innerHTML = `
      <h4>${position.title}</h4>
      <p>${position.department} - ${position.location}</p>
    `;
    
    // Card body
    const body = document.createElement('div');
    body.className = 'position-body';
    
    // Description
    const description = document.createElement('div');
    description.innerHTML = `<p>${position.description}</p>`;
    
    // Required skills section
    const requiredSkillsSection = document.createElement('div');
    requiredSkillsSection.className = 'skills-section';
    requiredSkillsSection.innerHTML = '<h5>Required Skills</h5>';
    
    const requiredSkillsContainer = document.createElement('div');
    requiredSkillsContainer.className = 'skills-container';
    
    position.requiredSkills.forEach(skill => {
      const skillBadge = document.createElement('span');
      skillBadge.className = 'skill-badge expert';
      skillBadge.textContent = skill.name;
      requiredSkillsContainer.appendChild(skillBadge);
    });
    
    requiredSkillsSection.appendChild(requiredSkillsContainer);
    
    // Preferred skills section
    const preferredSkillsSection = document.createElement('div');
    preferredSkillsSection.className = 'skills-section mt-3';
    preferredSkillsSection.innerHTML = '<h5>Preferred Skills</h5>';
    
    const preferredSkillsContainer = document.createElement('div');
    preferredSkillsContainer.className = 'skills-container';
    
    position.preferredSkills.forEach(skill => {
      const skillBadge = document.createElement('span');
      skillBadge.className = 'skill-badge intermediate';
      skillBadge.textContent = skill.name;
      preferredSkillsContainer.appendChild(skillBadge);
    });
    
    preferredSkillsSection.appendChild(preferredSkillsContainer);
    
    // Additional details
    const details = document.createElement('div');
    details.className = 'details-section mt-3';
    details.innerHTML = `
      <p><strong>Remote:</strong> ${position.remote ? 'Yes' : 'No'}</p>
      <p><strong>Salary Range:</strong> ${position.salary.currency} ${position.salary.min.toLocaleString()} - ${position.salary.max.toLocaleString()}</p>
      <p><strong>Date Posted:</strong> ${new Date(position.datePosted).toLocaleDateString()}</p>
    `;
    
    // Append sections to body
    body.appendChild(description);
    body.appendChild(requiredSkillsSection);
    body.appendChild(preferredSkillsSection);
    body.appendChild(details);
    
    // Append header and body to card
    card.appendChild(header);
    card.appendChild(body);
    
    // Append card to column
    col.appendChild(card);
    
    return col;
  }

  /**
   * Fetch positions from the API
   */
  function fetchPositions() {
    fetch('/api/chat/tasks')
      .then(response => response.json())
      .then(data => {
        positionsList.innerHTML = '';
        
        if (data && data.length > 0) {
          data.forEach(task => {
            // Convert task to position format for display
            const position = {
              id: task.id,
              title: task.description,
              department: task.department || 'Various',
              location: task.location || 'Remote',
              type: 'Full-time',
              requiredSkills: task.requiredSkills || [],
              preferredSkills: [],
              description: task.description,
              responsibilities: ['Responsibilities will vary based on task requirements'],
              qualifications: task.requiredSkills ? 
                task.requiredSkills.map(skill => `Experience with ${skill}`) : 
                ['Qualifications will vary based on task requirements']
            };
            
            const positionCard = createPositionCard(position);
            positionsList.appendChild(positionCard);
          });
        } else {
          positionsList.innerHTML = '<p>No open positions found.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching positions:', error);
        positionsList.innerHTML = '<p>Error loading positions. Please try again later.</p>';
      });
  }

  /**
   * Fetch employees from the API
   */
  function fetchEmployees() {
    fetch('/api/chat/employees')
      .then(response => response.json())
      .then(data => {
        employeesList.innerHTML = '';
        
        if (data && data.length > 0) {
          data.forEach(emp => {
            // Convert employee data to format expected by createEmployeeCard
            const employee = {
              id: emp.id,
              name: emp.name,
              position: emp.position,
              department: emp.department,
              skills: [
                // Convert hard skills
                ...(emp.hardSkills || []).map(skill => ({
                  name: skill.name,
                  level: getSkillLevelClass(skill.proficiency)
                })),
                // Convert soft skills
                ...(emp.softSkills || []).map(skill => ({
                  name: skill.name,
                  level: getSkillLevelClass(skill.proficiency)
                }))
              ],
              preferences: {
                jobType: emp.careerAspirations || ['Not specified'],
                location: [emp.location || 'Not specified'],
                remote: true
              },
              availableForTransfer: emp.availabilityDate ? true : false
            };
            
            const employeeCard = createEmployeeCard(employee);
            employeesList.appendChild(employeeCard);
          });
        } else {
          employeesList.innerHTML = '<p>No employees found.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
        employeesList.innerHTML = '<p>Error loading employees. Please try again later.</p>';
      });
  }

  /**
   * Convert skill proficiency to CSS class
   * @param {number} proficiency - Skill proficiency (1-5)
   * @returns {string} CSS class for the skill badge
   */
  function getSkillLevelClass(proficiency) {
    if (!proficiency) return 'beginner';
    
    if (proficiency >= 4) return 'expert';
    if (proficiency >= 3) return 'advanced';
    if (proficiency >= 2) return 'intermediate';
    return 'beginner';
  }

  /**
   * Show the dashboard (chat interface)
   */
  function showDashboard(e) {
    e.preventDefault();
    
    // Update active link
    setActiveLink(dashboardLink);
    
    // Show/hide containers
    resultsContainer.style.display = 'none';
    positionsContainer.style.display = 'none';
    employeesDirectory.style.display = 'none';
    
    // Clear chat messages except the first one
    while (chatMessages.children.length > 1) {
      chatMessages.removeChild(chatMessages.lastChild);
    }
  }

  /**
   * Show the positions list
   */
  function showPositions(e) {
    e.preventDefault();
    
    // Update active link
    setActiveLink(positionsLink);
    
    // Show/hide containers
    resultsContainer.style.display = 'none';
    positionsContainer.style.display = 'block';
    employeesDirectory.style.display = 'none';
  }

  /**
   * Show the employees directory
   */
  function showEmployees(e) {
    e.preventDefault();
    
    // Update active link
    setActiveLink(employeesLink);
    
    // Show/hide containers
    resultsContainer.style.display = 'none';
    positionsContainer.style.display = 'none';
    employeesDirectory.style.display = 'block';
  }

  /**
   * Set the active navigation link
   * @param {HTMLElement} link - The link to set as active
   */
  function setActiveLink(link) {
    // Remove active class from all links
    dashboardLink.classList.remove('active');
    positionsLink.classList.remove('active');
    employeesLink.classList.remove('active');
    
    // Add active class to the clicked link
    link.classList.add('active');
  }
});
