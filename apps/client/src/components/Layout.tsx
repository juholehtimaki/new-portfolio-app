import type React from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex justify-center pr-10 pl-10">{children}</div>
);
