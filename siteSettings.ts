/**
 * Site Settings Schema
 * 
 * Global site configuration and settings.
 */

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of the website',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Default meta description',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'ogImage',
      title: 'Default OG Image',
      type: 'image',
      description: 'Default image for social sharing',
    }),
    defineField({
      name: 'company',
      title: 'Company Information',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Company Name' },
        { name: 'cageCode', type: 'string', title: 'CAGE Code' },
        { name: 'uei', type: 'string', title: 'UEI' },
        { name: 'email', type: 'string', title: 'Contact Email' },
        { name: 'phone', type: 'string', title: 'Phone Number' },
      ],
    }),
    defineField({
      name: 'locations',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'city', type: 'string', title: 'City' },
            { name: 'country', type: 'string', title: 'Country' },
            { name: 'isHQ', type: 'boolean', title: 'Headquarters' },
            { name: 'flag', type: 'string', title: 'Flag Emoji' },
          ],
        },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'twitter', type: 'url', title: 'Twitter/X' },
        { name: 'github', type: 'url', title: 'GitHub' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
      ],
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics',
      type: 'object',
      fields: [
        { name: 'googleAnalyticsId', type: 'string', title: 'Google Analytics ID' },
        { name: 'googleTagManagerId', type: 'string', title: 'GTM ID' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
