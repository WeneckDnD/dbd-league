/// <reference types="vite/client" />

// This file provides type definitions for Vite environment
// It allows TypeScript to understand Vite's import features (like CSS modules, images, etc.)

// Optional: Type definitions for CSS Modules
// This gives you IntelliSense when using CSS module imports
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Optional: Type definitions for image imports
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

// Optional: Type definitions for environment variables
// Add your custom VITE_* environment variables here if you use them
interface ImportMetaEnv {
  // Example:
  // readonly VITE_API_URL: string
  // readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

