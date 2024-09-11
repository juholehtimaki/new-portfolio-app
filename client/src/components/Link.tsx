import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  label: string;
  link: string;
};

export const Link: React.FC<Props> = ({ label, link }) => (
  <a href={link}>
    <div className="flex flex-row items-center text-sm text-gray-100 gap-2 hover:gap-4 transition-all duration-300">
      <div>{label}</div>
      <FaArrowRight />
    </div>
  </a>
);
