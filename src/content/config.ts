import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tecnologies: z.object({
            normal: z.array(z.string()),
            important: z.array(z.string())
        }),
        repoUrl: z.string()
    })
})

export const collections = {projects}