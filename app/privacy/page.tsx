import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Visionblox',
  description:
    'Visionblox LLC privacy policy — how we collect, use, and protect your information.',
}

const sections = [
  {
    num: '01',
    title: 'Information We Collect',
    content: [
      'We may collect personal information that you voluntarily provide when you contact us, request services, or interact with our website. This includes your name, email address, phone number, organization name, and any other details you choose to share.',
      'We also automatically collect certain technical information when you visit our site, including your IP address, browser type, operating system, referring URLs, and browsing behavior through cookies and similar technologies.',
    ],
  },
  {
    num: '02',
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect to respond to your inquiries, provide and improve our services, communicate with you about projects and opportunities, and ensure the security and functionality of our website.',
      'We may also use aggregated, non-identifiable data for analytics purposes to better understand how visitors interact with our site and to improve our offerings.',
    ],
  },
  {
    num: '03',
    title: 'Information Sharing and Disclosure',
    content: [
      'We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.',
      'We may also disclose your information when required by law, to enforce our policies, or to protect the rights, property, or safety of Visionblox LLC or others.',
    ],
  },
  {
    num: '04',
    title: 'Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    num: '05',
    title: 'Your Rights and Choices',
    content: [
      'You may request access to, correction of, or deletion of your personal information by contacting us. You may also opt out of receiving promotional communications from us at any time by following the unsubscribe instructions in those messages.',
    ],
  },
  {
    num: '06',
    title: 'Cookies and Tracking Technologies',
    content: [
      'Our website uses cookies and similar tracking technologies to enhance your experience, analyze site traffic, and understand usage patterns. You can control cookie preferences through your browser settings, though disabling cookies may affect site functionality.',
    ],
  },
  {
    num: '07',
    title: 'Third-Party Links',
    content: [
      'Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
  },
  {
    num: '08',
    title: 'Changes to This Policy',
    content: [
      'We may update this privacy policy from time to time. Changes will be posted on this page with a revised effective date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.',
    ],
  },
  {
    num: '09',
    title: 'Contact Information',
    content: [
      'If you have questions about this privacy policy or our data practices, please contact us at info@visionblox.com or visit our contact page.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-vbx-navy min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container-wide">
          <p
            className="font-mono text-vbx-teal tracking-[0.12em] uppercase mb-6"
            style={{ fontSize: '0.8125rem' }}
          >
            {'// Privacy Policy'}
          </p>
          <h1
            className="font-display text-vbx-white leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Privacy Policy
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
              Visionblox LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              is committed to protecting your privacy. This policy describes how
              we collect, use, and safeguard your information when you visit our
              website or engage with our services.
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
