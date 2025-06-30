// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    // Add other configurations as needed, e.g., for Markdown
    markdown: {
        shikiConfig: {
            theme: 'dracula', // Or any dark theme for code blocks
        },
    },
});
