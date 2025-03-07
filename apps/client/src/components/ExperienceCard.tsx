import type React from "react";
import type { Experience } from "../lib/types";
import { Link } from "./Link";
import { SkillChip } from "./SkillChip";

type Props = Experience;

export const ExperienceCard: React.FC<Props> = ({
  duration,
  title,
  description,
  skills,
  additionalLink,
}) => (
  <div className="flex flex-row gap-1">
    <div className="flex-shrink-0 w-1/3 text-sm">{duration}</div>
    <div className="flex flex-col gap-3">
      <div className="font-bold text-gray-100">{title}</div>
      <div className="text-sm">{description}</div>
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill) => (
          <SkillChip key={skill} label={skill} />
        ))}
      </div>
      {additionalLink && (
        <Link label={"View project in GitHub"} link={additionalLink} />
      )}
    </div>
  </div>
);
