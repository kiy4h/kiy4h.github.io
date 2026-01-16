// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
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