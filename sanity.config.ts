/**
 * Sanity Studio Configuration
 * 
 * This file configures the embedded Sanity Studio for content management.
 * The studio is accessible at /studio in development and production.
 * 
 * @see https://www.sanity.io/docs/configuration
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

// Define the Sanity project configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'vblx-studio',
  title: 'VBLX Content Studio',
  
  projectId,
  dataset,
  
  basePath: '/studio',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Platforms
            S.listItem()
              .title('Platforms')
              .child(
                S.list()
                  .title('Platforms')
                  .items([
                    S.documentTypeListItem('platform').title('All Platforms'),
                    S.divider(),
                    S.listItem()
                      .title('Use Cases')
                      .child(S.documentTypeList('useCase').title('Use Cases')),
                    S.listItem()
                      .title('Integrations')
                      .child(S.documentTypeList('integration').title('Integrations')),
                    S.listItem()
                      .title('FAQs')
                      .child(S.documentTypeList('faq').title('FAQs')),
                  ])
              ),
            S.divider(),
            // Pages
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.documentTypeListItem('page').title('Landing Pages'),
                    S.documentTypeListItem('industryPage').title('Industry Pages'),
                    S.documentTypeListItem('servicePage').title('Service Pages'),
                  ])
              ),
            S.divider(),
            // Blog
            S.listItem()
              .title('Blog')
              .child(
                S.list()
                  .title('Blog')
                  .items([
                    S.documentTypeListItem('post').title('Posts'),
                    S.documentTypeListItem('author').title('Authors'),
                    S.documentTypeListItem('category').title('Categories'),
                  ])
              ),
            S.divider(),
            // Settings
            S.listItem()
              .title('Site Settings')
              .child(
                S.list()
                  .title('Settings')
                  .items([
                    S.documentTypeListItem('siteSettings').title('General Settings'),
                    S.documentTypeListItem('navigation').title('Navigation'),
                  ])
              ),
          ]),
    }),
    // GROQ query playground (dev only recommended)
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
