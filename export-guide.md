# Deploying Fundraising Directory to FundraisingDirectory.Deploypad.app

## For Wix Websites - Recommended Approach

### Option 1: Wix HTML Embed Element (Easiest)
1. **Build the app for production:**
   ```bash
   npm run build
   ```

2. **Upload built files to a hosting service** (like Netlify, Vercel, or your own server)

3. **In your Wix editor:**
   - Add an "HTML iframe" element to your page
   - Set the iframe source to your hosted app URL:
   ```html
   <iframe src="https://your-hosted-app.netlify.app" 
           width="100%" 
           height="800px" 
           frameborder="0">
   </iframe>
   ```

### Option 2: Wix Custom Code (Advanced)
1. **Export key components as vanilla JavaScript**
2. **Use Wix's Custom Code feature** in the page settings
3. **Add the catalog functionality directly to your Wix page**

### Option 3: Wix Velo (Most Integrated)
1. **Convert React components to Wix Velo code**
2. **Use Wix's database for product data**
3. **Fully integrated with Wix's ecosystem**

## Quick Start for Wix (Recommended)
## How to Deploy to Netlify (Step-by-Step)

### Method 1: Drag & Drop (Easiest)
1. **Build your app locally:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your built app.

2. **Go to [netlify.com](https://netlify.com) and sign up** (free account)

3. **Drag and drop deployment:**
   - On Netlify dashboard, find the "Deploy manually" section
   - Drag your entire `dist` folder onto the deployment area
   - Netlify will give you a random URL like `https://amazing-cupcake-123456.netlify.app`

### Method 2: Git Integration (Recommended for updates)
1. **Push your code to GitHub:**
   - Create a new repository on GitHub
   - Push your project code to the repository

2. **Connect to Netlify:**
   - In Netlify, click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Get your URL:**
   - Netlify will build and deploy automatically
   - You'll get a URL like `https://your-site-name.netlify.app`
   - You can customize the site name in Netlify settings

### Using Your Deployed App in Wix
1. **Copy your Netlify URL**
2. **In Wix Editor:**
   - Add "Embed Code" element (found in Add menu > Embed)
   - Choose "HTML iframe"
   - Paste this code:
   ```html
   <iframe src="YOUR_NETLIFY_URL_HERE" 
           width="100%" 
           height="800px" 
           frameborder="0"
           style="border: none;">
   </iframe>
   ```
3. **Replace `YOUR_NETLIFY_URL_HERE`** with your actual Netlify URL
4. **Adjust height** as needed (800px, 1000px, etc.)
5. **Publish your Wix site**

### Troubleshooting Tips
- If iframe doesn't show: Check if your Netlify URL works in a new browser tab
- If content is cut off: Increase the iframe height
- For responsive design: The app will automatically adapt to the iframe width

Would you like me to help you with any specific step in this process?