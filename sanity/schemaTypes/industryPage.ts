/**
 * Industry Page Schema
 * 
 * Industry-specific landing pages (Federal, Healthcare, FinTech, Manufacturing).
 */

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'industryPage',
  title: 'Industry Page',
  type: 'document',
  fields: [
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Federal', value: 'federal' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'FinTech', value: 'fintech' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Education', value: 'education' },
          { title: 'State & Local', value: 'sled' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'industry', maxLength: 50 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'challenges',
      title: 'Industry Challenges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string', title: 'Icon' },
            { name: 'title', type: 'string', title: 'Challenge Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'solutions',
      title: 'Our Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'reference', to: [{ type: 'platform' }], title: 'Platform' },
            { name: 'description', type: 'text', title: 'How It Helps' },
            { name: 'features', type: 'array', of: [{ type: 'string' }], title: 'Key Features' },
          ],
        },
      ],
    }),
    defineField({
      name: 'useCases',
      title: 'Featured Use Cases',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'useCase' }] }],
    }),
    defineField({
      name: 'compliance',
      title: 'Compliance & Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Certification Name' },
            { name: 'description', type: 'string', title: 'Description' },
            { name: 'logo', type: 'image', title: 'Badge/Logo' },
          ],
        },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Industry Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'label', type: 'string', title: 'Label' },
          ],
        },
      ],
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
      subtitle: 'industry',
      media: 'heroImage',
    },
  },
})
