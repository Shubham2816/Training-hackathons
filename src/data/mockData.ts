
import type { Training, Certification, Category } from "../types"



export const trainings: Training[] = [
  {
    id: "1",
    title: "Artificial Intelligence Intern",
    description:
      "Completed a 4-week virtual internship on Artificial Intelligence, organized by AICTE, Shell India, and Edunet Foundation. Gained hands-on exposure to emerging technologies and sustainable tech practices using AIML",
    duration: "40 hours",
    level: "Intermediate",
    image: "/assets/int.PNG?height=200&width=300",
    tags: ["Python", "ML", "CNN" , "Digital Image Processing", "Computer Vision"],
  },
  {
    id: "2",
    title: "Google Cloud Facilator Program ",
    description:
      "Successfully led the Google Cloud Facilitator Program, mentoring students through hands-on labs and cloud computing concepts on Google Cloud Platform (GCP). Enabled peer learning, promoted cloud adoption, and contributed to building foundational skills in cloud infrastructure and development.",
    duration: "100+ hours",
    level: "Advanced",
    image: "/assets/gcp.PNG?height=200&width=300",
    tags: ["Cloud Applications", "Firebase", "Programming", "Kubernetes", "BigData","Artificial Intelligence (AI)"],
  },
  {
    id: "3",
    title: "Node.js Backend Development",
    description: "Build robust backend applications with Node.js, Express, and database integration.",
    duration: "50 hours",
    level: "Intermediate",
    image: "/assets/hs.PNG?height=200&width=300",
    tags: ["Node.js", "Backend", "API"],
  },
  {
    id: "4",
    title: "Cloud Architecture with AWS",
    description: "Design and implement scalable cloud solutions using AWS services and best practices.",
    duration: "60 hours",
    level: "Advanced",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["AWS", "Cloud", "Architecture"],
  },
]





export const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Validates expertise in designing distributed systems on AWS platform.",
    dateIssued: "2023-08-15",
    expiryDate: "2026-08-15",
    category: "Cloud Computing",
    image: "/placeholder.svg?height=150&width=200",
    credentialId: "AWS-SAA-2023-001",
  },
  {
    id: "2",
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    description: "Demonstrates skills in Kubernetes cluster administration and management.",
    dateIssued: "2023-06-20",
    expiryDate: "2026-06-20",
    category: "DevOps",
    image: "/placeholder.svg?height=150&width=200",
    credentialId: "CKA-2023-002",
  },
  {
    id: "3",
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    description: "Validates knowledge of Scrum framework and ability to apply it effectively.",
    dateIssued: "2023-04-10",
    category: "Project Management",
    image: "/placeholder.svg?height=150&width=200",
    credentialId: "PSM-I-2023-003",
  },
  {
    id: "4",
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    description: "Demonstrates proficiency in developing applications on Google Cloud Platform.",
    dateIssued: "2023-09-05",
    expiryDate: "2025-09-05",
    category: "Cloud Computing",
    image: "/placeholder.svg?height=150&width=200",
    credentialId: "GCP-PD-2023-004",
  },
  {
    id: "5",
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    description: "Validates skills in containerization and Docker platform administration.",
    dateIssued: "2023-07-12",
    expiryDate: "2025-07-12",
    category: "DevOps",
    image: "/placeholder.svg?height=150&width=200",
    credentialId: "DCA-2023-005",
  },
  {
    id: "6",
    title: "Certified Information Security Manager",
    issuer: "ISACA",
    description: "Demonstrates expertise in information security management and governance.",
    dateIssued: "2023-03-18",
    expiryDate: "2026-03-18",
    category: "Security",
    image: "/placeholder.svg?height=150&width=200",
    credentialId: "CISM-2023-006",
  },
]






export const categories: Category[] = [
  { id: "all", name: "All Categories", count: certifications.length },
  {
    id: "cloud",
    name: "Cloud Computing",
    count: certifications.filter((c) => c.category === "Cloud Computing").length,
  },
  { id: "devops", name: "DevOps", count: certifications.filter((c) => c.category === "DevOps").length },
  { id: "security", name: "Security", count: certifications.filter((c) => c.category === "Security").length },
  {
    id: "project",
    name: "Project Management",
    count: certifications.filter((c) => c.category === "Project Management").length,
  },
]
