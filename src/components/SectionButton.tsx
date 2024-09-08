import React from 'react';
import { Section } from '../types';

type Props = {
  label: string;
  section: Section;
  isSectionActive: boolean;
  handleScrollToSection: (sectionName: Section) => void;
};

export const SectionButton: React.FC<Props> = ({
  label,
  isSectionActive,
  handleScrollToSection,
  section,
}) => (
  <div
    className={`flex items-center gap-2 group ${isSectionActive ? 'text-gray-100' : 'text-gray-400'}`}
  >
    <div
      className={`transition-all duration-300 ease-in-out h-0.25 ${
        isSectionActive ||
        'group-hover:w-10 group-hover:bg-gray-100 group-hover:scale-110'
      } ${
        isSectionActive
          ? 'w-10 bg-gray-100 scale-110'
          : 'w-5 bg-gray-400 scale-100'
      }`}
    />
    <button
      className={`font-roboto ${
        isSectionActive
          ? 'text-gray-100'
          : 'text-gray-400 group-hover:text-gray-100'
      } transition-colors duration-300 ease-in-out`}
      onClick={() => handleScrollToSection(section)}
    >
      {label}
    </button>
  </div>
);
