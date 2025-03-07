import { ExperienceCard } from "../components/ExperienceCard";
import { SectionWrapper } from "../components/SectionWrapper";
import type { Experience } from "../lib/types";

const experiences: Experience[] = [
  {
    duration: "Nov 2024 - Present",
    title: "Elisa - Software Engineer",
    description:
      "Full-stack software development in the distributed energy storage domain, including projects such as Elisa's Kotiakku and related backend systems.",
    skills: [
      "AWS",
      "TypeScript",
      "React.js",
      "Node.js",
      "Flutter",
      "Dart",
      "Python",
      "Tailwind CSS",
      "Docker",
    ],
  },
  {
    duration: "Jan 2022 - Nov 2024",
    title: "Cirit - Software Developer",
    description:
      "Full-stack development and consulting across ERP systems and e-commerce projects. My work included building modern, high-traffic websites, developing scalable and reliable backend solutions, leveraging data analytics, automating cloud infrastructure (Infrastructure as Code - IaC), and setting up efficient development pipelines.",
    skills: [
      "AWS",
      "Node.js",
      "TypeScript",
      "React.js",
      "Angular",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "Contentful",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    duration: "Apr 2021 - Dec 2021",
    title: "Knowit / Cybercom - Software Developer",
    description:
      "Full-stack development and consulting across multiple projects, ranging from websites to mobile applications. My work included building modern web applications and cross-platform mobile apps with voice-command support, developing cloud solutions, automating pipelines, and implementing comprehensive E2E testing.",
    skills: [
      "AWS",
      "Node.js",
      "TypeScript",
      "React.js",
      "Flutter",
      "Dart",
      "GraphQL",
    ],
  },
  {
    duration: "Mar 2020 - Mar 2021",
    title: "Nokia - Trainee",
    description:
      "Full-stack development within a team building microservices for a cloud-native network management system. My responsibilities included developing frontend and backend microservices, implementing comprehensive testing, and automating pipelines and deployments.",
    skills: ["Node.js", "React.js", "Docker", "Kubernetes", "Jenkins", "Java"],
  },
];

export const ExperienceSection = () => (
  <SectionWrapper sectionName="experience">
    <div className="flex flex-col gap-20">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.title} {...exp} />
      ))}
    </div>
  </SectionWrapper>
);
