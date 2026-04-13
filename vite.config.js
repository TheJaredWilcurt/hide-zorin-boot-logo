import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const config = defineConfig({
  base: '/hide-zorin-boot-logo',
  plugins: [vue()]
});

export default config;
