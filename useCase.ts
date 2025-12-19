/**
 * Use Case Schema
 * 
 * Represents customer success stories and case studies.
 * Linked to platforms to showcase real-world implementations.
 */

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'useCase',
  title: 'Use Case',
  type: 'document',
  fields: [
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      description: 'e.g., Healthcare, Federal, Manufacturing',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Descriptive title for the use case',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 100 },
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'reference',
      to: [{ type: 'platform' }],
      description: 'Which platform was used',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      description: 'What problem did the customer face?',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      description: 'How did Visionblox help solve it?',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'text',
      description: 'What were the results?',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., "40% cost reduction", "3x faster processing"',
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'Optional: Client name if approved for public use',
    }),
    defineField({
      name: 'clientLogo',
      title: 'Client Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'role', type: 'string', title: 'Author Role' },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage or platform pages',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'industry',
    },
  },
})
