import React from 'react';
import { Element } from 'react-scroll';
import { Section } from '../types';

type Props = {
  sectionName: Section;
  children: React.ReactNode;
};

export const SectionWrapper: React.FC<Props> = ({ sectionName, children }) => {
  return (
    <Element name={sectionName} id={sectionName}>
      <div className="flex justify-center text-gray-400 max-w-lg pt-20 pb-20">
        {children}
      </div>
    </Element>
  );
};
