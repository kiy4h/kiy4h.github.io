// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react(), mdx()],
    markdown: {
        shikiConfig: {
            theme: 'dracula', // Or any dark theme for code blocks
        },
    },
    output: 'static',
    site: 'https://kiy4h.github.io',
    base: '/',
    trailingSlash: 'ignore'
});