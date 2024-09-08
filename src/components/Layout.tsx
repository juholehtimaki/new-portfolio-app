import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex justify-center">{children}</div>
);
