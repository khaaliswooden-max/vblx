import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Visionblox',
  description:
    'Visionblox LLC terms of service — the terms and conditions governing use of our website and services.',
}

const sections = [
  {
    num: '01',
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using the Visionblox LLC website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
    ],
  },
  {
    num: '02',
    title: 'Description of Services',
    content: [
      'Visionblox LLC provides healthcare IT consulting, technology solutions, and related professional services. The specific scope of services is defined in individual agreements between Visionblox LLC and its clients.',
      'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.',
    ],
  },
  {
    num: '03',
    title: 'Intellectual Property',
    content: [
      'All content on this website — including text, graphics, logos, images, and software — is the property of Visionblox LLC or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.',
    ],
  },
  {
    num: '04',
    title: 'User Responsibilities',
    content: [
      'You agree to use our website and services only for lawful purposes and in accordance with these terms. You are responsible for ensuring that your use does not violate any applicable laws, regulations, or third-party rights.',
      'You agree not to attempt to gain unauthorized access to any part of our website, systems, or networks, or to interfere with the proper functioning of our services.',
    ],
  },
  {
    num: '05',
    title: 'Limitation of Liability',
    content: [
      'To the fullest extent permitted by law, Visionblox LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our website or services, even if we have been advised of the possibility of such damages.',
      'Our total liability for any claim arising from these terms or your use of our services shall not exceed the amount paid by you, if any, to Visionblox LLC during the twelve months preceding the claim.',
    ],
  },
  {
    num: '06',
    title: 'Indemnification',
    content: [
      'You agree to indemnify and hold harmless Visionblox LLC, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of our website or services or your violation of these terms.',
    ],
  },
  {
    num: '07',
    title: 'Governing Law',
    content: [
      'These terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts located in Delaware.',
    ],
  },
  {
    num: '08',
    title: 'Termination',
    content: [
      'We reserve the right to terminate or suspend your access to our website and services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.',
    ],
  },
  {
    num: '09',
    title: 'Changes to Terms',
    content: [
      'We may revise these Terms of Service at any time by updating this page. Changes take effect immediately upon posting. Your continued use of our website after changes are posted constitutes your acceptance of the revised terms.',
    ],
  },
  {
    num: '10',
    title: 'Contact Information',
    content: [
      'If you have questions about these Terms of Service, please contact us at info@visionblox.com or visit our contact page.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="bg-vbx-navy min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container-wide">
          <p
            className="font-mono text-vbx-teal tracking-[0.12em] uppercase mb-6"
            style={{ fontSize: '0.8125rem' }}
          >
            {'// Terms of Service'}
          </p>
          <h1
            className="font-display text-vbx-white leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Terms of Service
          </h1>
          <p
            className="font-mono text-vbx-muted tracking-[0.08em] mt-4"
            style={{ fontSize: '0.75rem' }}
          >
            EFFECTIVE DATE: APRIL 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p
              className="font-sans text-vbx-muted mb-16"
              style={{ fontSize: '1rem', lineHeight: 1.8 }}
            >
              Please read these Terms of Service carefully before using the
              Visionblox LLC website or engaging with our services. These terms
              constitute a legally binding agreement between you and Visionblox
              LLC.
            </p>

            {sections.map((section, i) => (
              <div key={section.num}>
                <p
                  className="font-mono text-vbx-teal tracking-[0.12em] uppercase mb-3"
                  style={{ fontSize: '0.8125rem' }}
                >
                  {section.num}&nbsp;&nbsp;//&nbsp;&nbsp;{section.title}
                </p>
                <h2
                  className="font-display text-vbx-white mb-4"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                >
                  {section.title}
                </h2>
                {section.content.map((p, j) => (
                  <p
                    key={j}
                    className="font-sans text-vbx-muted mb-4"
                    style={{ fontSize: '1rem', lineHeight: 1.8 }}
                  >
                    {p}
                  </p>
                ))}
                {i < sections.length - 1 && <div className="data-line my-12" />}
              </div>
            ))}

            <div className="data-line my-12" />
            <p
              className="font-sans text-vbx-muted"
              style={{ fontSize: '1rem', lineHeight: 1.8 }}
            >
              For further inquiries, please{' '}
              <Link
                href="/contact"
                className="text-vbx-teal hover:text-vbx-white transition-colors underline"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
