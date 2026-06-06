# React + Tailwind CSS Boilerplate

A modern boilerplate combining React and Tailwind CSS with Vite for fast development.

## 🚀 Features

- **React 18+** - Latest React with hooks support
- **Tailwind CSS** - Latest version with full customization
- **Vite** - Lightning-fast build tool
- **TypeScript Ready** - Config included for TypeScript projects
- **Hot Module Replacement (HMR)** - Instant updates during development

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open automatically at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── src/
    ├── main.jsx         # React entry point
    ├── App.jsx          # Main App component
    └── index.css        # Global styles with Tailwind directives
```

## 🎨 Tailwind CSS

Tailwind CSS is pre-configured and ready to use. Add classes directly to your JSX elements:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">Hello Tailwind!</div>
```

## 🚢 Deployment

To build for production:

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

## 📝 Notes

- ESM modules are configured by default
- React Fast Refresh is enabled for optimal development experience
- CSS is automatically prefixed for browser compatibility

## 🤝 Getting Started

Edit `src/App.jsx` to start building your application. Changes will reflect instantly thanks to Vite's HMR.
