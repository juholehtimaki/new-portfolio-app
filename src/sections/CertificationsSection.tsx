import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import architect from './../assets/images/aws_architect_cert.png';
import dev from './../assets/images/aws_developer_cert.png';
import serverless from './../assets/images/aws_serverless_badge.png';
import { CertificationCard } from '../components/CertificationCard';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    image: architect,
    validFrom: 'Dec 2023 - Dec 2026',
    verifyLink:
      'https://www.credly.com/badges/94787ea1-d2ad-4516-b70c-02edb2746797/linked_in_profile',
  },
  {
    title: 'AWS Certified Developer – Associate',
    image: dev,
    validFrom: 'June 2023 - June 2026',
    verifyLink:
      'https://www.credly.com/badges/2c0fd06c-1505-4096-8e97-042fca2b4edd/linked_in_profile',
  },
  {
    title: 'AWS Knowledge: Serverless',
    image: serverless,
    validFrom: 'Feb 2024',
    verifyLink:
      'https://www.credly.com/badges/2c0fd06c-1505-4096-8e97-042fca2b4edd/linked_in_profile',
  },
];

export const CertificationsSection = () => (
  <SectionWrapper sectionName="certifications">
    <div className="flex flex-col gap-20">
      {certifications.map(({ title, image, validFrom, verifyLink }) => (
        <CertificationCard
          key={title}
          title={title}
          image={image}
          validFrom={validFrom}
          verifyLink={verifyLink}
        />
      ))}
    </div>
  </SectionWrapper>
);
