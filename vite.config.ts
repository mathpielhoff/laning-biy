
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Remplacez 'REPLACE_WITH_YOUR_REPO_NAME' par le nom de votre dépôt GitHub
export default defineConfig({
  plugins: [react()],
  base: './', 
});
