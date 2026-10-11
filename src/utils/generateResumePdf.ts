import { jsPDF } from 'jspdf';
import { personalInfo } from '../data/portfolioData';

/**
 * Generates and downloads a clean, professional PDF of Vaibhav Pandey's resume.
 * Works seamlessly in all environments, including sandboxed iframes.
 */
export function generateResumePdf(): boolean {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const contentWidth = pageWidth - margin * 2;
    let y = 45;

    // Helper for adding horizontal divider
    const addDivider = (currY: number) => {
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.75);
      doc.line(margin, currY, pageWidth - margin, currY);
      return currY + 14;
    };

    // Helper for section title
    const addSectionHeader = (title: string, currY: number) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(230, 120, 0); // LeetCode orange accent
      doc.text(title.toUpperCase(), margin, currY);
      doc.setDrawColor(240, 240, 240);
      doc.setLineWidth(0.5);
      doc.line(margin, currY + 3, pageWidth - margin, currY + 3);
      return currY + 16;
    };

    // Header: Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(20, 20, 20);
    doc.text('VAIBHAV PANDEY', margin, y);
    y += 18;

    // Subheader: Role
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(230, 120, 0);
    doc.text('BACKEND DEVELOPER', margin, y);
    y += 14;

    // Contact info line
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    const contactLine = `Indore, Madhya Pradesh | +91 ${personalInfo.phone} | ${personalInfo.email}`;
    doc.text(contactLine, margin, y);
    y += 12;

    const linksLine = `LinkedIn: linkedin.com/in/v4ibhavpandey  |  GitHub: github.com/v4ibhavpandey`;
    doc.text(linksLine, margin, y);
    y += 16;

    y = addDivider(y);

    // Objective
    y = addSectionHeader('Objective', y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);
    const objectiveText = personalInfo.objective;
    const splitObjective = doc.splitTextToSize(objectiveText, contentWidth);
    doc.text(splitObjective, margin, y);
    y += splitObjective.length * 11 + 6;

    // How I Work
    y = addSectionHeader('How I Work', y);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    const howIWorkText = '"I prefer learning by building. Rather than collecting technologies, I focus on understanding how things work, applying them to real problems, and turning incomplete ideas into working software."';
    const splitHowIWork = doc.splitTextToSize(howIWorkText, contentWidth - 10);
    doc.setFillColor(248, 248, 248);
    doc.rect(margin, y - 2, contentWidth, splitHowIWork.length * 11 + 6, 'F');
    doc.setDrawColor(230, 120, 0);
    doc.setLineWidth(2);
    doc.line(margin, y - 2, margin, y - 2 + splitHowIWork.length * 11 + 6);
    doc.text(splitHowIWork, margin + 8, y + 8);
    y += splitHowIWork.length * 11 + 14;

    // Projects
    y = addSectionHeader('Projects', y);

    const projectBlocks: { title: string; stack: string; bullets: string[] }[] = [
      {
        title: '1. Imposter Game - Live Multiplayer Party Game (github.com/v4ibhavpandey/Imposter-Game)',
        stack: 'Node.js, Express.js, Socket.IO',
        bullets: [
          'Built a real-time multiplayer party game with room codes, a live lobby, host controls, a timed discussion phase, and voting. Live at imposter-game-vtyn.onrender.com.',
          'Moved imposter assignment, word selection, and vote counting to the server, and sent each player only their own word over a private socket message.',
          'Handled tie votes, host transfer, and mid-game disconnects, and deployed on Render from GitHub with automatic redeploys.',
        ],
      },
      {
        title: '2. Pennywise - Personal Expense Tracker, not deployed (github.com/v4ibhavpandey/Pennywise)',
        stack: 'Node.js, Express.js, MySQL (Aiven)',
        bullets: [
          'Built a personal expense tracker for my own use with an Express.js server, a MySQL database on Aiven, and a plain JavaScript front end.',
          'Designed two related tables linked by a foreign key, and wrote the JOIN and SUM queries and REST routes to add, list, edit, and delete transactions.',
          'Runs locally and is not deployed online. Source code is on GitHub.',
        ],
      },
      {
        title: '3. RESTful CRUD API - learning project (github.com/v4ibhavpandey/RESTful-API-using-Node.js-and-Express.js)',
        stack: 'Node.js, Express.js, Postman',
        bullets: [
          'Wrote a small Express.js API that loads sample users from a JSON file and has routes to list, fetch, add, and delete users.',
          'Tested the routes manually in Postman. No database, validation, or automated tests yet, and the update route is a stub.',
        ],
      },
    ];

    projectBlocks.forEach((proj) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.6);
      doc.setTextColor(20, 20, 20);
      doc.text(proj.title, margin, y);
      y += 10.5;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(proj.stack, margin, y);
      y += 11;

      doc.setFontSize(8.2);
      doc.setTextColor(50, 50, 50);
      proj.bullets.forEach((bullet) => {
        doc.text('•', margin + 6, y);
        const splitBullet = doc.splitTextToSize(bullet, contentWidth - 20);
        doc.text(splitBullet, margin + 16, y);
        y += splitBullet.length * 10.5 + 2;
      });
      y += 5;
    });
    y += 3;

    // Education
    y = addSectionHeader('Education', y);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text('Computer Science and Engineering Undergraduate (B.Tech)', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 100, 100);
    doc.text('2024 – 2028', pageWidth - margin, y, { align: 'right' });
    y += 12;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    doc.text('Institute of Engineering and Science, IPS Academy, Indore, Madhya Pradesh', margin, y);
    y += 15;

    // Skills & Abilities
    y = addSectionHeader('Technical Skills', y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 50, 50);

    const skills = [
      ['Backend & APIs:', 'Node.js, Express.js, RESTful API Design, Postman'],
      ['Databases:', 'MySQL (Aiven), basic SQL (JOIN, SUM), foreign keys'],
      ['Languages & DSA:', 'JavaScript (ES6+), Python, Data Structures & Algorithms'],
      ['Frontend & Tools:', 'HTML5, CSS3, DOM scripting, Git, GitHub, Render'],
      ['Cloud Foundations:', 'AWS Academy Cloud Foundations (EC2, S3, VPC, IAM, CloudWatch)'],
    ];

    skills.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 30, 30);
      doc.text(`•  ${label}`, margin + 6, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(70, 70, 70);
      doc.text(value, margin + 115, y);
      y += 13;
    });
    y += 5;

    // Certifications
    y = addSectionHeader('Certifications & Credentials', y);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text('AWS Academy Graduate - AWS Academy Cloud Foundations', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 100, 100);
    doc.text('Issued 04/30/2026', pageWidth - margin, y, { align: 'right' });
    y += 12;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(70, 70, 70);
    doc.text('Amazon Web Services Training and Certification • 20 Hours Coursework • Credly Badge ID: 1vfZYMOq', margin, y);
    y += 10;
    doc.setTextColor(230, 120, 0);
    doc.text('Verification: https://www.credly.com/go/1vfZYMOq', margin, y);

    // Footer note
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(150, 150, 150);
    doc.text('Vaibhav Pandey - Resume', pageWidth / 2, doc.internal.pageSize.getHeight() - 25, { align: 'center' });

    // Download file
    doc.save('Vaibhav_Pandey_Resume.pdf');
    return true;
  } catch (err) {
    console.error('PDF generation error:', err);
    return false;
  }
}
