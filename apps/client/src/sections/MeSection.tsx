import type React from "react";
import { SectionNavigation } from "../components/SectionNavigation";
import { SocialMediaLinks } from "../components/SocialMediaLinks";
import { Summary } from "../components/Summary";

export const MeSection: React.FC = () => (
  <div className="flex flex-col justify-between min-h-full pt-20 lg:pb-20">
    <Summary />
    <div className="hidden lg:block">
      <SectionNavigation />
    </div>
    <div className="flex-grow" />
    <div className="mt-10 lg:mt-0">
      <SocialMediaLinks />
    </div>
  </div>
);
