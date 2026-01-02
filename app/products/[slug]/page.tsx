'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { PRODUCTS_DATA, type ProductKey } from '@/lib/productsData'
import { notFound } from 'next/navigation'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string

  const product = PRODUCTS_DATA[slug as ProductKey]

  if (!product) {
    notFound()
  }

  const Icon = product.icon

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ background: `linear-gradient(135deg, ${product.color}40 0%, transparent 60%)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${product.color}15` }}
        />

        <div className="container-wide relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Product Suite
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${product.color}20` }}
              >
                <Icon className="w-10 h-10" style={{ color: product.color }} />
              </div>

              {/* Title */}
              <h1 className="font-display text-display-sm md:text-display-md font-bold mb-4">
                <span style={{ color: product.color }}>{product.name}</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-text-secondary mb-6">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-body-lg text-text-tertiary leading-relaxed mb-8">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-3xl bg-background-secondary border border-white/5 p-8 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Animated rings */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full border-2"
                      style={{ 
                        borderColor: `${product.color}${30 - i * 5}`,
                        width: `${60 + i * 20}%`,
                        height: `${60 + i * 20}%`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotate: i % 2 === 0 ? 360 : -360 
                      }}
                      transition={{ 
                        duration: 20 + i * 5, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: i * 0.2
                      }}
                    />
                  ))}
                  {/* Center icon */}
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center z-10"
                    style={{ backgroundColor: `${product.color}30` }}
                  >
                    <Icon className="w-12 h-12" style={{ color: product.color }} />
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl -z-10"
                style={{ backgroundColor: `${product.color}10` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-display-sm font-bold mb-4">
              Key Features
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Discover the powerful features that make {product.name} the ideal solution for your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      <CheckCircle className="w-6 h-6" style={{ color: product.color }} />
                    </div>
                    <h3 className="font-display text-heading-md font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-sm font-bold mb-6">
                Why Choose {product.name}?
              </h2>
              <p className="text-body-lg text-text-secondary mb-8">
                Transform your operations with our comprehensive solution designed to deliver measurable results.
              </p>
              
              <div className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background-secondary border border-white/5"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      <CheckCircle className="w-5 h-5" style={{ color: product.color }} />
                    </div>
                    <span className="text-text-primary font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-2xl p-8 border"
                style={{ 
                  backgroundColor: `${product.color}10`,
                  borderColor: `${product.color}30`
                }}
              >
                <h3 className="font-display text-heading-lg font-semibold mb-6">
                  Use Cases
                </h3>
                <div className="space-y-3">
                  {product.useCases.map((useCase, index) => (
                    <div 
                      key={useCase}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: product.color }}
                      />
                      <span className="text-text-secondary">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ backgroundColor: `${product.color}20` }}
            >
              <Icon className="w-8 h-8" style={{ color: product.color }} />
            </div>
            <h2 className="font-display text-heading-xl font-bold mb-4">
              Ready to Get Started with {product.name}?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Contact us today to learn how {product.name} can transform your business operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="xl">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

