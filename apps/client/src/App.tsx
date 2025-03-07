import type React from "react";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { MouseWrapper } from "./components/MouseWrapper";
import { AboutSection } from "./sections/AboutSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { MeSection } from "./sections/MeSection";

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
