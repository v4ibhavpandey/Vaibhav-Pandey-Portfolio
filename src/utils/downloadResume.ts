import { personalInfo } from '../data/portfolioData';

export const resumePlainText = `================================================================================
                               VAIBHAV PANDEY
                              INTERN APPLICANT
================================================================================

CONTACT INFORMATION
-------------------
Location: Indore, Madhya Pradesh, India
Phone:    +91 ${personalInfo.phone}
Email:    ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub:   ${personalInfo.github}

OBJECTIVE
---------
Aspiring Backend Developer with a strong foundation in Node.js, Express.js,
MySQL, JavaScript, and Angular, seeking opportunities to build scalable web
applications, solve real-world problems, and grow as a software engineer.

HOW I WORK
----------
I prefer learning by building. Rather than collecting technologies, I focus
on understanding how things work, applying them to real problems, and turning
incomplete ideas into working software.

EDUCATION
---------
Institute of Engineering and Science, IPS Academy, Indore, Madhya Pradesh
Degree: Bachelor of Technology (B.Tech) in Computer Science & Engineering
Duration: 2024 – 2028

TECHNICAL SKILLS
----------------
- Backend:           Node.js, Express.js, RESTful API Design, Postman
- Databases:         MySQL, Aiven Cloud MySQL, Relational Design (PK/FK, JOIN, SUM, GROUP BY)
- Frontend:          Angular (Fundamentals), JavaScript (ES6+), HTML5, CSS3
- Programming:       Python, JavaScript, Data Structures & Algorithms
- Cloud & DevOps:    AWS Cloud Foundations, Git, GitHub

PROJECTS
--------
1. Pennywise – Personal Finance Tracker
   Technologies: Node.js, Express.js, MySQL (Aiven), Vanilla JavaScript, HTML5, CSS3
   - Developed a full-stack personal finance tracker using Node.js, Express.js,
     Vanilla JavaScript, HTML, CSS, and a cloud-hosted Aiven MySQL database to
     record and manage income and expense transactions.
   - Designed a relational MySQL schema (transactions and categories tables
     linked via foreign keys) and RESTful API endpoints executing CRUD
     operations, JOIN queries, and SUM/GROUP BY aggregations.
   - Implemented real-time transaction creation, editing, deletion,
     chronological history sorting, category-wise expense breakdowns, and
     automated calculation of total income, total expenses, and current balance.
   - Source: https://github.com/v4ibhavpandey/Pennywise

2. RESTful CRUD API
   Technologies: Node.js, Express.js, Postman
   - Developed a RESTful API using Node.js and Express.js to perform CRUD
     (Create, Read, Update, and Delete) operations.
   - Designed API endpoints following REST principles and tested them using Postman.
   - Implemented modular routing and controller architecture for maintainable
     backend code.
   - Source: https://github.com/v4ibhavpandey

3. Imposter Game
   Technologies: Vanilla JavaScript, HTML5, CSS3
   - Built a browser-based multiplayer party game using HTML, CSS, and JavaScript
     with turn-based word reveal logic.
   - Implemented randomized word assignment with hidden imposter mechanic and
     controlled player flow using DOM manipulation and event handling.
   - Designed interactive UI with input validation, dynamic state management,
     and end-game result display.
   - Source: https://github.com/v4ibhavpandey

CERTIFICATIONS & CREDENTIALS
----------------------------
AWS Academy Graduate - AWS Academy Cloud Foundations
- Issuing Organization: Amazon Web Services (AWS) Training and Certification
- Date Issued:          04/30/2026
- Credly Badge ID:      1vfZYMOq
- Credly URL:           https://www.credly.com/go/1vfZYMOq
- Curriculum:           20-hour verified cloud foundations coursework covering
                        AWS compute, storage, networking, security, and pricing.

================================================================================
Generated from official portfolio: https://github.com/v4ibhavpandey
================================================================================
`.trim();

/**
 * Robust resume downloader that works in standard browser tabs and sandboxed iframes.
 */
export function downloadResumeText(): boolean {
  try {
    const filename = 'Vaibhav_Pandey_Resume.txt';
    const blob = new Blob([resumePlainText], { type: 'text/plain;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank');
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    // Clean up after browser initiates download
    setTimeout(() => {
      try {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      } catch {
        // ignore
      }
    }, 5000);

    return true;
  } catch (err) {
    console.error('Blob download failed, trying data URI fallback', err);
    try {
      const dataUri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumePlainText);
      const link = document.createElement('a');
      link.href = dataUri;
      link.setAttribute('download', 'Vaibhav_Pandey_Resume.txt');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => document.body.removeChild(link), 1000);
      return true;
    } catch {
      return false;
    }
  }
}
