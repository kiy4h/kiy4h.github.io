// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content', // or 'data' for JSON/YAML
    schema: z.object({
        title: z.string(),
        description: z.string(), // Short description for the homepage card
        technologies: z.array(z.string()),
        thumbnail: z.string().optional(), // URL or path to an image/gif for the homepage card
        order: z.number().optional(), // For custom sorting on homepage
        // For the detail page:
        longDescription: z.string().optional(), // More detailed text
        liveDemo: z.string().url().nullable().optional(),
        githubRepo: z.string().url().nullable().optional(),
        // Add fields for image/video attachments if you want to explicitly list them in frontmatter
        // e.g., attachments: z.array(z.object({ src: z.string().url(), type: z.enum(['image', 'video']) })).optional(),
    }),
});

export const collections = { projects };
