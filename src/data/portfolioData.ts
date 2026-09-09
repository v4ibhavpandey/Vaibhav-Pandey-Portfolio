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
  objective: 'Aspiring Backend Developer with a strong foundation in Node.js, Express.js, JavaScript, and Angular, seeking opportunities to build scalable web applications, solve real-world problems, and grow as a software engineer.',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend & Server Architecture',
    description: 'Server runtime environments, RESTful APIs, and controller-service paradigms',
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
    subtitle: 'Browser-Based Multiplayer Social Deduction Game',
    status: 'Completed / Interactive',
    category: 'Web & Interactive',
    shortDescription: 'Built an interactive browser party game with turn-based secret word revelation, hidden imposter mechanics, randomized role allocation, and dynamic UI state handling.',
    problem: 'Party games involving secret words and deduction typically require specialized cards or cumbersome external mobile apps, limiting spontaneous local multiplayer gatherings.',
    solution: 'Engineered a client-side game engine using vanilla JavaScript, HTML, and CSS that manages private pass-and-play role distribution, secret word masking, imposter assignment, and discussion voting states in a single responsive interface.',
    role: [
      'Built a browser-based multiplayer party game using HTML, CSS, and JavaScript with turn-based word reveal logic.',
      'Implemented randomized word assignment with hidden imposter mechanic and controlled player flow using DOM manipulation and event handling.',
      'Designed interactive UI with input validation, dynamic state management, and end-game result display.',
    ],
    techStack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'DOM APIs', 'Event Handling', 'State Machines'],
    features: [
      'Controlled Turn-Based Flow: Secure pass-and-play mechanic preventing accidental word leakage between players.',
      'Randomized Imposter Logic: Dynamically elects one secret imposter while granting all other players matching category keywords.',
      'Interactive Word Masking: Hold-to-reveal / tap-to-show word mechanics crafted for mobile and desktop screens.',
      'Dynamic State Management: Seamless transition across Setup, Player Turn, Secret Reveal, Discussion, and End-Game screens.',
      'Input Validation: Enforces player count limits, custom name inputs, and error notifications.',
    ],
    architectureNotes: 'Constructed around a centralized game state object with reactive DOM renderers and discrete event listeners to eliminate race conditions and keep memory lightweight.',
    documentedResults: [
      'Zero-dependency standalone implementation running efficiently in any modern browser without external libraries.',
      'Successfully tested with multi-player scenarios providing responsive feedback and intuitive game pacing.',
    ],
    githubUrl: 'https://github.com/v4ibhavpandey',
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
    description: 'Designed an interactive multiplayer party game featuring turn-based secret word reveal mechanics, randomized imposter logic, and dynamic DOM manipulation.',
    evidenceType: 'github',
    evidenceLabel: 'View on GitHub',
    evidenceUrl: 'https://github.com/v4ibhavpandey',
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
];
