/**
 * FAQ Schema
 * 
 * Frequently asked questions that can be linked to platforms or pages.
 */

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'platforms',
      title: 'Related Platforms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'platform' }] }],
      description: 'Which platforms does this FAQ apply to?',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Technical', value: 'technical' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Security', value: 'security' },
          { title: 'Implementation', value: 'implementation' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
