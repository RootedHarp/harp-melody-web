# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f4377a74-7321-4fbf-8c1b-d8cc0568debd

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f4377a74-7321-4fbf-8c1b-d8cc0568debd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy with Lovable

Simply open [Lovable](https://lovable.dev/projects/f4377a74-7321-4fbf-8c1b-d8cc0568debd) and click on Share -> Publish.

### Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `published` branch. The deployment is handled by a GitHub Actions workflow.

To set up GitHub Pages for your repository:

1. Go to your repository settings
2. Navigate to the "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source

To deploy your site:

1. Make and test your changes on the main branch
2. When ready to deploy, you have several options:

   **Option 1: Use the provided GitHub Action**
   - Go to your repository on GitHub
   - Navigate to the Actions tab
   - Select the "Create Published Branch" workflow
   - Click "Run workflow"
   - Select the source branch (default is main)
   - Click "Run workflow" again

   **Option 2: Manually from command line**
   ```bash
   # If you want to merge your current branch to published
   git checkout published
   git merge your-branch-name
   git push

   # Or if you want to push main directly to published
   git push origin main:published
   ```

After pushing to the `published` branch, your site will be automatically built and deployed to GitHub Pages.

## Can I connect a custom domain to my Lovable project?

Yes it is!

### Custom domain with Lovable

To connect a domain to your Lovable project, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

### Custom domain with GitHub Pages

You can also set up a custom domain with GitHub Pages by following these steps:

1. Go to your repository settings
2. Navigate to the "Pages" section
3. Under "Custom domain", enter your domain name and save
4. Create the necessary DNS records with your domain provider

Read more here: [GitHub Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
