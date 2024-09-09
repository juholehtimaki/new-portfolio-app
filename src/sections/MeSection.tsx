import React from 'react';
import { Summary } from '../components/Summary';
import { SectionNavigation } from '../components/SectionNavigation';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const MeSection: React.FC = () => (
  <div className="flex flex-col justify-between min-h-full pt-20 lg:pb-20">
    <Summary />
    <div className="hidden lg:block">
      <SectionNavigation />
    </div>
    <div className="flex-grow"></div>
    <div className="mt-10 lg:mt-0">
      <SocialMediaLinks />
    </div>
  </div>
);
