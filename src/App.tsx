import React from 'react';
import { MeSection } from './sections/MeSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { EducationSection } from './sections/EducationSection';
import { Layout } from './components/Layout';
import { AboutSection } from './sections/AboutSection';

export const App: React.FC = () => (
  <Layout>
    <div className="flex flex-row gap-10">
      <div className="sticky top-0 h-screen">
        <MeSection />
      </div>
      <div className="flex flex-col">
        <AboutSection />
        <hr className="border-t border-gray-300 my-4" />
        <ExperienceSection />
        <hr className="border-t border-gray-300 my-4" />
        <EducationSection />
        <hr className="border-t border-gray-300 my-4" />
        <CertificationsSection />
      </div>
    </div>
  </Layout>
);
