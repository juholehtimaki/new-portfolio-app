import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Experience } from '../types';
import { ExperienceCard } from '../components/ExperienceCard';

const experience: Experience[] = [
  {
    duration: 'Jan 2022 - Present',
    title: 'Knowit / Cybercom - Software Developer',
    description:
      'Full-stack development and consulting across various projects in the ERP systems and e-commerce domains. My work has encompassed tasks such as creating modern websites for large user bases, developing scalable and reliable backend solutions, data analytics, automating cloud infrastructures (Infrastructure as Code - IaC), and establishing development pipelines.',
    skills: [
      'AWS',
      'Node.js',
      'TypeScript',
      'React',
      'Angular',
      'Vue.js',
      'Next.js',
      'Contentful',
      'Docker',
      'PostgreSQL',
    ],
  },
  {
    duration: 'Apr 2021 - Dec 2021',
    title: 'Knowit / Cybercom - Software Developer',
    description:
      'Full-stack development and consulting across multiple projects, spanning from websites to mobile applications. My work encompassed tasks such as building a modern web application and a cross-platform mobile app with voice-command support, creating cloud solutions, automating pipelines, and implementing comprehensive E2E tests.',
    skills: [
      'AWS',
      'Node.js',
      'TypeScript',
      'React',
      'Flutter',
      'Dart',
      'GraphQL',
    ],
  },
  {
    duration: 'Mar 2020 - Mar 2021',
    title: 'Nokia -  Trainee',
    description:
      'Full-stack development within a team focused on developing various microservices for a cloud-native network management system product. My responsibilities included developing both frontend and backend microservices, implementing comprehensive testing, and automating pipelines and deployments.',
    skills: ['Node.js', 'React', 'Docker', 'Kubernetes', 'Jenkins', 'Java'],
  },
];

export const ExperienceSection = () => (
  <SectionWrapper sectionName="experience">
    <div className="flex flex-col gap-20">
      {experience.map((exp) => (
        <ExperienceCard key={exp.title} {...exp} />
      ))}
    </div>
  </SectionWrapper>
);
