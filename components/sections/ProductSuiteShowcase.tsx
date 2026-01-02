'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Users, 
  FolderKanban, 
  ListTodo, 
  Ticket, 
  GraduationCap, 
  UserCheck, 
  FileText 
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PRODUCTS, type ProductKey } from '@/lib/utils'

const productIcons: Record<ProductKey, typeof TrendingUp> = {
  'pro-sales': TrendingUp,
  'pro-assure': Shield,
  'pro-biz': BarChart3,
  'pro-people': Users,
  'pro-project': FolderKanban,
  'pro-task': ListTodo,
  'pro-ticket': Ticket,
  'pro-pupil': GraduationCap,
  'pro-visit': UserCheck,
  'docsnip': FileText,
}

export default function ProductSuiteShowcase() {
  const productKeys = Object.keys(PRODUCTS) as ProductKey[]
  
  return (
    <section id="products" className="section-padding bg-background-secondary">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-4">
            Complete Product Suite
          </span>
          <h2 className="font-display text-display-sm md:text-display-md font-bold mb-4">
            Seamless & Faster Growth
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Our comprehensive product suite is designed to revolutionize your operations—
            from sales management to education, from visitor tracking to document intelligence.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {productKeys.map((key, index) => {
            const product = PRODUCTS[key]
            const Icon = productIcons[key]

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={product.href}>
                  <Card 
                    variant="default" 
                    className="h-full group relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    {/* Gradient Header */}
                    <div
                      className="h-1.5"
                      style={{
                        background: `linear-gradient(90deg, ${product.color}, ${product.color}60)`,
                      }}
                    />

                    <CardContent className="p-5">
                      {/* Icon */}
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${product.color}15` }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: product.color }}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-lg font-bold mb-1 group-hover:text-accent-primary transition-colors">
                        {product.name}
                      </h3>

                      {/* Tagline */}
                      <p
                        className="text-xs font-mono uppercase tracking-wider mb-3"
                        style={{ color: product.color }}
                      >
                        {product.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-4">
                        {product.features.slice(0, 2).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-xs text-text-tertiary"
                          >
                            <div
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{ backgroundColor: product.color }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <div className="flex items-center gap-1 text-xs font-medium text-text-secondary group-hover:text-accent-primary transition-colors">
                        Learn more
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Ready to transform your enterprise operations?
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

