'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LGSProductCard = () => {
  const modules = [
    {
      name: 'LGS-Parking',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'ANPR, payments, kiosks, boom barriers',
    },
    {
      name: 'LGS-Visitor',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
      description: 'Access control, multi-zone tracking',
    },
    {
      name: 'LGS-Employee',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'Biometric auth, attendance, payroll',
    },
  ];

  const features = [
    { label: 'Genetec + T2 Flex', desc: 'Native LPR integration' },
    { label: '6 Payment Methods', desc: 'Apple Pay, Google Pay, PayPal, NFC' },
    { label: 'Mobile Portal', desc: 'Visitor self-service with FaceID' },
    { label: 'Event Parking', desc: 'Pre-booking & department billing' },
  ];

  return (
    <div className="group relative bg-gradient-to-br from-background-secondary to-background-tertiary rounded-2xl border border-[#344669]/10 hover:border-accent-primary/30 transition-all duration-500 overflow-hidden">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Header */}
      <div className="relative p-8 pb-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            {/* LotGrid Systems Logo (full lockup: icon + LotGrid + SYSTEMS) */}
            <div className="mb-2">
              <Image
                src="/lotgrid-logo.png"
                alt="LotGrid Systems"
                width={280}
                height={84}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-text-secondary text-sm max-w-sm">
              Smart Parking & Visitor Management Platform
            </p>
          </div>
          
          {/* Status badge */}
          <span className="px-3 py-1 text-xs font-medium bg-accent-primary/10 text-accent-primary rounded-full border border-accent-primary/20">
            PROPRIETARY
          </span>
        </div>

        {/* Modules */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {modules.map((module) => (
            <div
              key={module.name}
              className="p-3 rounded-xl bg-background-primary border border-[#344669]/10 hover:border-accent-primary/20 hover:bg-accent-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-accent-primary">{module.icon}</span>
                <span className="text-xs font-semibold text-text-primary">{module.name}</span>
              </div>
              <p className="text-[10px] text-text-tertiary leading-relaxed">{module.description}</p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-2">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-start gap-2 p-2">
              <svg className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="text-xs font-medium text-text-primary">{feature.label}</span>
                <p className="text-[10px] text-text-tertiary">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative px-8 py-4 border-t border-[#344669]/10 bg-background-primary">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-tertiary">
              <span className="text-text-secondary">Use Cases:</span> Universities • Stadiums • Corporate • Healthcare
            </span>
          </div>
          <Link 
            href="/contact"
            className="group/btn flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
          >
            Learn More
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LGSProductCard;
