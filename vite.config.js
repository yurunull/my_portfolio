import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/my_portfolio/' : '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
