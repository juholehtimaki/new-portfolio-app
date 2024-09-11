import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Experience } from '../types';
import { ExperienceCard } from '../components/ExperienceCard';

const experiences: Experience[] = [
  {
    duration: 'May 2020 - Jun 2023',
    title: "Tampere University - Master's Degree in Computer Science",
    description:
      "Wrote a master's thesis on the integration of DevOps and cloud in modern software development. The project involved building a fully automated full-stack serverless system using AWS serverless services, CDK (Infrastructure as Code), React, and GitHub Actions. It included automated testing and deployment processes for both production and staging environments. The primary objective was to demonstrate how DevOps methodologies and cloud services can be seamlessly integrated in modern software development, which was the central focus of the thesis.",
    addiotionalLink: 'https://github.com/juholehtimaki/thesis-app',
  },
  {
    duration: 'Aug 2016 - May 2020',
    title: "Tampere University - Bachelor's Degree in Computer Science",
    description: '',
  },
];

export const EducationSection = () => (
  <SectionWrapper sectionName="education">
    <div className="flex flex-col gap-20">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.title} {...exp} />
      ))}
    </div>
  </SectionWrapper>
);
