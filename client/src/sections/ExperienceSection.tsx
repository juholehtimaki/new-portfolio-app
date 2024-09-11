import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Experience } from '../types';
import { ExperienceCard } from '../components/ExperienceCard';

const experiences: Experience[] = [
  {
    duration: 'Jan 2022 - Present',
    title: 'Cirit - Software Developer',
    description:
      'Full-stack development and consulting across a range of projects in ERP systems and e-commerce. My work has included creating modern websites for large user bases, developing scalable and reliable backend solutions, performing data analytics, automating cloud infrastructures using Infrastructure as Code (IaC), and setting up development pipelines.',
    skills: [
      'AWS',
      'Node.js',
      'TypeScript',
      'React.js',
      'Angular',
      'Vue.js',
      'Next.js',
      'Tailwind CSS',
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
      'React.js',
      'Flutter',
      'Dart',
      'GraphQL',
    ],
  },
  {
    duration: 'Mar 2020 - Mar 2021',
    title: 'Nokia - Trainee',
    description:
      'Full-stack development as part of a team building various microservices for a cloud-native network management system. My responsibilities included developing frontend and backend microservices, implementing comprehensive testing, and automating pipelines and deployments.',
    skills: ['Node.js', 'React.js', 'Docker', 'Kubernetes', 'Jenkins', 'Java'],
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
