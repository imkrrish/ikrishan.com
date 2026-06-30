import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "scholarsync",
    title: "ScholarSync",
    period: {
      start: "03.2026",
    },
    link: "",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "CASL",
      "Multi-Tenant SaaS",
    ],
    description: `A multi-tenant ERP platform built from scratch for coaching institutes, designed to simplify student management, fee collection, and institute operations.

- Architected a scalable multi-tenant system supporting multiple institutes from a single codebase
- Built complete student lifecycle management including admissions, attendance, fee collection, EMI tracking, and audit logs
- Implemented secure role-based access control using CASL with granular permissions
- Designed and developed the entire application independently across frontend, backend, database, and system architecture`,
    logo: "https://assets.ikrishan.com/images/scholarsync.svg",
    isExpanded: true,
  },

  {
    id: "konvertify",
    title: "Konvertify",
    period: {
      start: "02.2025",
      end: "02.2025",
    },
    link: "https://konvertify.vercel.app",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "WebAssembly",
      "FFmpeg",
      "Open Source",
    ],
    description: `Privacy-first file conversion tool that runs entirely inside the browser using WebAssembly-powered FFmpeg with zero backend infrastructure.

- Supports images, audio, and video conversion across 10+ formats without uploading files
- Built a dynamic FFmpeg command generation engine for scalable multi-format conversion
- Enables batch processing while keeping all files on the user's device for complete privacy
- Open-source project focused on performance, accessibility, and modern browser capabilities`,
    logo: "https://assets.ikrishan.com/images/Konvertify.svg",
    isExpanded: true,
  },

  {
    id: "scene-switch",
    title: "Scene Switch",
    period: {
      start: "12.2025",
      end: "01.2026",
    },
    link: "https://imkrrish.github.io/SelfieSegmentation_video",
    skills: [
      "React",
      "TypeScript",
      "MediaPipe",
      "Canvas API",
      "WebRTC",
      "Tailwind CSS",
      "Browser APIs",
    ],
    description: `Real-time browser application that applies AI-powered webcam effects entirely on-device using MediaPipe Selfie Segmentation.

- Performs real-time background segmentation without sending camera data to a server
- Supports background blur, custom image backgrounds, animated video backgrounds, screenshots, and short video recording
- Uses browser APIs and Canvas rendering for low-latency real-time processing
- Built with a privacy-first approach requiring no backend infrastructure`,
    logo: "https://assets.ikrishan.com/images/Scene-switch.svg",
    isExpanded: false,
  },

  {
    id: "radix-healthcare",
    title: "Radix Healthcare",
    period: {
      start: "11.2022",
      end: "03.2023",
    },
    link: "https://radixhealthcare.org",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Strapi CMS",
      "Node.js",
      "MongoDB",
      "Calendly",
    ],
    description: `Production healthcare platform designed and developed from scratch for Radix Healthcare during my time at Malik Ventures.

- Built a scalable hospital website with Strapi CMS for easy content management
- Implemented doctor directory with specialty-based filtering and appointment booking for 60+ doctors
- Developed blog management, responsive layouts, and SEO-friendly pages using Next.js
- Delivered the entire platform independently from development to production deployment`,
    logo: "https://assets.ikrishan.com/images/radix-logo.svg",
    isExpanded: false,
  },
]
