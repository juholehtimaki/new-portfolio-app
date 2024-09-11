import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Experience } from '../types';
import { ExperienceCard } from '../components/ExperienceCard';

const experiences: Experience[] = [
  {
    duration: 'May 2020 - Jun 2023',
    title: "Tampere University - Master's Degree in Computer Science",
    description:
      "Wrote a master's thesis about combining DevOps and cloud in the modern software development. Thesis' project represents a fully automated full-stack serverless system, developed using AWS serverless services, CDK (Infrastructure as Code), React, and GitHub Actions. It encompasses automated testing and deployment procedures for both production and staging environments. The primary objective of this endeavor was to demonstrate the seamless integration of DevOps methodologies and cloud services in modern software development, serving as the focal point of a Master's thesis.",
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
