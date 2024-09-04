import React from 'react';
import { SkillChip } from './SkillChip';
import { Experience } from '../types';

type Props = Experience;

export const ExperienceCard: React.FC<Props> = ({
  duration,
  title,
  description,
  skills,
}) => {
  return (
    <div className="flex flex-row gap-1">
      <div className="flex-shrink-0 w-1/3 text-sm">{duration}</div>
      <div className="flex flex-col gap-3">
        <div className="font-bold text-gray-100">{title}</div>
        <div className="text-sm">{description}</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
