'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Shield, CheckCircle, Send, Flag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'
import {
  federalFormSchema,
  type FederalFormData,
  ORGANIZATION_TYPE_OPTIONS,
  CONTRACT_VEHICLE_OPTIONS,
  PLATFORM_OPTIONS,
  FEDERAL_TIMELINE_OPTIONS,
  ESTIMATED_VALUE_OPTIONS,
  SECURITY_LEVEL_OPTIONS,
  SET_ASIDE_OPTIONS,
  FUNDING_STATUS_OPTIONS,
  COMPLIANCE_OPTIONS,
} from '@/lib/validations'

type FormStep = 1 | 2 | 3 | 4

export default function FederalContactPage() {
  const [step, setStep] = useState<FormStep>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FederalFormData, string>>>({})
  const [selectedCompliance, setSelectedCompliance] = useState<string[]>([])
  
  const [formData, setFormData] = useState<Partial<FederalFormData>>({
    bdFollowUp: true,
    complianceRequirements: [],
  })

  const updateField = <K extends keyof FederalFormData>(
    field: K,
    value: FederalFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const toggleCompliance = (value: string) => {
    const updated = selectedCompliance.includes(value)
      ? selectedCompliance.filter((c) => c !== value)
      : [...selectedCompliance, value]
    setSelectedCompliance(updated)
    updateField('complianceRequirements', updated)
  }

  const validateStep = (currentStep: FormStep): boolean => {
    const stepFields: Record<FormStep, (keyof FederalFormData)[]> = {
      1: ['firstName', 'lastName', 'email', 'phone', 'jobTitle'],
      2: ['organizationName', 'organizationType'],
      3: ['contractVehicle', 'platform', 'projectDescription'],
      4: ['timeline'],
    }

    const fieldsToValidate = stepFields[currentStep]
    const partialSchema = federalFormSchema.pick(
      Object.fromEntries(fieldsToValidate.map((f) => [f, true])) as Record<keyof FederalFormData, true>
    )

    const result = partialSchema.safeParse(formData)
    
    if (!result.success) {
      const newErrors: Partial<Record<keyof FederalFormData, string>> = {}
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FederalFormData
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
    if (!validateStep(4)) return

    const fullResult = federalFormSchema.safeParse(formData)
    if (!fullResult.success) {
      const newErrors: Partial<Record<keyof FederalFormData, string>> = {}
      fullResult.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FederalFormData
        newErrors[field] = err.message
      })
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact/federal', {
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
            Inquiry Received
          </h1>
          <p className="text-text-secondary text-lg mb-4">
            Thank you for your interest in Visionblox solutions for government.
          </p>
          <p className="text-text-tertiary mb-8">
            A member of our Federal & SLED team will contact you within 24 hours
            to discuss your requirements. For urgent matters, please call our
            BD Command Center directly.
          </p>
          <div className="bg-background-secondary rounded-xl p-4 mb-8 inline-block">
            <p className="text-sm text-text-secondary mb-1">CAGE Code</p>
            <p className="font-mono text-accent-primary font-semibold">9Z4X2</p>
          </div>
          <div>
            <Link href="/">
              <Button variant="primary" size="lg">
                Return to Homepage
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-civium/5 to-transparent" />
        
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
              <div className="w-12 h-12 rounded-xl bg-civium/20 flex items-center justify-center">
                <Flag className="w-6 h-6 text-civium" />
              </div>
              <span className="text-sm font-mono uppercase tracking-wider text-civium">
                Federal & SLED Inquiry
              </span>
            </div>

            <h1 className="font-display text-display-sm md:text-display-md font-bold mb-4">
              Government Solutions Partner
            </h1>
            <p className="text-xl text-text-secondary mb-6">
              Connect with our Federal & SLED team to discuss mission-critical solutions
              built for government security and compliance requirements.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-background-secondary rounded-lg px-3 py-2">
                <Shield className="w-4 h-4 text-accent-primary" />
                <span className="text-text-secondary">CAGE: <span className="text-text-primary font-mono">9Z4X2</span></span>
              </div>
              <div className="flex items-center gap-2 bg-background-secondary rounded-lg px-3 py-2">
                <span className="text-text-secondary">UEI: <span className="text-text-primary font-mono">H4X2Z7R9E3E3</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="container-wide mb-12">
        <div className="flex items-center gap-4 max-w-3xl mx-auto">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex-1 flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  s === step
                    ? 'bg-civium text-background-primary'
                    : s < step
                    ? 'bg-civium/20 text-civium'
                    : 'bg-background-tertiary text-text-tertiary'
                }`}
              >
                {s < step ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              <span
                className={`text-sm hidden md:block ${
                  s === step ? 'text-text-primary' : 'text-text-tertiary'
                }`}
              >
                {s === 1 ? 'Contact' : s === 2 ? 'Organization' : s === 3 ? 'Project' : 'Details'}
              </span>
              {s < 4 && <div className="flex-1 h-px bg-background-tertiary" />}
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
            className="max-w-3xl mx-auto"
          >
            <div className="bg-background-secondary rounded-2xl border border-white/5 p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-display text-heading-lg font-semibold mb-2">
                    Contact Information
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Primary point of contact for this requirement.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      required
                      value={formData.firstName || ''}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      error={errors.firstName}
                      placeholder="Jane"
                    />
                    <Input
                      label="Last Name"
                      required
                      value={formData.lastName || ''}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      error={errors.lastName}
                      placeholder="Smith"
                    />
                  </div>

                  <Input
                    label="Work Email"
                    required
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => updateField('email', e.target.value)}
                    error={errors.email}
                    placeholder="jane.smith@agency.gov"
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      required
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => updateField('phone', e.target.value)}
                      error={errors.phone}
                      placeholder="+1 (555) 123-4567"
                    />
                    <Input
                      label="Job Title"
                      required
                      value={formData.jobTitle || ''}
                      onChange={(e) => updateField('jobTitle', e.target.value)}
                      error={errors.jobTitle}
                      placeholder="Program Manager"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-display text-heading-lg font-semibold mb-2">
                    Organization Information
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Details about your agency or organization.
                  </p>

                  <Input
                    label="Organization Name"
                    required
                    value={formData.organizationName || ''}
                    onChange={(e) => updateField('organizationName', e.target.value)}
                    error={errors.organizationName}
                    placeholder="Department of Defense"
                  />

                  <Select
                    label="Organization Type"
                    required
                    options={ORGANIZATION_TYPE_OPTIONS}
                    placeholder="Select type..."
                    value={formData.organizationType || ''}
                    onChange={(e) => updateField('organizationType', e.target.value as FederalFormData['organizationType'])}
                    error={errors.organizationType}
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Agency (if federal)"
                      value={formData.agency || ''}
                      onChange={(e) => updateField('agency', e.target.value)}
                      placeholder="e.g., Army, HHS, DHS"
                    />
                    <Input
                      label="Department/Office"
                      value={formData.department || ''}
                      onChange={(e) => updateField('department', e.target.value)}
                      placeholder="e.g., IT Division"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-display text-heading-lg font-semibold mb-2">
                    Project Requirements
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Tell us about your mission requirements.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Select
                      label="Contract Vehicle"
                      required
                      options={CONTRACT_VEHICLE_OPTIONS}
                      placeholder="Select vehicle..."
                      value={formData.contractVehicle || ''}
                      onChange={(e) => updateField('contractVehicle', e.target.value as FederalFormData['contractVehicle'])}
                      error={errors.contractVehicle}
                    />
                    <Select
                      label="Platform of Interest"
                      required
                      options={PLATFORM_OPTIONS}
                      placeholder="Select platform..."
                      value={formData.platform || ''}
                      onChange={(e) => updateField('platform', e.target.value as FederalFormData['platform'])}
                      error={errors.platform}
                    />
                  </div>

                  <Textarea
                    label="Project Description"
                    required
                    value={formData.projectDescription || ''}
                    onChange={(e) => updateField('projectDescription', e.target.value)}
                    error={errors.projectDescription}
                    placeholder="Describe the mission need, current pain points, and desired outcomes..."
                    className="min-h-[150px]"
                  />

                  <Input
                    label="NAICS Codes (if known)"
                    value={formData.naicsCodes || ''}
                    onChange={(e) => updateField('naicsCodes', e.target.value)}
                    placeholder="e.g., 541511, 541512"
                    helperText="Comma-separated if multiple"
                  />

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-3">
                      Compliance Requirements
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {COMPLIANCE_OPTIONS.map((option) => (
                        <Checkbox
                          key={option.value}
                          label={option.label}
                          checked={selectedCompliance.includes(option.value)}
                          onChange={() => toggleCompliance(option.value)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="font-display text-heading-lg font-semibold mb-2">
                    Timeline & Additional Details
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Help us understand your procurement timeline.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Select
                      label="Timeline"
                      required
                      options={FEDERAL_TIMELINE_OPTIONS}
                      placeholder="Select timeline..."
                      value={formData.timeline || ''}
                      onChange={(e) => updateField('timeline', e.target.value as FederalFormData['timeline'])}
                      error={errors.timeline}
                    />
                    <Select
                      label="Estimated Contract Value"
                      options={ESTIMATED_VALUE_OPTIONS}
                      placeholder="Select range..."
                      value={formData.estimatedValue || ''}
                      onChange={(e) => updateField('estimatedValue', e.target.value as FederalFormData['estimatedValue'])}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Select
                      label="Security Classification"
                      options={SECURITY_LEVEL_OPTIONS}
                      placeholder="Select level..."
                      value={formData.securityLevel || ''}
                      onChange={(e) => updateField('securityLevel', e.target.value as FederalFormData['securityLevel'])}
                    />
                    <Select
                      label="Funding Status"
                      options={FUNDING_STATUS_OPTIONS}
                      placeholder="Select status..."
                      value={formData.fundingStatus || ''}
                      onChange={(e) => updateField('fundingStatus', e.target.value as FederalFormData['fundingStatus'])}
                    />
                  </div>

                  <Select
                    label="Set-Aside Preference"
                    options={SET_ASIDE_OPTIONS}
                    placeholder="Select preference..."
                    value={formData.setAsidePreference || ''}
                    onChange={(e) => updateField('setAsidePreference', e.target.value as FederalFormData['setAsidePreference'])}
                  />

                  <Input
                    label="Current Incumbent (if replacing)"
                    value={formData.currentIncumbent || ''}
                    onChange={(e) => updateField('currentIncumbent', e.target.value)}
                    placeholder="Company name"
                  />

                  <Textarea
                    label="Additional Notes"
                    value={formData.additionalNotes || ''}
                    onChange={(e) => updateField('additionalNotes', e.target.value)}
                    placeholder="Any other information relevant to this opportunity..."
                  />

                  <Checkbox
                    label="Request BD Command Center follow-up"
                    description="Our federal BD team will proactively reach out to discuss this opportunity."
                    checked={formData.bdFollowUp || false}
                    onChange={(e) => updateField('bdFollowUp', e.target.checked)}
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

                {step < 4 ? (
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
