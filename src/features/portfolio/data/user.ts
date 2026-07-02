import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Krishan",
  lastName: "Kumar",
  displayName: "Krishan Kumar",
  username: "imkrrish",
  gender: "male",
  pronouns: "he/him",
  bio: "Software Engineer with 3+ years of experience building scalable SaaS applications using React, Next.js, Node.js, NestJS, and MongoDB.",
  flipSentences: [
    "Software Engineer",
    "Full Stack Developer",
    "Building Scalable SaaS Products",
    "React • Next.js • Node.js",
    "Open Source Builder",
  ],
  address: "New Delhi, India",
  phoneNumber: "KzkxNzY4OTA4OTUzOA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "aGVsbG9AaWtyaXNoYW4uY29t", // base64 encoded
  website: "https://ikrishan.com",
  jobTitle: "Software Development Engineer",
  jobs: [
    {
      title: "Software Development Engineer",
      company: "Orufy",
      website: "https://orufy.com",
      experienceId: "orufy",
    },
    // {
    //   title: "Founder",
    //   company: "Quaric",
    //   website: "https://quaric.com",
    //   experienceId: "quaric",
    // },
  ],
  about: `
- Software Engineer with 3+ years of experience building scalable SaaS products and production-ready web applications using React, Next.js, Node.js, NestJS, TypeScript, and MongoDB.
- Promoted to SDE-2 within 16 months at Orufy after leading frontend architecture, delivering 40+ product features, mentoring engineers, and taking ownership from product planning to production deployment.
- I enjoy solving complex engineering challenges, designing scalable systems, and crafting fast, intuitive user experiences. I believe great software comes from clean architecture, thoughtful implementation, and continuous learning.
- I'm currently looking for opportunities to build impactful products, collaborate with exceptional engineering teams, and solve challenging problems at scale.
`,
  avatar: "https://assets.ikrishan.com/images/ikrishan-avatar-ghibli.webp",
  avatarVariants: {
    lightOff: "https://assets.ikrishan.com/images/avatar-light-off.webp",
    lightOn: "https://assets.ikrishan.com/images/avater-light-on.webp",
    darkOff: "https://assets.ikrishan.com/images/avatar-dark-off.webp",
    darkOn: "https://assets.ikrishan.com/images/avatar-dark-on.webp",
  },
  ogImage: "https://assets.ikrishan.com/images/screenshot-og-image-dark.png",
  namePronunciationUrl: "https://assets.ikrishan.com/audio/ikrishan.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    // Personal Brand
    "Krishan Kumar",
    "Krishan",
    "Krishan Kumar Portfolio",
    "ikrishan",
    "imkrrish",
    "ikrishan.com",

    // Job Titles
    "Software Engineer",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "Frontend Developer",
    "Web Developer",
    "SDE 2",

    // Technologies
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "TanStack Query",
    "Zustand",
    "Zod",
    "Strapi CMS",
    "WebSocket",
    "Socket.io",
    "Vite",
    "Turborepo",

    // Skills
    "Frontend Architecture",
    "System Design",
    "Scalable Web Applications",
    "SaaS",
    "Multi Tenant SaaS",
    "REST API",
    "Open Source",
    "Performance Optimization",

    // Projects
    "Konvertify",
    "ScholarSync",
    "Scene Switch",
    "Radix Healthcare",

    // Misc
    "Portfolio",
    "Software Development",
    "Web Application Development",
  ],
  dateCreated: "2026-01-01", // YYYY-MM-DD
}
