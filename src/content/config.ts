import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content', // or 'data' for JSON/YAML
    schema: z.object({
        title: z.string(),
        description: z.string(), // Short description for the homepage card
        // tags consist of: Website, Mobile App, Game, AI/ML. there can be multiple tags. First tag decides "other apps..." section on detail page
        tags: z.array(z.string()).optional(), // displayed as badges on homepage card and detail page
        myRole: z.array(z.string()).optional(), // e.g., "Solo Project", "Team Lead", "Backend Developer"
        technologies: z.array(z.string()), // skillicons.dev icons will be used based on these names
        thumbnail: z.string().optional(), // URL or path to an image/gif for the homepage card
        aesthetic: z.string().optional(), // URL or path to a more aesthetic image for the detail page header
        order: z.number().optional(), // For custom sorting on homepage

        // For the detail page:
        longDescription: z.string().optional(), // More detailed text
        liveDemo: z.string().url().nullable().optional(),
        githubRepo: z.string().url().nullable().optional(),
        collaborators: z.array(z.string()).optional(), // List of collaborators' names. only fill if team-based project
    }),
});

export const collections = { projects };
