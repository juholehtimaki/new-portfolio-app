import type React from "react";
import { Element } from "react-scroll";
import type { Section } from "../lib/types";

type Props = {
  sectionName: Section;
  children: React.ReactNode;
};

export const SectionWrapper: React.FC<Props> = ({ sectionName, children }) => (
  <Element name={sectionName} id={sectionName}>
    <div className="flex justify-center text-gray-400 max-w-lg my-20">
      {children}
    </div>
  </Element>
);
