import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "orufy",
    companyName: "Orufy",
    companyLogo: "https://assets.ikrishan.com/images/orufy-logo.webp",
    companyWebsite: "https://orufy.com",
    positions: [
      {
        id: "2",
        title: "Software Development Engineer 2",
        employmentPeriod: {
          start: "04.2025",
          end: "02.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Led the frontend architecture for Orufy Projects, a scalable SaaS platform, delivering 25+ production features from planning to deployment.\n- Improved application stability through architectural enhancements, proactive debugging, and code quality initiatives.\n- Mentored 5 engineers through code reviews and technical guidance, helping 2 interns transition into full-time software engineers.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "NestJS",
          "MongoDB",
          "TanStack Query",
          "Turborepo",
          "WebSocket",
          "Socket.io",
        ],
        isExpanded: true,
      },
      {
        id: "1",
        title: "Software Development Engineer",
        employmentPeriod: {
          start: "12.2023",
          end: "04.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Promoted to SDE-2 within 16 months for consistently delivering high-impact features and taking end-to-end ownership across multiple products.\n- Architected and built the frontend foundation for Orufy Projects, delivering 15+ core product features using Turborepo, React Flow, and WebSockets.\n- Developed two revenue-generating Pro plugins for WebtoNative with complete React-based configuration interfaces.\n- Revamped the Orufy Connect chatbot dashboard in one week, translating Figma designs into a pixel-perfect Next.js application.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "React Flow",
          "Turborepo",
          "WebSocket",
          "Socket.io",
          "Figma",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "malik-ventures",
    companyName: "Malik Ventures",
    companyLogo: "https://assets.ikrishan.com/images/malik-ventures-logo.webp", // Replace with actual logo
    companyWebsite: "https://www.facebook.com/malikindustry",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "09.2022",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Converted from intern to full-time based on strong delivery and early impact across multiple internal products.\n- Designed and developed the Radix Healthcare platform from scratch using Next.js, Tailwind CSS, and Strapi CMS, integrating appointment booking for 60+ doctors.\n- Enhanced multi-tenant internal platforms by delivering 10+ product features, resolving 30+ production issues, and fixing critical cron jobs and database synchronization problems.\n- Developed the frontend for a scalable hospital operations and inventory management system, enabling multi-business support through a modern Next.js architecture.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Bootstrap",
          "Node.js",
          "Strapi CMS",
          "MongoDB",
          "Git",
          "Figma",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
]
