import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  url: string;
};

export const SocialMediaLink: React.FC<Props> = ({ icon: Icon, url }) => {
  const handleClick = () => {
    window.open(url); // Opens the URL in a new tab
  };

  return (
    <button onClick={handleClick} className="hover:text-blue-500">
      <Icon size={25} className="text-gray-400 hover:text-gray-100" />
    </button>
  );
};
