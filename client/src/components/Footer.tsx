import React from 'react';

export const Footer = () => (
  <span className="mb-20 font-roboto text-gray-400 max-w-md gap-5">
    <span>
      This website was built using React.js and Tailwind CSS. The source code is
      available on{' '}
    </span>
    <a
      href="https://github.com/juholehtimaki/new-portfolio-app"
      target="_blank"
      className="text-gray-100"
    >
      GitHub
    </a>
    <span>.</span>
  </span>
);
