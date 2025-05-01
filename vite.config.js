import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_portfolio/',  // ここでサブディレクトリに合わせる
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
