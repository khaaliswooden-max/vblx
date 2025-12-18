/**
 * Sanity Schema Types Index
 * 
 * Central export for all content schemas used in Sanity Studio.
 * Organized by content domain: platforms, pages, blog, and settings.
 */

// Platform schemas
import platform from './platform'
import useCase from './useCase'
import integration from './integration'
import faq from './faq'

// Page schemas
import page from './page'
import industryPage from './industryPage'
import servicePage from './servicePage'

// Blog schemas
import post from './post'
import author from './author'
import category from './category'

// Settings schemas
import siteSettings from './siteSettings'
import navigation from './navigation'

// Block content for rich text
import blockContent from './blockContent'

export const schemaTypes = [
  // Platforms
  platform,
  useCase,
  integration,
  faq,
  
  // Pages
  page,
  industryPage,
  servicePage,
  
  // Blog
  post,
  author,
  category,
  
  // Settings
  siteSettings,
  navigation,
  
  // Shared
  blockContent,
]
