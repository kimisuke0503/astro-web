import { defineCollection, z } from "astro:content";

const noteCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().regex(/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/), // yyyy-mm-dd形式
    draft: z.boolean(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
  }),
});

export const collections = <const>{
  note: noteCollection,
};
