import React from 'react';
import { MeSection } from './sections/MeSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { EducationSection } from './sections/EducationSection';
import { Layout } from './components/Layout';
import { AboutSection } from './sections/AboutSection';
import { MouseWrapper } from './components/MouseWrapper';
import { Footer } from './components/Footer';

export const App: React.FC = () => (
  <MouseWrapper>
    <Layout>
      <div className="flex flex-col lg:flex-row lg:gap-40">
        <div className="lg:sticky lg:top-0 lg:h-screen">
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
          <Footer />
        </div>
      </div>
    </Layout>
  </MouseWrapper>
);
