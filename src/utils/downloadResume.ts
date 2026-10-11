import { personalInfo } from '../data/portfolioData';

/** Plain-text resume. The phone number is only in downloaded copies, not shown on the website. */
export const buildResumeText = (includePhone: boolean): string => `================================================================================
                                VAIBHAV PANDEY
                          ASPIRING BACKEND DEVELOPER
================================================================================

CONTACT INFORMATION
-------------------
Location: Indore, Madhya Pradesh, India
${includePhone ? `Phone:    +91 ${personalInfo.phone}\n` : ''}Email:    ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub:   ${personalInfo.github}

OBJECTIVE
---------
${personalInfo.objective}

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
- Backend:           Node.js, Express.js, REST APIs, Socket.IO, Postman (manual testing)
- Databases:         MySQL (Aiven), basic SQL (JOIN, SUM), foreign keys
- Frontend:          JavaScript (ES6+), HTML5, CSS3
- Programming:       Python, JavaScript, Data Structures & Algorithms
- Cloud & Tools:     AWS Academy Cloud Foundations (course badge), Git, GitHub, Render

PROJECTS
--------
1. Imposter Game - Live Multiplayer Party Game
   Technologies: Node.js, Express.js, Socket.IO, JavaScript, HTML5, CSS3
   - Built a real-time multiplayer party game with room codes, a live lobby,
     host controls, a timed discussion phase, and voting.
   - Moved imposter assignment, word selection, and vote counting to the server,
     and sent each player only their own word over a private socket message.
   - Handled tie votes, host transfer, and mid-game disconnects, and deployed on
     Render from GitHub with automatic redeploys.
   - Source: https://github.com/v4ibhavpandey/Imposter-Game
   - Live:   https://imposter-game-vtyn.onrender.com/

2. Pennywise - Personal Expense Tracker (not deployed)
   Technologies: Node.js, Express.js, MySQL (Aiven), JavaScript, HTML5, CSS3
   - Built a personal expense tracker for my own use with an Express.js server,
     a MySQL database on Aiven, and a plain JavaScript front end.
   - Designed two related tables linked by a foreign key, and wrote the JOIN and
     SUM queries and the REST routes to add, list, edit, and delete transactions.
   - Runs locally and is not deployed online.
   - Source: https://github.com/v4ibhavpandey/Pennywise

3. RESTful CRUD API (learning project)
   Technologies: Node.js, Express.js, Postman
   - Wrote a small Express.js API that loads sample users from a JSON file and
     has routes to list, fetch, add, and delete users.
   - Tested the routes manually in Postman. No database, validation, or
     automated tests yet, and the update route is a stub.
   - Source: https://github.com/v4ibhavpandey/RESTful-API-using-Node.js-and-Express.js

COURSES & BADGES
----------------
AWS Academy Cloud Foundations (course badge)
- Issued by:      AWS Academy
- Date issued:    04/30/2026
- Credly badge:   https://www.credly.com/go/1vfZYMOq
- Course:         20-hour introductory course covering cloud concepts, compute,
                  storage, networking, security, and pricing.

================================================================================
Portfolio: https://v4ibhavpandey-portfolio.vercel.app
================================================================================
`.trim();

export const resumePlainText = buildResumeText(true);

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
