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
  <button
    className={`flex items-center gap-2 group w-full text-left p-2 ${isSectionActive ? 'text-gray-100' : 'text-gray-400'
      } transition-colors duration-300 ease-in-out`}
    onClick={() => handleScrollToSection(section)}
  >
    <div
      className={`transition-all duration-300 ease-in-out h-0.25 ${isSectionActive
          ? 'w-10 bg-gray-100 scale-110'
          : 'w-5 bg-gray-400 scale-100 group-hover:w-10 group-hover:bg-gray-100 group-hover:scale-110'
        }`}
    />
    <span className="font-roboto">{label}</span>
  </button>

);
