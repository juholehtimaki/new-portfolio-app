import React from 'react';
import { Summary } from '../components/Summary';
import { SectionNavigation } from '../components/SectionNavigation';

export const MeSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-between m-h-full">
      <div className="flex flex-col m-h-full">
        <Summary />
        <SectionNavigation />
      </div>
    </div>
  );
};
