'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Building2, CheckCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'
import {
  commercialFormSchema,
  type CommercialFormData,
  INDUSTRY_OPTIONS,
  COMPANY_SIZE_OPTIONS,
  PLATFORM_OPTIONS,
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
} from '@/lib/validations'

type FormStep = 1 | 2 | 3

export default function CommercialContactPage() {
  const [step, setStep] = useState<FormStep>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof CommercialFormData, string>>>({})
  
  const [formData, setFormData] = useState<Partial<CommercialFormData>>({
    marketingConsent: false,
  })

  const updateField = <K extends keyof CommercialFormData>(
    field: K,
    value: CommercialFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateStep = (currentStep: FormStep): boolean => {
    const stepFields: Record<FormStep, (keyof CommercialFormData)[]> = {
      1: ['firstName', 'lastName', 'email', 'phone', 'jobTitle'],
      2: ['companyName', 'companySize', 'industry', 'website'],
      3: ['platform', 'useCase', 'timeline'],
    }

    const fieldsToValidate = stepFields[currentStep]
    const partialSchema = commercialFormSchema.pick(
      Object.fromEntries(fieldsToValidate.map((f) => [f, true])) as Record<keyof CommercialFormData, true>
    )

    const result = partialSchema.safeParse(formData)
    
    if (!result.success) {
      const newErrors: Partial<Record<keyof CommercialFormData, string>> = {}
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof CommercialFormData
        newErrors[field] = err.message
      })
      setErrors(newErrors)
      return false
    }

    return true
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => (s + 1) as FormStep)
    }
  }

  const handleBack = () => {
    setStep((s) => (s - 1) as FormStep)
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return

    const fullResult = commercialFormSchema.safeParse(formData)
    if (!fullResult.success) {
      const newErrors: Partial<Record<keyof CommercialFormData, string>> = {}
      fullResult.error.errors.forEach((err) => {
        const field = err.path[0] as keyof CommercialFormData
        newErrors[field] = err.message
      })
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact/commercial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullResult.data),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ email: 'An error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg mx-auto px-6"
        >
          <div className="w-20 h-20 rounded-full bg-accent-primary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent-primary" />
          </div>
          <h1 className="font-display text-display-sm font-bold mb-4">
            Thank You!
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            We've received your inquiry and will be in touch within 1-2 business days.
            A member of our team will reach out to discuss how Visionblox can help
            transform your operations.
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              Return to Homepage
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent" />
        
        <div className="container-wide relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent-primary" />
              </div>
              <span className="text-sm font-mono uppercase tracking-wider text-accent-primary">
                Commercial Inquiry
              </span>
            </div>

            <h1 className="font-display text-display-sm md:text-display-md font-bold mb-4">
              Let's Build Something Together
            </h1>
            <p className="text-xl text-text-secondary">
              Tell us about your organization and operational challenges.
              We'll show you how our platforms can help.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="container-wide mb-12">
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  s === step
                    ? 'bg-accent-primary text-background-primary'
                    : s < step
                    ? 'bg-accent-primary/20 text-accent-primary'
                    : 'bg-background-tertiary text-text-tertiary'
                }`}
              >
                {s < step ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              <span
                className={`text-sm hidden sm:block ${
                  s === step ? 'text-text-primary' : 'text-text-tertiary'
                }`}
              >
                {s === 1 ? 'Contact' : s === 2 ? 'Company' : 'Project'}
              </span>
              {s < 3 && <div className="flex-1 h-px bg-background-tertiary" />}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <section className="pb-20">
        <div className="container-wide">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-background-secondary rounded-2xl border border-white/5 p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-display text-heading-lg font-semibold mb-2">
                    Contact Information
                  </h2>
                  <p className="text-text-secondary mb-6">
                    How can we reach you?
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      required
                      value={formData.firstName || ''}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      error={errors.firstName}
                      placeholder="John"
                    />
                    <Input
                      label="Last Name"
                      required
                      value={formData.lastName || ''}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      error={errors.lastName}
                      placeholder="Doe"
                    />
                  </div>

                  <Input
                    label="Work Email"
                    required
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => updateField('email', e.target.value)}
                    error={errors.email}
                    placeholder="john.doe@company.com"
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => updateField('phone', e.target.value)}
                      error={errors.phone}
                      placeholder="+1 (555) 123-4567"
                    />
                    <Input
                      label="Job Title"
                      value={formData.jobTitle || ''}
                      onChange={(e) => updateField('jobTitle', e.target.value)}
                      error={errors.jobTitle}
                      placeholder="VP of Operations"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-display text-heading-lg font-semibold mb-2">
                    Company Information
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Tell us about your organization.
                  </p>

                  <Input
                    label="Company Name"
                    required
                    value={formData.companyName || ''}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    error={errors.companyName}
                    placeholder="Acme Corporation"
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Select
                      label="Company Size"
                      required
                      options={COMPANY_SIZE_OPTIONS}
                      placeholder="Select size..."
                      value={formData.companySize || ''}
                      onChange={(e) => updateField('companySize', e.target.value as CommercialFormData['companySize'])}
                      error={errors.companySize}
                    />
                    <Select
                      label="Industry"
                      required
                      options={INDUSTRY_OPTIONS}
                      placeholder="Select industry..."
                      value={formData.industry || ''}
                      onChange={(e) => updateField('industry', e.target.value)}
                      error={errors.industry}
                    />
                  </div>

                  <Input
                    label="Company Website"
                    type="url"
                    value={formData.website || ''}
                    onChange={(e) => updateField('website', e.target.value)}
                    error={errors.website}
                    placeholder="https://www.company.com"
                    helperText="Optional"
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-display text-heading-lg font-semibold mb-2">
                    Project Details
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Help us understand your needs.
                  </p>

                  <Select
                    label="Platform of Interest"
                    required
                    options={PLATFORM_OPTIONS}
                    placeholder="Select platform..."
                    value={formData.platform || ''}
                    onChange={(e) => updateField('platform', e.target.value as CommercialFormData['platform'])}
                    error={errors.platform}
                  />

                  <Textarea
                    label="Describe Your Use Case"
                    required
                    value={formData.useCase || ''}
                    onChange={(e) => updateField('useCase', e.target.value)}
                    error={errors.useCase}
                    placeholder="Tell us about your operational challenges and what you're hoping to achieve..."
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Select
                      label="Timeline"
                      required
                      options={TIMELINE_OPTIONS}
                      placeholder="Select timeline..."
                      value={formData.timeline || ''}
                      onChange={(e) => updateField('timeline', e.target.value as CommercialFormData['timeline'])}
                      error={errors.timeline}
                    />
                    <Select
                      label="Budget Range"
                      options={BUDGET_OPTIONS}
                      placeholder="Select range..."
                      value={formData.budget || ''}
                      onChange={(e) => updateField('budget', e.target.value as CommercialFormData['budget'])}
                      error={errors.budget}
                      helperText="Optional"
                    />
                  </div>

                  <Input
                    label="How did you hear about us?"
                    value={formData.referralSource || ''}
                    onChange={(e) => updateField('referralSource', e.target.value)}
                    placeholder="LinkedIn, referral, event, etc."
                  />

                  <Textarea
                    label="Additional Notes"
                    value={formData.additionalNotes || ''}
                    onChange={(e) => updateField('additionalNotes', e.target.value)}
                    placeholder="Any other information you'd like to share..."
                  />

                  <Checkbox
                    label="I agree to receive marketing communications from Visionblox"
                    description="You can unsubscribe at any time."
                    checked={formData.marketingConsent || false}
                    onChange={(e) => updateField('marketingConsent', e.target.checked)}
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                {step > 1 ? (
                  <Button variant="ghost" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <Button variant="primary" onClick={handleNext}>
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                  >
                    Submit Inquiry
                    <Send className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
