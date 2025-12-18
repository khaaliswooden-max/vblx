'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import type { FAQItem } from '@/lib/platformData'

interface FAQSectionProps {
  faq: FAQItem[]
  platformColor: string
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  platformColor,
  index,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  platformColor: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-display text-lg font-medium text-text-primary group-hover:text-accent-primary transition-colors pr-8">
          {item.question}
        </span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          style={{ backgroundColor: isOpen ? platformColor : `${platformColor}20` }}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4" style={{ color: platformColor }} />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection({ faq, platformColor }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Common questions about implementation, features, and capabilities.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faq.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              platformColor={platformColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
