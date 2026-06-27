# 🚀 Guide: Setting up Git & Backing up to GitHub

This guide contains the step-by-step instructions to initialize Version Control (Git) for this project and upload it to GitHub.

---

## 🛠️ Step 1: Install Git on Windows
1. Download the official Git installer: **[git-scm.com/download/win](https://git-scm.com/download/win)**.
2. Run the downloaded `.exe` file.
3. Accept the default settings in the installation wizard.
4. **Important:** After the installation finishes, close and reopen your terminal or code editor so the system detects the new `git` command.

---

## 📁 Step 2: Initialize Git Locally
Open your terminal (PowerShell, Command Prompt, or VS Code terminal) in the project root folder (`c:\nodejs by NA`) and run the following commands:

```bash
# 1. Initialize Git in the project directory
git init

# 2. Add all project files to staging (this respects the .gitignore file)
git add .

# 3. Commit your changes
git commit -m "Initial commit"
```

---

## 🌐 Step 3: Publish to GitHub
1. Open your browser and go to **[GitHub](https://github.com/)**.
2. Log in or create a free account.
3. Click the **"+"** icon in the top-right corner and select **"New repository"**.
4. Name your repository (e.g. `nodejs-by-nextsem`).
5. Choose whether to make it **Public** or **Private** (Private is recommended if you don't want others to view your files yet).
6. **Do not** check any boxes under "Initialize this repository with" (no README, no .gitignore, no license), since these are already created in your local project.
7. Click **"Create repository"**.
8. Copy and run the following commands under **"…or push an existing repository from the command line"**:

```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/nodejs-by-nextsem.git
git push -u origin main
```
*(Make sure to replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username, or copy the exact commands generated on the GitHub page).*

---

### 📝 Note:
The [`.gitignore`](file:///c:/nodejs by NA/.gitignore) file in your project is already set up to exclude large dependency folders like `node_modules/` and log files, ensuring a clean and fast backup. Once you successfully push to GitHub, you can safely delete this file (`GIT_BACKUP_GUIDE.md`) or keep it for future reference!
