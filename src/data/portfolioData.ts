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
  objective: 'Aspiring backend developer with hands-on experience in Node.js, Express.js, MySQL, and JavaScript. Looking for an internship where I can build real web applications and learn from experienced engineers.',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend & Server Architecture',
    description: 'Server runtime environments, RESTful APIs, relational databases, and and real-time communication',
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
        description: 'Connecting a Node.js server to a MySQL database on Aiven and writing basic SQL queries, used in my Pennywise expense tracker',
        iconName: 'Database',
        tags: ['MySQL', 'Aiven', 'Basic SQL'],
      },
      {
        name: 'RESTful API Design',
        description: 'Standardized HTTP verbs, status codes, payload conventions, and resource endpoints',
        iconName: 'Globe',
        tags: ['CRUD', 'HTTP', 'API Architecture'],
      },
      {
        name: 'Socket.IO & WebSockets',
        description: 'Real-time rooms, events, and private per-player messages, used in my Imposter Game',
        iconName: 'Layers',
        tags: ['Real-time', 'Rooms', 'Events'],
      },
      {
        name: 'Postman',
        description: 'Manual API testing: sending requests and checking status codes and responses',
        iconName: 'CheckCircle2',
        tags: ['API Testing', 'Manual'],
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
    facts: [
      { label: 'Hosting', value: 'Render free tier, so the first visit after idle time can take about a minute to wake up' },
      { label: 'State', value: 'Rooms are kept in server memory and are lost on restart' },
      { label: 'Players', value: '3 to 10 per room' },
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
  {
    id: 'pennywise-finance-tracker',
    title: 'Pennywise – Personal Expense Tracker',
    subtitle: 'Personal expense tracker (not deployed)',
    status: 'Personal Project / Not deployed',
    category: 'Full-Stack & Database',
    shortDescription: 'A personal expense tracker I built for my own use with Node.js, Express.js, a MySQL database on Aiven, and a plain HTML, CSS, and JavaScript front end. It is not deployed online and runs only on my computer; the source code is on GitHub.',
    problem: 'I wanted a simple place to note down my own income and expenses in a real database instead of a spreadsheet, and I wanted to practise connecting a Node.js server to MySQL.',
    solution: 'An Express.js server talks to a MySQL database hosted on Aiven, and a plain JavaScript front end sends requests to it to add, list, edit, and delete transactions and show totals.',
    role: [
      'Built a personal expense tracker with Node.js, Express.js, MySQL (Aiven), and a vanilla JavaScript, HTML, and CSS front end.',
      'Connected the Express server to a cloud MySQL database and wrote the queries that store and read transactions.',
      'Practised the full flow from a browser form to the server, the database, and back.',
    ],
    techStack: ['Node.js', 'Express.js', 'MySQL', 'Aiven', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Add, view, edit, and delete income and expense records stored in MySQL.',
      'Totals for income, expenses, and balance.',
      'Simple notes-style interface in plain HTML, CSS, and JavaScript.',
    ],
    architectureNotes: 'Browser front end (vanilla JavaScript) calls an Express.js server, which runs SQL queries against a MySQL database on Aiven. It only runs on my own computer and is not deployed.',
    documentedResults: [
      'Works end to end on my machine against the Aiven database.',
      'Source code is public on GitHub. There is no hosted version.',
    ],
    facts: [
      { label: 'Deployment', value: 'Not deployed. It only runs on my computer' },
      { label: 'Purpose', value: 'A personal expense tracker for my own use' },
      { label: 'Database', value: 'MySQL on Aiven' },
    ],
    githubUrl: 'https://github.com/v4ibhavpandey/Pennywise',
    hasInteractiveSandbox: true,
    interactiveType: 'pennywise',
    challenges: [
      'Connecting the Node.js server to a cloud database and keeping the browser, server, and database in sync.',
    ],
    improvements: [
      'Add a README with setup steps and move the database credentials into environment variables.',
      'Validate input on the server, add user login, and deploy it.',
    ],
  },
  {
    id: 'restful-crud-api',
    title: 'RESTful CRUD API',
    subtitle: 'Beginner Express.js API with an in-memory user list',
    status: 'Learning project',
    category: 'Backend & APIs',
    shortDescription: 'A small Express.js API from when I was learning REST. It loads sample users from a JSON file into memory and has routes to list, add, and delete them. I tested it by hand in Postman.',
    problem: 'I wanted to understand how HTTP methods, routes, and JSON responses fit together in a backend before moving on to databases.',
    solution: 'A single index.js file with an Express server that reads sample users from MOCK_DATA.json and serves them over a few routes. Data lives in memory, so changes are lost when the server restarts.',
    role: [
      'Wrote an Express.js server with routes to list users, fetch one by id, add a user, and delete a user.',
      'Loaded sample data from a JSON file and served it as JSON.',
      'Tested the routes by hand in Postman.',
    ],
    techStack: ['Node.js', 'Express.js', 'JavaScript (ES6+)', 'Postman', 'REST Architecture', 'Git'],
    features: [
      'GET routes to list all users and fetch one by id.',
      'POST route to add a user and DELETE route to remove one.',
      'A PATCH route exists as a stub and is not implemented yet.',
    ],
    architectureNotes: 'Everything is in one index.js file. Users are loaded from MOCK_DATA.json into an array at startup, so there is no database, no input validation, and nothing is saved between restarts.',
    documentedResults: [
      'The routes respond correctly when called manually from Postman.',
      'Known limits: no validation, no database, no automated tests.',
    ],
    facts: [
      { label: 'Deployment', value: 'Not deployed. Run it locally with Node.js' },
      { label: 'Storage', value: 'In-memory array loaded from MOCK_DATA.json. Nothing is saved' },
      { label: 'Testing', value: 'Manual, in Postman' },
    ],
    githubUrl: 'https://github.com/v4ibhavpandey/RESTful-API-using-Node.js-and-Express.js',
    hasInteractiveSandbox: true,
    interactiveType: 'crud-api',
    challenges: [
      'Understanding how routes, request parameters, and the request body fit together.',
    ],
    improvements: [
      'Split routes into their own files, validate input, and finish the PATCH route.',
      'Save data in a database and add automated tests.',
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/users',
        description: 'Return all users',
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
        description: 'Add a user to the in-memory list',
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
    title: 'Built a RESTful CRUD API with Node.js & Express.js',
    type: 'project',
    organization: 'Backend Engineering Project',
    description: 'Built a small Express.js API that serves and edits an in-memory user list, and tested its routes by hand in Postman.',
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
    title: 'Built Pennywise, a personal expense tracker',
    type: 'project',
    organization: 'Full-Stack & Database Engineering',
    description: 'Built a personal expense tracker with Node.js, Express.js, plain JavaScript, and a MySQL database on Aiven. It runs locally and is not deployed.',
    evidenceType: 'github',
    evidenceLabel: 'View on GitHub',
    evidenceUrl: 'https://github.com/v4ibhavpandey/Pennywise',
  },
];
