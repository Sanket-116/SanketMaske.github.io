# 💻 Sanket Maske — Developer Portfolio

Welcome to my personal developer portfolio! This project showcases my professional experience as a Software Engineer, my technical skills in Python scripting, SQL database engineering, and QA automation, and selected projects.

Rebuilt from the ground up, the website features a **sleek, dark minimalist aesthetic** focusing on depth, readability, and content-driven interactive elements.

📍 **Live Site:** [https://sanket-116.github.io/SanketMaske.github.io/](https://sanket-116.github.io/SanketMaske.github.io/)

---

## 🚀 Key Features

* **Sleek Dark Minimal Design**: Built using custom dark themes (obsidian color palettes) with multi-layered depth, glassmorphism headers, and clean typography.
* **Interactive Project Showroom**: Every project card contains nested navigation tabs so visitors can toggle between:
  * **Overview**: A high-level description of the project.
  * **Key Metrics**: Dynamic bullet points highlighting project achievements and metrics.
  * **Source Code**: Illustrative, syntax-colored code snippets showing database query logic and Python classes.
* **Capabilities Matrix**: Skills are organized cleanly into functional categories (Databases, Testing, Scripting, DevOps) with custom tag badges.
* **Interactive Timeline**: Clean career history panel showcasing metrics and achievements from my experience at **Yardi Systems**.
* **Automated CI/CD Deployment**: Integrated GitHub Actions pipeline that automatically builds and deploys updates to GitHub Pages on every push.

---

## 🛠️ Tech Stack & Styling

* **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (For ultra-fast builds and HMR)
* **Styling**: Vanilla CSS (Custom styling system utilizing modular components and CSS variables for maximum performance and layout control)
* **Icons**: [Lucide React](https://lucide.dev/) (With custom inline SVG overrides for brand logos)

---

## 💻 Local Development

Follow these steps to run the portfolio website on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/sanket-116/SanketMaske.github.io.git
cd SanketMaske.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
*Your site will be running locally at `http://localhost:5173`.*

### 4. Build for production
```bash
npm run build
```
*Compiles the production bundle into the `dist/` directory.*

---

## 📦 Deployment to GitHub Pages

This repository is configured with a **GitHub Actions CI/CD workflow** located at `.github/workflows/deploy.yml`. 

Whenever you push a change to the `main` branch:
1. GitHub Actions will check out the codebase.
2. Build the Vite project into optimized static HTML, CSS, and JS.
3. Deploy the compiled assets to your **GitHub Pages** site automatically.

**To trigger a deployment after making changes:**
```bash
git add .
git commit -m "feat: updates to portfolio content"
git push origin main
```
