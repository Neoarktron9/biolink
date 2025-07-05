# Biolink Animated - Interactive Social Media Profile Card
A modern, animated social media profile card built with React and Vite. Features a sleek design with parallax tilt effects, glowing borders, and smooth animations. Perfect for creating a professional bio link page similar to Linktree or Carrd.

## 🌟 Features

- **Interactive 3D Tilt Effect**: Mouse-responsive card that tilts and glows based on cursor position
- **Animated Username**: Gradient text animation that continuously shifts
- **Customizable Links**: Easy-to-modify social media and contact links
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Dark theme with subtle grid background and glass-morphism effects
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Icon Support**: Built-in SVG icons for popular social platforms

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Customization Guide](#customization-guide)
- [Adding New Links](#adding-new-links)
- [Changing Images](#changing-images)
- [Modifying Colors and Styling](#modifying-colors-and-styling)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** - [Download yarn here](https://yarnpkg.com/)

To check your versions, run:
```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the biolink-animated directory
   cd biolink-animated
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - The development server will start at `http://localhost:5173`
   - Your browser should automatically open, but if not, manually navigate to the URL

## 💻 Development

### Available Scripts

- **`npm run dev`** - Starts the development server with hot reload
- **`npm run build`** - Creates a production build
- **`npm run preview`** - Previews the production build locally

### Development Workflow

1. **Make changes** to your files in the `src` directory
2. **Save the file** - Vite will automatically reload the page
3. **Test your changes** in the browser
4. **Repeat** until satisfied with your modifications

### Hot Reload
The development server includes hot reload, meaning:
- Changes to your code will automatically refresh the browser
- No need to manually refresh the page
- CSS changes are applied instantly without page reload

## 🏗️ Building for Production

When you're ready to deploy your bio link page:

1. **Create a production build**
   ```bash
   npm run build
   ```

2. **Preview the production build** (optional)
   ```bash
   npm run preview
   ```

3. **Deploy the `dist` folder**
   - The build creates a `dist` folder with optimized files
   - Upload the contents of this folder to your web hosting service

## 🎨 Customization Guide

### Basic Customization

#### 1. Changing Your Profile Information

Edit `src/App.jsx` to modify your profile details:

```jsx
// Change your username (currently "maneki")
<div className="username">YourUsername</div>

// Change your profile image
<img
  className="profile-img"
  src="https://your-image-url.com/your-photo.jpg"  // Replace with your image URL
  alt="Your Name"
/>

// Change your quote/bio
<div className="quote">Your personal quote or bio here</div>
```

#### 2. Updating Social Media Links

Find the links section in `src/App.jsx` and modify the `href` attributes:

```jsx
<a className="link-btn" href="https://twitter.com/yourusername">
  <span className="icon">
    {/* Twitter X SVG */}
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.53 3H21L13.47 10.98L22.24 21H15.68L10.61 14.89L4.97 21H1.5L9.53 12.49L1 3H7.68L12.27 8.61L17.53 3ZM16.32 19H18.13L7.76 4.89H5.82L16.32 19Z" fill="#e0e0e0"/>
    </svg>
  </span>
  Twitter
</a>
```

### Advanced Customization

#### 3. Modifying Colors and Styling

Edit `src/index.css` to customize the appearance:

```css
/* Change background color */
body {
  background: #your-color-here;
}

/* Change card background */
.card {
  background: #your-card-color;
}

/* Modify username animation colors */
.username {
  background: linear-gradient(90deg, #color1 0%, #color2 33%, #color3 66%);
}

/* Change link button colors */
.link-btn {
  background: rgba(your-r, your-g, your-b, 0.08);
  border: 1.2px solid rgba(255,255,255,0.18);
}
```

#### 4. Adjusting Animations

Modify animation parameters in `src/index.css`:

```css
/* Change username animation speed */
@keyframes gradientShift {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
}

/* Adjust animation duration (currently 3s) */
.username {
  animation: gradientShift 5s linear infinite; /* Change 3s to your preferred duration */
}
```

#### 5. Modifying Tilt Effect

Adjust the tilt sensitivity in `src/App.jsx`:

```jsx
// Change tilt intensity (currently 10 degrees max)
const rotateX = ((y - centerY) / centerY) * 15; // Increase from 10 to 15 for more tilt
const rotateY = ((x - centerX) / centerX) * 15;
```

## ➕ Adding New Links

### Adding a New Social Media Link

1. **Find the links section** in `src/App.jsx` (around line 60-90)

2. **Add a new link button** following this template:

```jsx
<a className="link-btn" href="https://your-platform.com/yourusername">
  <span className="icon">
    {/* Add your SVG icon here */}
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Your SVG path data */}
    </svg>
  </span>
  Platform Name
</a>
```

### Popular Platform Icons

Here are some common SVG icons you can use:

#### Instagram
```jsx
<svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#e0e0e0"/>
</svg>
```

#### YouTube
```jsx
<svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#e0e0e0"/>
</svg>
```

#### LinkedIn
```jsx
<svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#e0e0e0"/>
</svg>
```

#### GitHub
```jsx
<svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#e0e0e0"/>
</svg>
```

### Adding Custom Icons

1. **Find an SVG icon** for your platform
2. **Replace the SVG content** in the icon span
3. **Ensure the fill color** is `#e0e0e0` to match the theme

## 🖼️ Changing Images

### Profile Picture

1. **Upload your image** to an image hosting service (like Imgur, Cloudinary, or your own server)
2. **Replace the image URL** in `src/App.jsx`:

```jsx
<img
  className="profile-img"
  src="https://your-image-hosting.com/your-photo.jpg"
  alt="Your Name"
/>
```

### Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 200x200 pixels or larger (will be resized to 64x64)
- **Aspect Ratio**: Square (1:1) works best
- **File Size**: Keep under 1MB for fast loading

### Using Local Images

If you want to use local images:

1. **Place your image** in the `public` folder
2. **Reference it** with a relative path:

```jsx
<img
  className="profile-img"
  src="/your-photo.jpg"
  alt="Your Name"
/>
```

## 🎨 Modifying Colors and Styling

### Color Scheme Customization

Edit `src/index.css` to change the color scheme:

```css
/* Main background color */
body {
  background: #0a0a0a; /* Change to your preferred background */
}

/* Card background */
.card {
  background: #181818; /* Change card background */
}

/* Username text color */
.username {
  /* The gradient colors are defined in the background property */
  background: linear-gradient(90deg, #0f0f0f 0%, #ffffff 33%, #0f0f0f 66%);
}

/* Link button colors */
.link-btn {
  background: rgba(24, 24, 24, 0.08); /* Button background */
  border: 1.2px solid rgba(255,255,255,0.18); /* Button border */
  color: #ededed; /* Button text color */
}

/* Quote text color */
.quote {
  color: #b0b0b0; /* Quote/bio text color */
}
```

### Typography Changes

```css
/* Change font family */
body {
  font-family: 'Your-Font', Arial, sans-serif;
}

/* Import custom fonts from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap');

/* Adjust font sizes */
.username {
  font-size: 22px; /* Username size */
}

.link-btn {
  font-size: 1rem; /* Link text size */
}

.quote {
  font-size: 0.98rem; /* Quote text size */
}
```

### Animation Customization

```css
/* Change username animation speed */
.username {
  animation: gradientShift 3s linear infinite; /* Adjust duration */
}

/* Modify tilt effect intensity in App.jsx */
const rotateX = ((y - centerY) / centerY) * 10; /* Change 10 to adjust tilt */
const rotateY = ((x - centerX) / centerX) * 10;
```

## 🚀 Deployment

### Deploy to Netlify

1. **Push your code** to a GitHub repository
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

### Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. **Add homepage** to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script** to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Build and deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web hosting service
3. **Configure your domain** to point to the uploaded files

## 🔧 Troubleshooting

### Common Issues

#### "Module not found" errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Build errors
```bash
# Clear cache and rebuild
npm run build -- --force
```

#### Development server not starting
```bash
# Check if port 5173 is in use
# Try a different port
npm run dev -- --port 3000
```

#### Images not loading
- Check image URLs are correct
- Ensure images are publicly accessible
- Verify image format is supported

#### Styling not applying
- Clear browser cache
- Check CSS syntax for errors
- Ensure CSS file is properly imported

### Performance Optimization

1. **Optimize images** before uploading
2. **Use WebP format** for better compression
3. **Minimize external dependencies**
4. **Enable gzip compression** on your server

## 📁 Project Structure

```
biolink-animated/
├── public/                 # Static assets
├── src/
│   ├── App.jsx            # Main component
│   ├── index.css          # Styles
│   └── main.jsx           # Entry point
├── dist/                  # Production build (generated)
├── node_modules/          # Dependencies
├── package.json           # Project configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

### Key Files Explained

- **`src/App.jsx`**: Main React component containing the profile card
- **`src/index.css`**: All styling and animations
- **`src/main.jsx`**: React app entry point
- **`vite.config.js`**: Build tool configuration
- **`package.json`**: Project dependencies and scripts

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. **Check this README** for solutions
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Contact the maintainer** for direct support

## 🔄 Updates and Maintenance

### Keeping Dependencies Updated

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest versions (use with caution)
npm install package-name@latest
```

### Regular Maintenance Tasks

1. **Update dependencies** monthly
2. **Test on different browsers** and devices
3. **Check for broken links** periodically
4. **Optimize images** as needed
5. **Monitor performance** using browser dev tools

---

**Happy coding! 🎉**

This comprehensive guide should help you customize and deploy your bio link page successfully.
