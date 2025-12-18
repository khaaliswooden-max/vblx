/**
 * Page Schema
 * 
 * Generic landing pages with flexible content blocks.
 */

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'subheadline', type: 'text', title: 'Subheadline' },
        { name: 'backgroundImage', type: 'image', title: 'Background Image' },
        {
          name: 'cta',
          type: 'object',
          title: 'Call to Action',
          fields: [
            { name: 'text', type: 'string', title: 'Button Text' },
            { name: 'url', type: 'string', title: 'Button URL' },
          ],
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'textSection',
          title: 'Text Section',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'content', type: 'blockContent', title: 'Content' },
          ],
        },
        {
          type: 'object',
          name: 'ctaSection',
          title: 'CTA Section',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'buttonText', type: 'string', title: 'Button Text' },
            { name: 'buttonUrl', type: 'string', title: 'Button URL' },
          ],
        },
        {
          type: 'object',
          name: 'featuresGrid',
          title: 'Features Grid',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            {
              name: 'features',
              type: 'array',
              title: 'Features',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'icon', type: 'string', title: 'Icon' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'text', title: 'Description' },
                  ],
                },
              ],
            },
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
      subtitle: 'slug.current',
    },
  },
})
