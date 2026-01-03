/**
 * Sanity GROQ Queries
 * 
 * Centralized query definitions for fetching content from Sanity.
 * Import these queries in your components and pages.
 * 
 * @see https://www.sanity.io/docs/groq
 */

import { groq } from 'next-sanity'

// ============================================================================
// USE CASE QUERIES
// ============================================================================

/**
 * Get all use cases
 */
export const useCasesQuery = groq`
  *[_type == "useCase"] | order(featured desc, title asc) {
    _id,
    industry,
    title,
    "slug": slug.current,
    challenge,
    solution,
    outcome,
    metrics,
    clientName,
    clientLogo,
    featured,
    serviceCategory
  }
`

/**
 * Get featured use cases
 */
export const featuredUseCasesQuery = groq`
  *[_type == "useCase" && featured == true] | order(title asc) {
    _id,
    industry,
    title,
    "slug": slug.current,
    challenge,
    outcome,
    metrics,
    serviceCategory
  }
`

// ============================================================================
// BLOG QUERIES
// ============================================================================

/**
 * Get all blog posts
 */
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    featured,
    "author": author->{ name, "slug": slug.current, image },
    "categories": categories[]->{ title, "slug": slug.current, color }
  }
`

/**
 * Get single blog post by slug
 */
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    "author": author->{ name, "slug": slug.current, image, role, bio },
    "categories": categories[]->{ title, "slug": slug.current, color },
    "relatedPosts": relatedPosts[]->{ title, "slug": slug.current, mainImage, publishedAt },
    seo
  }
`

/**
 * Get featured blog posts
 */
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->{ name, image }
  }
`

// ============================================================================
// PAGE QUERIES
// ============================================================================

/**
 * Get page by slug
 */
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    hero,
    content,
    sections,
    seo
  }
`

/**
 * Get industry page by slug
 */
export const industryPageBySlugQuery = groq`
  *[_type == "industryPage" && slug.current == $slug][0] {
    _id,
    industry,
    title,
    "slug": slug.current,
    tagline,
    description,
    heroImage,
    challenges,
    "solutions": solutions[]{ 
      description, 
      features,
      product,
      service
    },
    "useCases": useCases[]->{ title, industry, outcome, metrics },
    compliance,
    stats,
    seo
  }
`

/**
 * Get service page by slug
 */
export const servicePageBySlugQuery = groq`
  *[_type == "servicePage" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    shortDescription,
    icon,
    heroImage,
    overview,
    capabilities,
    approach,
    technologies,
    relatedProducts,
    "useCases": useCases[]->{ title, industry, outcome, metrics },
    seo
  }
`

/**
 * Get all service pages
 */
export const servicesPagesQuery = groq`
  *[_type == "servicePage"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    shortDescription,
    icon
  }
`

// ============================================================================
// SETTINGS QUERIES
// ============================================================================

/**
 * Get site settings
 */
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    favicon,
    ogImage,
    company,
    locations,
    social,
    analytics
  }
`

/**
 * Get navigation by slug
 */
export const navigationQuery = groq`
  *[_type == "navigation" && slug.current == $slug][0] {
    title,
    items
  }
`

// ============================================================================
// INTEGRATION QUERIES
// ============================================================================

/**
 * Get all integrations grouped by category
 */
export const integrationsQuery = groq`
  *[_type == "integration"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    category,
    description,
    logo,
    featured,
    products
  }
`
