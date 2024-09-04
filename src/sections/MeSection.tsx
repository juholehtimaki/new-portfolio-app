import React from 'react';
import { Summary } from '../components/Summary';
import { SectionNavigation } from '../components/SectionNavigation';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

export const MeSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-full pt-20 pb-20">
      <Summary />
      <SectionNavigation />
      <div className="flex-grow"></div>
      <SocialMediaLinks />
    </div>
  );
};
