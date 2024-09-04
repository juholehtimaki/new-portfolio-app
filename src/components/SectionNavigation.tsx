import React, { useEffect, useState } from 'react';
import { Section } from '../types';
import { Events, scroller } from 'react-scroll';
import { SectionButton } from './SectionButton';

type SectionItem = {
  section: Section;
  label: string;
};

const sections: SectionItem[] = [
  { section: 'about', label: 'About' },
  { section: 'experience', label: 'Experience' },
  { section: 'education', label: 'Education' },
  { section: 'certifications', label: 'Certifications' },
];

export const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState<Section | null>('about');

  const handleScrollToSection = (section: Section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleScroll = () => {
    const sections: Section[] = [
      'experience',
      'education',
      'certifications',
      'about',
    ];
    const sectionOffsets = sections
      .map((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { section, rectTop: rect.top, rectBottom: rect.bottom };
        }
        return null;
      })
      .filter((sec) => sec !== null);

    const scrollPosition = window.innerHeight / 2;

    const active = sectionOffsets.find((sec) => {
      return sec.rectTop <= scrollPosition && sec!.rectBottom >= scrollPosition;
    });

    if (active) {
      setActiveSection(active.section);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    Events.scrollEvent.register('end', (to) => {
      setActiveSection(to as Section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 items-start pt-10">
      {sections.map((section) => (
        <SectionButton
          key={section.section}
          section={section.section}
          label={section.label}
          isSectionActive={activeSection === section.section}
          handleScrollToSection={() => handleScrollToSection(section.section)}
        />
      ))}
    </div>
  );
};
