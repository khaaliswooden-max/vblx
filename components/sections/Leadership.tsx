// Leadership.tsx - React Component for vblx.org/about
// Uses Tailwind CSS classes matching the site's dark theme

import React from 'react';

interface Leader {
  name: string;
  initials: string;
  title: string;
  bio: string;
  linkedin: string;
  email: string;
}

const LeadershipSection = () => {
  const executives: Leader[] = [
    {
      name: "Akil R. Chellam",
      initials: "AC",
      title: "CEO & Principal",
      bio: "17+ years architecting enterprise solutions across healthcare, social media, and government. AWS Certified Solutions Architect, PMP, and SAFe Agilist with deep expertise in cloud-native development.",
      linkedin: "https://linkedin.com/in/akilchellam",
      email: "akil.chellam@visionblox.com"
    }
  ];

  const leaders: Leader[] = [
    {
      name: "Khaalis Wooden",
      initials: "KW",
      title: "Director of Enterprise Capture & Compliance",
      bio: "Leading federal business development and compliance initiatives with over 15 years of experience in government contracting, supply chain, and digital transformation.",
      linkedin: "https://linkedin.com/in/khaalis-wooden-380336305",
      email: "khaalis.wooden@visionblox.com"
    },
    {
      name: "Antony Jayaraj",
      initials: "AJ",
      title: "Director, Data Engineering & Products",
      bio: "Multi-national data leader with expertise in AI/ML, enterprise architecture, and product deployment. PGP in AI & Machine Learning from UT Austin McCombs.",
      linkedin: "https://linkedin.com/in/antony-jayaraj",
      email: "antony.jayaraj@visionblox.com"
    },
    {
      name: "Peter Jayaraj",
      initials: "PJ",
      title: "Director, SAP Products",
      bio: "SAP S/4 HANA and BTP Integration specialist with expertise in cloud migration, B2B integrations, and enterprise solution architecture across multinational deployments.",
      linkedin: "https://linkedin.com/in/peter-jayaraj",
      email: "peter.jayaraj@visionblox.com"
    },
    {
      name: "Tony Paul",
      initials: "TP",
      title: "Chief Information Security Officer",
      bio: "13+ years in Information Security, Risk Management, and Compliance. CISA, CRISC, CISM certified with expertise in ISO27001, SOC2, HITRUST, and TPRM.",
      linkedin: "https://linkedin.com/in/selvakumar-paulraj-a253b941",
      email: "tony.paul@visionblox.com"
    },
    {
      name: "Magesh Ramalingam",
      initials: "MR",
      title: "Senior Technical Architect",
      bio: "20+ years in full-stack architecture. AWS Certified Cloud Practitioner & AI Practitioner with expertise in Java, Node.js, Docker, and enterprise web solutions.",
      linkedin: "https://linkedin.com/in/magesh-ramalingam",
      email: "magesh.ramalingam@visionblox.com"
    },
    {
      name: "Saravanan Swaminathan",
      initials: "SS",
      title: "Senior Solution Architect",
      bio: "15+ years designing enterprise solutions. Certified Scrum Master with AWS expertise, specializing in .NET Core, microservices, and healthcare/education systems.",
      linkedin: "https://linkedin.com/in/saravanan-swaminathan",
      email: "saravanan.swaminathan@visionblox.com"
    },
    {
      name: "Khrishanth M",
      initials: "KM",
      title: "Technical Lead",
      bio: "7+ years building high-performance web applications. Full-stack expertise in React, Node.js, Next.js, and real-time systems with Socket.io.",
      linkedin: "https://linkedin.com/in/khrishanth-m",
      email: "khrishanth.m@visionblox.com"
    },
    {
      name: "Sandhiya Ganesan",
      initials: "SG",
      title: "Senior Associate Projects",
      bio: "6.5+ years in web application development. Expert in Node.js, NestJS, and AWS services with experience in payment gateway integrations.",
      linkedin: "https://linkedin.com/in/sandhiya-ganesan",
      email: "sandhiya.ganesan@visionblox.com"
    },
    {
      name: "Vinoth Kanna",
      initials: "VK",
      title: "Senior Technical Architect",
      bio: "12+ years in web development with 6.5+ years in React. Full-stack expertise spanning PHP, React Native, and modern JavaScript frameworks.",
      linkedin: "https://linkedin.com/in/vinoth-kanna",
      email: "vinoth.kanna@visionblox.com"
    }
  ];

  const LinkedInIcon = () => (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );

  const LeaderCard = ({ leader, isExecutive = false }: { leader: Leader; isExecutive?: boolean }) => (
    <div className={`bg-[#1a1a1a] rounded-xl p-6 flex gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.1)] ${isExecutive ? 'max-w-[500px]' : ''}`}>
      <div className="w-20 h-20 min-w-[80px] bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] rounded-lg flex items-center justify-center text-2xl font-semibold text-[#0a0a0a]">
        {leader.initials}
      </div>
      <div className="flex-1">
        <h3 className="text-white text-xl font-semibold mb-1">{leader.name}</h3>
        <p className="text-[#2dd4bf] text-[0.95rem] font-medium mb-3">{leader.title}</p>
        <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">{leader.bio}</p>
        <div className="flex gap-3">
          <a 
            href={leader.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center text-[#9ca3af] transition-all duration-200 hover:bg-[#2dd4bf] hover:text-[#0a0a0a]"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a 
            href={`mailto:${leader.email}`}
            className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center text-[#9ca3af] transition-all duration-200 hover:bg-[#2dd4bf] hover:text-[#0a0a0a]"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#0a0a0a] py-20 px-5">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-white text-5xl font-semibold mb-4">Leadership</h2>
        <p className="text-[#9ca3af] text-lg">The team driving our mission forward.</p>
      </div>

      {/* Executive Row */}
      <div className="flex justify-center mb-6">
        {executives.map((exec, index) => (
          <LeaderCard key={index} leader={exec} isExecutive={true} />
        ))}
      </div>

      {/* Leadership Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
        {leaders.map((leader, index) => (
          <LeaderCard key={index} leader={leader} />
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
