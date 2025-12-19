/**
 * Service Page Schema
 * 
 * Service offerings pages (Cloud Migration, AI/ML, DevSecOps, etc.).
 */

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 100 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cloud & Infrastructure', value: 'cloud' },
          { title: 'AI & Machine Learning', value: 'ai-ml' },
          { title: 'DevSecOps', value: 'devsecops' },
          { title: 'Data Engineering', value: 'data' },
          { title: 'Application Development', value: 'app-dev' },
          { title: 'Strategy & Consulting', value: 'consulting' },
        ],
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description for cards/previews',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Capability' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'icon', type: 'string', title: 'Icon' },
          ],
        },
      ],
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', type: 'number', title: 'Step Number' },
            { name: 'title', type: 'string', title: 'Step Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of technologies/tools used',
    }),
    defineField({
      name: 'relatedPlatforms',
      title: 'Related Platforms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'platform' }] }],
    }),
    defineField({
      name: 'useCases',
      title: 'Related Use Cases',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'useCase' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description' },
        { name: 'ogImage', type: 'image', title: 'OG Image' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'heroImage',
    },
  },
})
