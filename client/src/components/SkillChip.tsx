import React from 'react';

type Props = {
  label: string;
};

export const SkillChip: React.FC<Props> = ({ label }) => (
  <div className="bg-teal-400/10 text-teal-300 rounded-full px-2 py-1 text-sm">
    {label}
  </div>
);
