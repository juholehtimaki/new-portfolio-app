import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SocialMediaLink } from './SocialMediaLink';

const links = [
  {
    icon: FaGithub,
    url: 'https://github.com/juholehtimaki',
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/juho-lehtim%C3%A4ki-32aa5819a/',
  },
];

export const SocialMediaLinks = () => (
  <div className="flex flex-row gap-5 justify-center">
    {links.map((link) => (
      <SocialMediaLink key={link.url} icon={link.icon} url={link.url} />
    ))}
  </div>
);
