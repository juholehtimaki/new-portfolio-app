import React from 'react';
import { MeSection } from './sections/MeSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { EducationSection } from './sections/EducationSection';
import { Layout } from './components/Layout';
import { AboutSection } from './sections/AboutSection';

export const App: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-row gap-10">
        <div className="sticky top-0 h-screen">
          <MeSection />
        </div>
        <div className="flex flex-col">
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
        </div>
      </div>
    </Layout>
  );
};
