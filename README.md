# Micro Internships — Static Website (HTML/CSS/JS)

A clean, responsive website showcasing job listings for Computer Science majors. Built with plain HTML, CSS, and vanilla JavaScript — perfect for GitHub Pages.

## Preview
- Header with brand + nav
- Job listing card with responsibilities & qualifications
- Sidebar with companies
- Responsive layout (mobile-friendly)

## Run locally
Just open `index.html` in your browser.

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g., `micro-internships`).
2. Upload these files to the repository root (or drag-and-drop via GitHub UI).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` (or `master`) / root
5. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Customize
- Add more jobs in `script.js` by pushing objects onto the `jobs` array.
- Add/remove companies in the `companies` array.
- Tweak design in `styles.css`.
