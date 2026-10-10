import { PersonalInfo, SkillCategory, Project, Certification, EducationItem, TimelineMilestone } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Vaibhav Pandey',
  title: 'Aspiring Backend Developer',
  subTitle: 'Computer Science & Engineering Undergraduate (2024–2028) at IPS Academy, Indore',
  status: 'Open to Backend & Software Engineering Internships',
  location: 'Indore, Madhya Pradesh, India',
  phone: '9009107817',
  email: 'v4ibhav.pandey@gmail.com',
  github: 'https://github.com/v4ibhavpandey',
  linkedin: 'https://www.linkedin.com/in/v4ibhavpandey',
  objective: 'Aspiring Backend Developer with a strong foundation in Node.js, Express.js, MySQL, JavaScript, and Angular, seeking opportunities to build scalable web applications, solve real-world problems, and grow as a software engineer.',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend & Server Architecture',
    description: 'Server runtime environments, RESTful APIs, relational databases, and controller-service paradigms',
    skills: [
      {
        name: 'Node.js',
        description: 'Asynchronous event-driven server runtime for scalable network applications',
        iconName: 'Server',
        tags: ['Runtime', 'Async I/O', 'Backend'],
      },
      {
        name: 'Express.js',
        description: 'Minimalist web framework for routing, middleware pipelines, and REST APIs',
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
        description: 'Scripting, algorithm problem solving, and object-oriented programming',
        iconName: 'FileCode',
        tags: ['Language', 'DSA', 'Logic'],
      },
      {
        name: 'HTML5 & CSS3',
        description: 'Semantic markup, layout structuring, modern responsive styling, and UI presentation',
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
        name: 'Fundamental Angular',
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
    description: 'Verified cloud foundations and professional collaborative workflows',
    skills: [
      {
        name: 'AWS Cloud Foundations',
        description: 'Official AWS Academy certified: compute, storage, VPC networking, security & architecture',
        iconName: 'Cloud',
        tags: ['AWS', 'Certified', 'Infrastructure'],
      },
      {
        name: 'Git & GitHub',
        description: 'Version control workflows, commit history hygiene, branching, remote repositories, and code reviews',
        iconName: 'GitBranch',
        tags: ['Version Control', 'Collaboration', 'CI/CD Ready'],
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
      'Developed a full-stack personal finance tracker using Node.js, Express.js, Vanilla JavaScript, HTML, CSS, and a cloud-hosted Aiven MySQL database to record and manage income and expense transactions.',
      'Designed a relational MySQL schema (transactions and categories tables linked via foreign keys) and RESTful API endpoints executing CRUD operations, JOIN queries, and SUM/GROUP BY aggregations.',
      'Implemented real-time transaction creation, editing, deletion, chronological history sorting, category-wise expense breakdowns, and automated calculation of total income, total expenses, and current balance.',
    ],
    techStack: ['Node.js', 'Express.js', 'MySQL', 'Aiven MySQL', 'Vanilla JavaScript', 'HTML5', 'CSS3', 'REST API'],
    features: [
      'Full Transaction CRUD: Add, edit, and delete income and expense records persisted in Aiven MySQL.',
      'Structured Categorization: Assign transactions across Food, Travel, Shopping, Education, Bills, Salary, and Other.',
      'Relational Database Schema: Normalized categories and transactions tables enforced with Primary Keys and Foreign Keys.',
      'SQL Aggregation & Joins: Uses INNER JOIN, SUM(), and GROUP BY queries to calculate category-wise expense totals.',
      'Financial Summary Engine: Automatically computes Total Income, Total Expenses, and Current Balance.',
      'Chronological History & Notes UI: Displays transaction history with newest records first in a clean, responsive notes-style interface.',
    ],
    architectureNotes: 'Client-side HTML/CSS/Vanilla JS communicates asynchronously with an Express.js REST API connected to a cloud-hosted Aiven MySQL instance. The database enforces referential integrity via a foreign key between transactions.category_id and categories.id, ordering history by newest records first.',
    documentedResults: [
      'Deployed relational schema on Aiven MySQL supporting full CRUD lifecycle and SQL aggregation queries.',
      'Delivered a responsive, simple notes-style interface for tracking income, expenses, and category-wise totals.',
    ],
    githubUrl: 'https://github.com/v4ibhavpandey/Pennywise',
    hasInteractiveSandbox: true,
    interactiveType: 'pennywise',
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
              { id: 14, title: 'Monthly Internship Stipend', amount: 25000, type: 'income', category: 'Salary', created_at: '2026-10-04' },
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
    status: 'Completed / Production Code',
    category: 'Backend & APIs',
    shortDescription: 'Engineered a modular, REST-compliant backend API service in Node.js and Express.js with dedicated routing, controller logic, and thorough Postman test suites.',
    problem: 'Web applications require robust, maintainable server endpoints to manage resources reliably without tight coupling between route declarations and execution logic.',
    solution: 'Designed and implemented an expressive RESTful backend service following clear separation of concerns. Developed dedicated controller handlers for Create, Read, Update, and Delete operations with consistent HTTP status codes and structured JSON response schemas.',
    role: [
      'Developed complete RESTful API using Node.js and Express.js to perform CRUD operations.',
      'Designed API endpoints adhering to standard REST architectural principles and verified each route with Postman.',
      'Architected a modular folder hierarchy separating routes, controllers, and utility middlewares for maintainability.',
      'Implemented error handling and request validation for incoming payload bodies.',
    ],
    techStack: ['Node.js', 'Express.js', 'JavaScript (ES6+)', 'Postman', 'REST Architecture', 'Git'],
    features: [
      'Full CRUD Lifecycle: Endpoints for resource creation (POST), retrieval (GET all / by ID), update (PUT), and deletion (DELETE).',
      'Separation of Concerns: Routes isolated from controller functions to ensure clean extensibility.',
      'Standardized HTTP Status Codes: Proper usage of 200 OK, 201 Created, 400 Bad Request, and 404 Not Found.',
      'Postman Test Coverage: Rigorously tested with parameterized collections for edge case handling.',
      'JSON Payload Serialization: Consistent API response envelopment with structured metadata and payload objects.',
    ],
    architectureNotes: 'Follows standard MVC controller pattern: incoming client requests hit the Express router, get dispatched to appropriate async controller functions, process payloads, and return JSON responses.',
    documentedResults: [
      'Successfully verified all CRUD operations with zero regressions across standard and edge-case inputs in Postman.',
      'Established a clean modular template for future microservices and database-backed integrations.',
    ],
    githubUrl: 'https://github.com/v4ibhavpandey',
    hasInteractiveSandbox: true,
    interactiveType: 'crud-api',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/items',
        description: 'Fetch all records with status and count metadata',
        sampleResponse: JSON.stringify(
          {
            success: true,
            count: 3,
            data: [
              { id: 'item_101', name: 'Server Cluster A', category: 'Infrastructure', status: 'active' },
              { id: 'item_102', name: 'Auth Gateway Service', category: 'Security', status: 'healthy' },
              { id: 'item_103', name: 'Worker Queue Consumer', category: 'Backend', status: 'idle' }
            ]
          },
          null,
          2
        ),
        statusCode: 200,
      },
      {
        method: 'POST',
        path: '/api/v1/items',
        description: 'Create a new resource record with request validation',
        sampleRequest: JSON.stringify(
          { name: 'Redis Caching Layer', category: 'Performance', status: 'initializing' },
          null,
          2
        ),
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'Resource created successfully',
            data: { id: 'item_104', name: 'Redis Caching Layer', category: 'Performance', status: 'initializing' }
          },
          null,
          2
        ),
        statusCode: 201,
      },
      {
        method: 'PUT',
        path: '/api/v1/items/:id',
        description: 'Update existing resource fields by ID',
        sampleRequest: JSON.stringify(
          { status: 'operational' },
          null,
          2
        ),
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'Resource item_101 updated successfully',
            data: { id: 'item_101', name: 'Server Cluster A', category: 'Infrastructure', status: 'operational' }
          },
          null,
          2
        ),
        statusCode: 200,
      },
      {
        method: 'DELETE',
        path: '/api/v1/items/:id',
        description: 'Remove a resource permanently from the store',
        sampleResponse: JSON.stringify(
          {
            success: true,
            message: 'Resource item_103 deleted successfully'
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
      'Upgraded a pass-and-play prototype into a live multiplayer game using Node.js, Express.js, and Socket.IO, with room codes, a live lobby, and host controls.',
      'Moved word selection, imposter assignment, the discussion timer, and vote counting to the server, and sent each player only their own word over a private socket message.',
      'Handled edge cases on the server: input validation, duplicate names, tie votes, host transfer, and players disconnecting mid-game.',
      'Built a mobile-first responsive UI, deployed it on Render from GitHub with automatic redeploys, and playtested it with friends on their phones.',
    ],
    techStack: ['Node.js', 'Express.js', 'Socket.IO', 'WebSockets', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git & GitHub', 'Render'],
    features: [
      'Rooms & Live Lobby: Create a room, share a 4-letter code, and watch players join in real time (3 to 10 players per room).',
      'Server-Side Secrecy: The server picks the word pair and the imposter, and each player receives only their own word, so the imposter cannot be found by inspecting the browser.',
      'Timed Discussion: A server-controlled countdown, with the host able to start voting early.',
      'Voting & Results: One vote per player, tie handling, and a final reveal of the imposter, both words, and the vote tally, followed by a Play Again option.',
      'Resilient Sessions: Automatic host transfer, room cleanup when empty, and the crew wins automatically if the imposter leaves.',
      'Two Modes: Online multiplayer, plus the original single-device pass-and-play mode.',
      'Mobile-First Design: Responsive single-column interface built for phones.',
    ],
    architectureNotes: 'An Express server shares one HTTP server with Socket.IO. Room state (players, host, phase, votes, timers) lives in memory on the server, and clients only send intents such as create-room, join-room, start-game, and cast-vote, which the server validates before broadcasting updates. Deployed on Render\'s free tier from the GitHub repository, so every push to main redeploys the game.',
    documentedResults: [
      'Live and playable at a public URL, with multiple players joining from separate phones in the same room.',
      'Playtested with friends across devices with no issues reported.',
    ],
    githubUrl: 'https://github.com/v4ibhavpandey/Imposter-Game',
    liveDemoUrl: 'https://imposter-game-vtyn.onrender.com/',
    hasInteractiveSandbox: true,
    interactiveType: 'imposter-game',
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
    description: 'Official AWS Academy curriculum certification validating foundational knowledge of cloud concepts, core AWS cloud services, security principles, architectural frameworks, and pricing models.',
    skillsCovered: [
      'AWS Cloud Computing Concepts & Global Infrastructure',
      'Core AWS Compute (EC2, Lambda, Elastic Beanstalk)',
      'Storage Services (Amazon S3, EBS, EFS)',
      'VPC Networking & Content Delivery (CloudFront, Route 53)',
      'Security, Identity & IAM Policies (Shared Responsibility Model)',
      'AWS Well-Architected Framework & Cloud Economics',
    ],
    verificationNote: 'Issued under credential badge on Credly with official verification link (20 course hours completed).',
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
    'Focusing on server-side programming, scalable backend architecture, and cloud services.',
    'Earned AWS Academy Cloud Foundations certification alongside academic coursework.',
  ],
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: '2024',
    period: 'Mid 2024',
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
    period: 'Early 2025',
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
    period: 'Mid 2025',
    title: 'Engineered RESTful CRUD API with Node.js & Express.js',
    type: 'project',
    organization: 'Backend Engineering Project',
    description: 'Developed a robust, modular REST API with separated controller architecture, HTTP status code enforcement, and verified test suites using Postman.',
    evidenceType: 'github',
    evidenceLabel: 'View on GitHub',
    evidenceUrl: 'https://github.com/v4ibhavpandey',
  },
  {
    year: '2026',
    period: 'April 2026',
    title: 'AWS Academy Graduate - Cloud Foundations Certification',
    type: 'certification',
    organization: 'AWS Academy',
    description: 'Completed AWS Academy curriculum covering core architecture, cloud security, compute, storage, and networking; awarded verified digital badge.',
    evidenceType: 'credential',
    evidenceLabel: 'Verify Credly Badge',
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
