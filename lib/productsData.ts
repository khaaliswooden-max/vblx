import { type LucideIcon } from 'lucide-react'

export interface ProductFeature {
  title: string
  description: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  subtitle: string
  description: string
  color: string
  icon: LucideIcon
  features: ProductFeature[]
  benefits: string[]
  useCases: string[]
  href: string
}

/** Add products here when ready. Types and structure retained for future use. */
export const PRODUCTS_DATA: Record<string, Product> = {}

export type ProductKey = keyof typeof PRODUCTS_DATA

export const PRODUCT_KEYS = Object.keys(PRODUCTS_DATA) as ProductKey[]

