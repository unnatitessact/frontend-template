import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  return defineConfig({
    build: {
      outDir: 'build'
    },
    plugins: [react({ jsxRuntime: 'classic' })], // react() is used to avoid the manual import of React in .jsx and .tsx modules
    define: {
      'process.env.NODE_ENV': `"${mode}"`
    },
    server: {
      port: 3000,
      open: true
    }
  });
};
