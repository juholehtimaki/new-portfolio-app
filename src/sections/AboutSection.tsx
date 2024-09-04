import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

export const AboutSection = () => (
  <SectionWrapper sectionName="about">
    <div className="flex flex-col gap-5">
      <p className="text-lg">
        I’m a self-driven and passionate full stack software developer who loves
        to solve a wide variety of different problems, be it software
        development related or something else like chess. In my professional
        work-life, I usually find myself working with both, frontend and
        backend, in order to keep things interesting and constantly develop my
        skills further. Furthermore, building infrastructures and solutions on
        the cloud is something that I like doing.
      </p>
      <p>
        My tech stack consists of the most popular technologies currently being
        used in web development, the strongest ones being React.js, Node.js,
        TypeScript and AWS. Other notable techs worth mentioning are Vue.js,
        Angular and Next.js. I enjoy delving into new frameworks and techs, and
        once I get the hang of them, I love to teach others.
      </p>
      <p>
        As a person, I am a happy and social guy who gets along with everyone
        and loves to work in a team. In my free time, I love spending time with
        my friends, going outside, doing different sports such as running and
        gym, playing guitar and chess, and trying out new cooking recipes.
      </p>
    </div>
  </SectionWrapper>
);
