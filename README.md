# Vaibhav Pandey — Developer Portfolio

A responsive, performance-focused personal portfolio website built with modern web technologies, showing my backend projects: a live multiplayer game, a personal expense tracker, and a beginner REST API.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 6
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Document Generation**: jsPDF (client-side PDF resume generator)
- **Deployment**: Vercel

---

## ✨ Features

- **Project cards**: each project says plainly whether it is live or not deployed, with a link to its source code.
- **Demos**: small in-browser simulations with sample data (not real servers or databases).
- **Client-Side PDF Resume**: Real-time PDF generator allowing recruiters to download an up-to-date, ATS-friendly resume directly from the browser.
- **Theme Persistence**: Dark / Light theme toggle with automatic system preference detection and localStorage persistence.
- **Accessible & Responsive**: Keyboard-navigable UI optimized for screens from mobile to ultra-wide displays.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/v4ibhavpandey/Vaibhav-Pandey-Portfolio.git
   cd Vaibhav-Pandey-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
├── public/                 # Static assets, favicon, robots.txt, sitemap.xml
├── src/
│   ├── components/         # Modular React UI components (Hero, Projects, Navbar, etc.)
│   ├── data/               # Structured portfolio data & project metadata
│   ├── hooks/              # Custom React hooks (useTheme, etc.)
│   ├── utils/              # Utility functions (generateResumePdf, downloadResume)
│   ├── types.ts            # TypeScript interfaces and domain models
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entrypoint
├── index.html              # HTML template with SEO & Open Graph meta tags
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
