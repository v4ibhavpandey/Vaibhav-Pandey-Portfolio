export interface PersonalInfo {
  name: string;
  title: string;
  subTitle: string;
  status: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  objective: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  description: string;
  iconName: string;
  tags?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  sampleRequest?: string;
  sampleResponse: string;
  statusCode: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  category: 'Full-Stack & Database' | 'Backend & APIs' | 'Web & Interactive';
  shortDescription: string;
  problem: string;
  solution: string;
  role: string[];
  techStack: string[];
  features: string[];
  architectureNotes: string;
  documentedResults: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  hasInteractiveSandbox: boolean;
  interactiveType?: 'pennywise' | 'crud-api' | 'imposter-game';
  endpoints?: ProjectEndpoint[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  hoursCompleted: number;
  credentialUrl: string;
  credentialId?: string;
  description: string;
  skillsCovered: string[];
  verificationNote: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  timeline: string;
  currentStatus: string;
  focusAreas: string[];
  highlights: string[];
}

export interface TimelineMilestone {
  year: string;
  period?: string;
  title: string;
  type: 'education' | 'certification' | 'project' | 'skill';
  organization: string;
  description: string;
  evidenceType: 'credential' | 'github' | 'institution';
  evidenceLabel: string;
  evidenceUrl?: string;
}
