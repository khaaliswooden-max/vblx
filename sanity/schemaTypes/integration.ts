/**
 * Integration Schema
 * 
 * Represents third-party integrations supported by the platforms.
 * Organized by category: data sources, enterprise systems, outputs.
 */

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'integration',
  title: 'Integration',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Integration Name',
      type: 'string',
      description: 'e.g., Workday, Salesforce, SAM.gov',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 50 },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Data Sources', value: 'data-sources' },
          { title: 'Enterprise Systems', value: 'enterprise' },
          { title: 'Outputs & Actions', value: 'outputs' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the integration',
      rows: 2,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'platforms',
      title: 'Supported Platforms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'platform' }] }],
      description: 'Which platforms support this integration',
    }),
    defineField({
      name: 'documentationUrl',
      title: 'Documentation URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show prominently on platform pages',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
})
