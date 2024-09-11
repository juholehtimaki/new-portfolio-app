import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

export const AboutSection = () => (
  <SectionWrapper sectionName="about">
    <div className="flex flex-col gap-5">
      <p>
        I'm a driven and passionate full-stack developer with a love for
        tackling a wide range of challenges, whether it's building software or
        something like playing chess. In my work, I enjoy getting involved in
        both frontend and backend development. I also like designing scalable
        solutions and working with cloud infrastructures.
      </p>
      <p>
        My core tech stack includes React.js, Node.js, TypeScript, and AWS, but
        I’ve also worked with Vue.js, Angular, and Next.js. I’m always eager to
        dive into new frameworks and tools, and once I’ve got a handle on them,
        I enjoy passing that knowledge on to others.
      </p>
      <p>
        On a personal note, I’m a friendly, easy-going guy who loves being part
        of a team. When I’m not working, you’ll probably find me running, at the
        gym, playing guitar, hanging out with friends, trying out new recipes,
        or, of course, playing chess.
      </p>
    </div>
  </SectionWrapper>
);
