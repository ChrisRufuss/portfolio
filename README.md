# Chris Rufus — Developer Portfolio

A production-quality, futuristic personal developer portfolio built with React, Vite, and modern CSS. Designed with a deep midnight aesthetic, cyber orbital animations, accessible navigation, and easy data editing.

---

## 🚀 Quick Start (Running Locally)

To run the portfolio on your local machine:

```bash
# 1. Open terminal in this project folder
cd "c:\Users\ganesh kumar\Desktop\projects\portfolio"

# 2. Start the local development server
npm run dev
```

Once running, Vite will display a local link (usually `http://localhost:5173/`). Hold `Ctrl` and click the link (or open it in your browser) to explore the website with instant hot-reloading!

---

## 🛠️ How to Edit Your Information

All personal details, skills, and projects are centralized in two easy-to-edit configuration files. You don't need to rewrite any components!

### 1. Edit Personal Details & Contact (`src/data/portfolio.js`)
Open `src/data/portfolio.js`:
- **Change Name or Role:** Update `personalInfo.name`, `personalInfo.roleHeadline`, or `personalInfo.introduction`.
- **Update Skills:** Modify the items in `skillsData.categories` (add new skills or move them between categories).
- **Update Social Links & Email:** Adjust `personalInfo.contact.email` or `personalInfo.contact.githubUrl`.
- **Enable LinkedIn:** When your account is active, find `personalInfo.contact.linkedin` and change:
  ```javascript
  linkedin: {
    enabled: true, // change from false to true
    url: "https://linkedin.com/in/your-profile",
  }
  ```
- **Add Your Resume:**
  1. Put your PDF resume inside `public/assets/resume.pdf`
  2. In `src/data/portfolio.js`, change:
     ```javascript
     resume: {
       enabled: true, // change from false to true
       filePath: "assets/resume.pdf",
       fileName: "Chris_Rufus_Resume.pdf",
     }
     ```

### 2. Edit or Add Projects (`src/data/projects.js`)
Open `src/data/projects.js`:
- Each project has fields for `title`, `shortDescription`, `fullDescription`, `technologies`, `implementedFeatures`, `status`, `githubUrl`, and `liveUrl`.
- To update your Memory Password Game or SmartBank, simply update the fields in their respective objects.
- To add a new project, copy an existing project object, paste it into the array, and fill in the details.

---

## 📦 How to Build for Production

Before publishing or deploying:

```bash
npm run build
```

This compiles optimized HTML, CSS, and JavaScript into the `dist/` directory.

---

## 🌐 How to Deploy to GitHub Pages (Free Public HTTPS Link)

To get your shareable HTTPS portfolio link (e.g., `https://ChrisRufuss.github.io/portfolio/`):

### Option A: Automatic Deployment via GitHub Pages & Actions (Recommended)

1. **Initialize Git and commit your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Create a new repository on your GitHub account:**
   - Go to [GitHub.com/new](https://github.com/new)
   - Name it `portfolio` (or `ChrisRufuss.github.io` if you want it on your root domain)
   - Keep it **Public** and do not add a README (we already have one).

3. **Link your local repo and push:**
   ```bash
   git remote add origin https://github.com/ChrisRufuss/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub (`Settings` -> `Pages`).
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   - Select the **Static HTML** or **Vite** starter workflow, and GitHub will automatically deploy your site!

### Option B: Deploying with `gh-pages` package

You can also install `gh-pages` (`npm install --save-dev gh-pages`) and add a deploy script to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Then simply run `npm run deploy`.

---

## 💻 Tech Stack Overview

- **Core Framework:** React 19 + Vite
- **Styling:** Modular CSS Tokens, Glassmorphism, CSS Grids & Flexbox
- **Visuals:** Custom HTML5 Canvas Particle Orbit Mesh + Terminal Panel
- **Icons:** Lucide React + Custom SVG Brand Badges
- **Micro-Interactions:** Canvas Confetti for email copy feedback
- **Accessibility:** Reduced-motion query detection, high-contrast dark theme, semantic landmarks, keyboard focus states
