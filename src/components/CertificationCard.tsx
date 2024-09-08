import React from 'react';
import { Link } from './Link';

type Props = {
  title: string;
  image: string;
  verifyLink: string;
  validFrom: string;
};

export const CertificationCard: React.FC<Props> = ({
  title,
  image,
  validFrom,
  verifyLink,
}) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <img src={image} alt="cert" className="w-[10rem] h-[10rem]" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <div className="font-bold text-gray-100">{title}</div>
          <div className="text-sm">{validFrom}</div>
        </div>
        <Link label="View certification" link={verifyLink} />
      </div>
    </div>
  );
};
