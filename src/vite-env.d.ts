/// <reference types="vite/client" />

// Type declarations for raw SVG imports
declare module '*.svg?raw' {
    const content: string;
    export default content;
}

// Type declarations for SVG as React components (if needed)
declare module '*.svg' {
    const content: string;
    export default content;
}
