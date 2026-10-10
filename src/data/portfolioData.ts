import { PersonalInfo, SkillCategory, Project, Certification, EducationItem, TimelineMilestone } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Vaibhav Pandey',
  title: 'Backend Developer',
  subTitle: 'Computer Science & Engineering Undergraduate (2024–2028) at IPS Academy, Indore',
  status: 'Open to Backend & Software Engineering Roles',
  location: 'Indore, Madhya Pradesh, India',
  phone: '9009107817',
  email: 'v4ibhav.pandey@gmail.com',
  github: 'https://github.com/v4ibhavpandey',
  linkedin: 'https://www.linkedin.com/in/v4ibhavpandey',
  objective: 'Backend Developer with a solid foundation in Node.js, Express.js, MySQL, JavaScript, and RESTful APIs, seeking opportunities to build dependable backend services, solve real-world problems, and grow as a software engineer.',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend & Server Architecture',
    description: 'Server runtime environments, RESTful APIs, relational databases, and controller-service paradigms',
    skills: [
      {
        name: 'Node.js',
        description: 'Asynchronous event-driven server runtime for building scalable network applications and microservices',
        iconName: 'Server',
        tags: ['Runtime', 'Async I/O', 'Backend'],
      },
      {
        name: 'Express.js',
        description: 'Minimalist web framework for routing, middleware pipelines, and structured REST APIs',
        iconName: 'Layers',
        tags: ['Framework', 'Middleware', 'Routing'],
      },
      {
        name: 'MySQL & Relational SQL',
        description: 'Relational schema design with primary/foreign keys, JOINs, GROUP BY, SUM aggregations, and Aiven Cloud MySQL',
        iconName: 'Database',
        tags: ['MySQL', 'Aiven Cloud', 'SQL Joins'],
      },
      {
        name: 'RESTful API Design',
        description: 'Standardized HTTP verbs, status codes, payload conventions, and resource endpoints',
        iconName: 'Globe',
        tags: ['CRUD', 'HTTP', 'API Architecture'],
      },
      {
        name: 'Modular Architecture',
        description: 'Separation of concerns with dedicated router modules, controllers, and business logic',
        iconName: 'FolderTree',
        tags: ['Clean Code', 'Maintainability'],
      },
      {
        name: 'Postman',
        description: 'API endpoint testing, request simulation, response validation, and environment configs',
        iconName: 'CheckCircle2',
        tags: ['Testing', 'Documentation', 'Validation'],
      },
    ],
  },
  {
    category: 'Programming Languages',
    description: 'Core languages utilized for application logic and algorithm implementation',
    skills: [
      {
        name: 'JavaScript (ES6+)',
        description: 'Modern asynchronous JavaScript, closures, promises, prototypes, and ES modules',
        iconName: 'Code2',
        tags: ['Language', 'Web Core', 'Async/Await'],
      },
      {
        name: 'Python',
        description: 'Scripting, algorithm problem solving, and object-oriented programming concepts',
        iconName: 'FileCode',
        tags: ['Language', 'DSA', 'Logic'],
      },
      {
        name: 'HTML5 & CSS3',
        description: 'Semantic markup, layout structuring, responsive styling, and modern UI presentation',
        iconName: 'Layout',
        tags: ['Markup', 'Styling', 'Standards'],
      },
    ],
  },
  {
    category: 'Frontend & UI Engineering',
    description: 'Client-side interface development and dynamic DOM orchestration',
    skills: [
      {
        name: 'Angular (Foundations)',
        description: 'Component architecture, templates, data binding, and TypeScript single-page app concepts',
        iconName: 'Boxes',
        tags: ['Frontend', 'Components', 'SPA'],
      },
      {
        name: 'DOM Manipulation',
        description: 'Dynamic event handling, imperative DOM updates, turn-based UI state control, and user input validation',
        iconName: 'Cpu',
        tags: ['Vanilla JS', 'Event Loop', 'State'],
      },
    ],
  },
  {
    category: 'Cloud & Version Control',
    description: 'Cloud computing foundations and professional Git collaboration workflows',
    skills: [
      {
        name: 'AWS Cloud Foundations',
        description: 'AWS Academy curriculum: compute (EC2), storage (S3), VPC networking, security & architecture (Credly course badge)',
        iconName: 'Cloud',
        tags: ['AWS', 'Course Badge', 'Cloud'],
      },
      {
        name: 'Git & GitHub',
        description: 'Version control workflows, clean commit practices, branching, remote repositories, and project collaboration',
        iconName: 'GitBranch',
        tags: ['Git', 'GitHub', 'Version Control'],
      },
      {
        name: 'Data Structures & Algorithms',
        description: 'Algorithmic thinking, time/space complexity analysis, arrays, strings, hash maps, recursion, and traversal',
        iconName: 'Binary',
        tags: ['Algorithms', 'Efficiency', 'Logic'],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'pennywise-finance-tracker',
    title: 'Pennywise – Personal Finance Tracker',
    subtitle: 'Full-Stack Income & Expense Tracker with Node.js, Express.js & Aiven MySQL',
    status: 'Completed / Full-Stack',
    category: 'Full-Stack & Database',
    shortDescription: 'Built a full-stack personal finance tracker using Node.js, Express.js, MySQL (Aiven Cloud), and Vanilla JavaScript to record, categorize, and summarize income and expense transactions.',
    problem: 'Managing daily personal income and expenses across categories requires persistent relational storage, accurate balance calculations, and a distraction-free interface without bloated dependencies.',
    solution: 'Engineered a full-stack web application backed by an Express.js REST API and a cloud-hosted Aiven MySQL relational database. Structured normalized categories and transactions tables linked via foreign keys, utilizing SQL JOIN, SUM, and GROUP BY queries to compute real-time financial summaries and category-wise expense totals in a responsive notes-style UI.',
    role: [
      'Engineered Express.js REST API backed by an Aiven Cloud MySQL relational database.',
      'Designed normalized schema with foreign keys, executing SQL JOIN, SUM, and GROUP BY queries.',
      'Implemented full CRUD operations for income and expenses with category-wise breakdown calculation.',
      'Built a distraction-free responsive frontend using Vanilla JavaScript, HTML5, and CSS3.',
    ],
    techStack: ['Node.js', 'Express.js', 'MySQL', 'Aiven Cloud', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST API'],
    features: [
      'Full Transaction CRUD: Add, edit, and delete transactions persisted in cloud MySQL.',
      'Relational Integrity: Normalized categories and transactions linked via foreign keys.',
      'Real-Time Aggregations: Computes total income, expenses, balance, and category totals with SQL aggregations.',
      'Notes-Style UI: Fast, responsive interface ordering transactions chronologically.',
    ],
    architectureNotes: 'Client-side HTML/CSS/Vanilla JS communicates asynchronously with an Express.js REST API connected to a cloud-hosted Aiven MySQL instance. The database enforces referential integrity via a foreign key between transactions.category_id and categories.id.',
    documentedResults: [
      'Deployed relational schema on Aiven MySQL supporting full CRUD lifecycle and SQL aggregation queries.',
      'Live web deployment on Vercel delivering instant financial summary calculations.',
    ],
    githubUrl: 'https://github.com/v4ibhavpandey/Pennywise',
    liveDemoUrl: 'https://pennywise-steel-six.vercel.app/',
    hasInteractiveSandbox: true,
    interactiveType: 'pennywise',
    challenges: [
      'Maintaining ACID guarantees and foreign key constraints when dynamically assigning categories.',
      'Calculating category-wise financial balances efficiently using SQL SUM and GROUP BY without client-side loops.',
    ],
    improvements: [
      'Implement user authentication with JWT/session cookies to support multi-tenant budgeting.',
      'Add monthly spending limits with threshold alerts and CSV financial export.',
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/transactions',
        description: 'Fetch all transactions joined with category names ordered by newest first',
        sampleResponse: JSON.stringify(
          {
            success: true,
            summary: { totalIncome: 25000, totalExpenses: 4350, balance: 20650 },
            data: [
              { id: 14, title: 'Monthly Stipend / Allowance', amount: 25000, type: 'income', category: 'Salary', created_at: '2026-10-04' },
              { id: 13, title: 'Semester Reference Books', amount: 1850, type: 'expense', category: 'Education', created_at: '2026-10-03' },
              { id: 12, title: 'Broadband & Electricity', amount: 2500, type: 'expense', category: 'Bills', created_at: '2026-10-01' }
            ]
          },
          null,
          2
        ),
        statusCode: 200,
      },
      {
        method: 'POST',
        path: '/api/transactions',
        description: 'Insert a new income or expense record linked to a category_id',
        sampleRequest: JSON.stringify(
          { title: 'Lunch & Coffee', amount: 320, type: 'expense', category_id: 1, category: 'Food' },
          null,
          2
        ),
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'Transaction recorded in MySQL',
            insertId: 15
          },
          null,
          2
        ),
        statusCode: 201,
      },
      {
        method: 'PUT',
        path: '/api/transactions/:id',
        description: 'Update an existing transaction amount, type, or category',
        sampleRequest: JSON.stringify(
          { title: 'Semester Reference Books', amount: 1650, type: 'expense', category_id: 4 },
          null,
          2
        ),
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'Transaction #13 updated successfully'
          },
          null,
          2
        ),
        statusCode: 200,
      },
      {
        method: 'DELETE',
        path: '/api/transactions/:id',
        description: 'Delete a transaction record by primary key ID',
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'Transaction #12 deleted from database'
          },
          null,
          2
        ),
        statusCode: 200,
      },
    ],
  },
  {
    id: 'restful-crud-api',
    title: 'RESTful CRUD API',
    subtitle: 'Modular Node.js & Express.js Backend Service',
    status: 'Completed / Modular API',
    category: 'Backend & APIs',
    shortDescription: 'Engineered a modular, REST-compliant backend API service in Node.js and Express.js with dedicated routing, controller logic, and thorough Postman test suites.',
    problem: 'Web applications require robust, maintainable server endpoints to manage resources reliably without tight coupling between route declarations and execution logic.',
    solution: 'Designed and implemented an expressive RESTful backend service following clear separation of concerns. Developed dedicated controller handlers for Create, Read, Update, and Delete operations with consistent HTTP status codes and structured JSON response schemas.',
    role: [
      'Developed complete RESTful API using Node.js and Express.js to perform CRUD operations on user records.',
      'Designed API endpoints adhering to standard REST architectural principles and tested each route with Postman.',
      'Architected a modular folder hierarchy separating routes, controllers, and utility middlewares for maintainability.',
      'Implemented error handling and request payload validation for incoming JSON bodies.',
    ],
    techStack: ['Node.js', 'Express.js', 'JavaScript (ES6+)', 'Postman', 'REST Architecture', 'Git'],
    features: [
      'Full CRUD Lifecycle: Endpoints for resource creation (POST), retrieval (GET all / by ID), update (PUT), and deletion (DELETE).',
      'Modular Controller Pattern: Separates Express routes from controller functions to ensure extensibility.',
      'Standardized HTTP Status Codes: Proper usage of 200 OK, 201 Created, 400 Bad Request, and 404 Not Found.',
      'Postman Test Coverage: Tested with parameterized collections for edge case handling.',
    ],
    architectureNotes: 'Follows standard MVC controller pattern: incoming client requests hit the Express router, get dispatched to appropriate async controller functions, process payloads, and return JSON responses.',
    documentedResults: [
      'Validated CRUD operations across standard and edge-case inputs in Postman.',
      'Established a clean modular template for future backend services and database integrations.',
    ],
    githubUrl: 'https://github.com/v4ibhavpandey/RESTful-API-using-Node.js-and-Express.js',
    hasInteractiveSandbox: true,
    interactiveType: 'crud-api',
    challenges: [
      'Decoupling routing logic from controller business handlers to maintain clean, scalable endpoint architecture.',
      'Enforcing strict HTTP status codes (200, 201, 400, 404) and input validation for payload safety.',
    ],
    improvements: [
      'Migrate data persistence to PostgreSQL with an ORM (Prisma/Drizzle) for production scalability.',
      'Integrate rate-limiting middleware and automated unit tests with Jest/Supertest.',
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/users',
        description: 'Fetch all user records with status and count metadata',
        sampleResponse: JSON.stringify(
          {
            success: true,
            count: 3,
            data: [
              { id: 1, name: 'Vaibhav Pandey', email: 'vaibhav@example.com', role: 'Admin' },
              { id: 2, name: 'Rohan Sharma', email: 'rohan@example.com', role: 'Developer' },
              { id: 3, name: 'Priya Patel', email: 'priya@example.com', role: 'User' }
            ]
          },
          null,
          2
        ),
        statusCode: 200,
      },
      {
        method: 'POST',
        path: '/api/users',
        description: 'Create a new user record with request validation',
        sampleRequest: JSON.stringify(
          { name: 'Amit Verma', email: 'amit@example.com', role: 'User' },
          null,
          2
        ),
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'User created successfully',
            data: { id: 4, name: 'Amit Verma', email: 'amit@example.com', role: 'User' }
          },
          null,
          2
        ),
        statusCode: 201,
      },
      {
        method: 'PUT',
        path: '/api/users/:id',
        description: 'Update existing user fields by ID',
        sampleRequest: JSON.stringify(
          { role: 'Lead Developer' },
          null,
          2
        ),
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'User #2 updated successfully',
            data: { id: 2, name: 'Rohan Sharma', email: 'rohan@example.com', role: 'Lead Developer' }
          },
          null,
          2
        ),
        statusCode: 200,
      },
      {
        method: 'DELETE',
        path: '/api/users/:id',
        description: 'Remove a user permanently from the store',
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'User #3 deleted successfully'
          },
          null,
          2
        ),
        statusCode: 200,
      },
    ],
  },
  {
    id: 'imposter-game',
    title: 'Imposter Game',
    subtitle: 'Live Real-Time Multiplayer Social Deduction Game',
    status: 'Live / Deployed',
    category: 'Web & Interactive',
    shortDescription: 'Built and deployed a real-time multiplayer party game where friends join a room from their own phones with a 4-letter code. A Node.js and Socket.IO server assigns the imposter, privately delivers each player their own secret word, runs the discussion timer, and tallies the votes.',
    problem: 'The original version was a single-device pass-and-play game that kept the imposter\'s identity and the full word list in browser memory, where anyone could read them from DevTools, and it forced every player to share one phone.',
    solution: 'Moved all game logic to a Node.js and Express backend with Socket.IO. The server owns the game state, so each player\'s browser only ever receives their own word. Rooms, a server-controlled phase machine (lobby, discussion, voting, result), host controls, and disconnect handling make it playable live on multiple devices.',
    role: [
      'Upgraded pass-and-play prototype into a live multiplayer game using Node.js, Express, and Socket.IO.',
      'Engineered server-side room codes, live lobby management, and host controls.',
      'Implemented private socket delivery for secret words, preventing client-side inspection.',
      'Handled edge cases: disconnects, host transfer, tie votes, and deployed on Render with auto-deploys.',
    ],
    techStack: ['Node.js', 'Express.js', 'Socket.IO', 'WebSockets', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Render'],
    features: [
      'Live Lobby & Rooms: Join with 4-letter codes from any smartphone.',
      'Server-Authoritative Secrecy: Private websocket word dispatch prevents client-side inspection.',
      'Timed Phases: Automated discussion countdown, interactive voting, and imposter reveal.',
      'Resilient Sessions: Host migration, graceful disconnect handling, and instant replay.',
    ],
    architectureNotes: 'An Express server shares one HTTP server with Socket.IO. Room state lives in memory on the server, and clients only send intents that the server validates before broadcasting updates. Deployed on Render.',
    documentedResults: [
      'Live and playable on Render, with players joining simultaneously across mobile devices.',
      'Eliminated client-side cheating by keeping all secret assignments on the server.',
    ],
    githubUrl: 'https://github.com/v4ibhavpandey/Imposter-Game',
    liveDemoUrl: 'https://imposter-game-vtyn.onrender.com/',
    hasInteractiveSandbox: true,
    interactiveType: 'imposter-game',
    challenges: [
      'Transitioning from an insecure pass-and-play prototype where game state was exposed in DevTools to a server-authoritative Socket.IO architecture.',
      'Managing real-time room lifecycle states, host migration when players leave, and socket disconnects mid-round.',
    ],
    improvements: [
      'Add reconnect tokens to gracefully restore disconnected players within a 30-second window.',
      'Support custom thematic word packs and customizable discussion timers.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'AWS Academy (Amazon Web Services)',
    issueDate: '04/30/2026',
    hoursCompleted: 20,
    credentialUrl: 'https://www.credly.com/go/1vfZYMOq',
    credentialId: '1vfZYMOq',
    description: 'Official AWS Academy curriculum validating foundational knowledge of cloud concepts, core AWS cloud services, security principles, architectural frameworks, and pricing models.',
    skillsCovered: [
      'AWS Cloud Computing Concepts & Global Infrastructure',
      'Core AWS Compute (EC2, Lambda, Elastic Beanstalk)',
      'Storage Services (Amazon S3, EBS, EFS)',
      'VPC Networking & Content Delivery (CloudFront, Route 53)',
      'Security, Identity & IAM Policies (Shared Responsibility Model)',
      'AWS Well-Architected Framework & Cloud Economics',
    ],
    verificationNote: 'Awarded official digital course badge on Credly upon completing 20 hours of AWS Academy curriculum coursework.',
  },
];

export const education: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
  institution: 'Institute of Engineering and Science, IPS Academy',
  location: 'Indore, Madhya Pradesh, India',
  timeline: '2024 – 2028',
  currentStatus: 'Undergraduate Student (Pursuing B.Tech CSE)',
  focusAreas: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Backend Web Development & REST APIs',
    'Cloud Computing Foundations',
    'Database Concepts & Version Control',
  ],
  highlights: [
    'Active student in Computer Science & Engineering curriculum (2024-2028 batch).',
    'Focusing on server-side programming, relational database schemas, and cloud services.',
    'Earned AWS Academy Cloud Foundations course completion badge alongside academic coursework.',
  ],
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: '2024',
    period: 'August 2024',
    title: 'Enrolled in Computer Science and Engineering (B.Tech)',
    type: 'education',
    organization: 'Institute of Engineering and Science, IPS Academy, Indore',
    description: 'Commenced undergraduate engineering studies focusing on computer science fundamentals, programming logic, and mathematics.',
    evidenceType: 'institution',
    evidenceLabel: 'Academic Program (2024-2028)',
  },
  {
    year: '2024',
    period: 'Late 2024',
    title: 'Core Programming & Data Structures Foundations',
    type: 'skill',
    organization: 'Self-Directed & Academic',
    description: 'Developed proficiency in Python and modern JavaScript (ES6+), solving algorithmic problems and exploring object-oriented design.',
    evidenceType: 'github',
    evidenceLabel: 'Code Repositories',
    evidenceUrl: 'https://github.com/v4ibhavpandey',
  },
  {
    year: '2025',
    period: '2025',
    title: 'Built & Deployed the Imposter Game',
    type: 'project',
    organization: 'Web Project',
    description: 'Built a pass-and-play party game with secret word reveal mechanics and randomized imposter logic, later upgraded into a live real-time multiplayer game with Node.js, Express.js, and Socket.IO, deployed on Render.',
    evidenceType: 'github',
    evidenceLabel: 'View on GitHub',
    evidenceUrl: 'https://github.com/v4ibhavpandey/Imposter-Game',
  },
  {
    year: '2025',
    period: '2025',
    title: 'Engineered RESTful CRUD API with Node.js & Express.js',
    type: 'project',
    organization: 'Backend Engineering Project',
    description: 'Developed a modular REST API with separated controller architecture, HTTP status code enforcement, and endpoint test suites using Postman.',
    evidenceType: 'github',
    evidenceLabel: 'View on GitHub',
    evidenceUrl: 'https://github.com/v4ibhavpandey/RESTful-API-using-Node.js-and-Express.js',
  },
  {
    year: '2026',
    period: 'April 2026',
    title: 'AWS Academy Graduate - Cloud Foundations Course Badge',
    type: 'certification',
    organization: 'AWS Academy',
    description: 'Completed 20 hours of AWS Academy curriculum covering core cloud architecture, security, compute, storage, and networking; awarded digital course badge.',
    evidenceType: 'credential',
    evidenceLabel: 'View Credly Badge',
    evidenceUrl: 'https://www.credly.com/go/1vfZYMOq',
  },
  {
    year: '2026',
    period: '2026',
    title: 'Built Pennywise – Full-Stack Personal Finance Tracker',
    type: 'project',
    organization: 'Full-Stack & Database Engineering',
    description: 'Developed a full-stack personal finance tracker using Node.js, Express.js, Vanilla JavaScript, and Aiven Cloud MySQL featuring relational tables (categories, transactions), foreign keys, SQL JOIN/SUM/GROUP BY aggregations, and full CRUD operations.',
    evidenceType: 'github',
    evidenceLabel: 'View Pennywise on GitHub',
    evidenceUrl: 'https://github.com/v4ibhavpandey/Pennywise',
  },
];
