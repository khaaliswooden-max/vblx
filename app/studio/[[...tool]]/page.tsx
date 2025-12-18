/**
 * Sanity Studio Page
 * 
 * Embedded Sanity Studio for content management.
 * Accessible at /studio in development and production.
 * 
 * The [[...tool]] catch-all route handles all studio sub-routes.
 */

'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
