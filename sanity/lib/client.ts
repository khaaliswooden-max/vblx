/**
 * Sanity Client Configuration
 * 
 * Provides a configured Sanity client for data fetching.
 * Use this client in Server Components and API routes.
 * 
 * @see https://www.sanity.io/docs/js-client
 */

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Validate required environment variables
if (!projectId) {
  console.warn(
    '⚠️ Sanity project ID not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.'
  )
}

/**
 * Sanity client for read operations (public data)
 * Uses CDN for better performance
 */
export const client = createClient({
  projectId: projectId || '',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

/**
 * Sanity client for preview mode
 * Uses token for draft content access
 */
export const previewClient = createClient({
  projectId: projectId || '',
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts',
})

/**
 * Get the appropriate client based on preview mode
 */
export const getClient = (preview = false) => (preview ? previewClient : client)

/**
 * Image URL builder for Sanity images
 */
const builder = imageUrlBuilder(client)

/**
 * Generate optimized image URLs from Sanity image references
 * 
 * @example
 * urlFor(post.mainImage).width(800).height(400).url()
 */
export const urlFor = (source: SanityImageSource) => builder.image(source)

/**
 * Helper to check if Sanity is configured
 */
export const isSanityConfigured = () => Boolean(projectId)
