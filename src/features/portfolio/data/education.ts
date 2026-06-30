import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "rtu",
    school: "Rajasthan Technical University",
    degree: "Bachelor of Technology (B.Tech)",
    fieldOfStudy: "Computer Science Engineering",
    period: {
      start: "08.2019",
      end: "06.2023",
    },
    description: `- Graduated with a CGPA of 8.70/10.
- Built a strong foundation in computer science through coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.
- Actively explored modern web technologies through personal projects and hands-on development, laying the foundation for a career in full-stack software engineering.`,
    // skills: [
    //   "Data Structures & Algorithms",
    //   "Object-Oriented Programming",
    //   "Database Management Systems",
    //   "Operating Systems",
    //   "Computer Networks",
    //   "Software Engineering",
    //   "C++",
    //   "JavaScript",
    //   "Git",
    //   "Problem Solving",
    //   "Teamwork",
    // ],
    isExpanded: true,
  },
]
