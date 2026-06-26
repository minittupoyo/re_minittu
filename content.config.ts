import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: "page",
            source: "blog/**/*.md",
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.coerce.date(),
                tags: z.array(z.string()).default([])
            })
        }),
        pages: defineCollection({
            type: "page",
            source: "page/**/*.md",
            schema: z.object({
                title: z.string(),
                description: z.string()
            })
        })
    }
})