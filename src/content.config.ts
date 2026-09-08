import { defineCollection, z } from 'astro:content'; import { glob } from 'astro/loaders';
const base=z.object({slug:z.string(),language:z.enum(['en','ru']),translationKey:z.string(),title:z.string(),description:z.string(),draft:z.boolean().default(true),tags:z.array(z.string()).default([]),canonicalUrl:z.string().optional(),publishDate:z.coerce.date().optional(),updatedDate:z.coerce.date().optional()});
const articles=defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/articles'}),schema:base});
const projects=defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/projects'}),schema:base.extend({company:z.string(),role:z.string(),period:z.string().optional(),technologies:z.array(z.string()),impact:z.string(),featured:z.boolean(),public:z.boolean(),nda:z.boolean(),links:z.array(z.object({label:z.string(),url:z.string().url()})).default([])})});
export const collections={articles,projects};
