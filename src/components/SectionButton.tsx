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
}) => {
  return (
    <button
      className={`font-roboto ${isSectionActive ? 'text-blue-500' : 'text-gray-400 '}`}
      onClick={() => handleScrollToSection(section)}
    >
      {label}
    </button>
  );
};
