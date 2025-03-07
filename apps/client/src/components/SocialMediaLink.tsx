import type React from "react";
import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
  url: string;
};

export const SocialMediaLink: React.FC<Props> = ({ icon: Icon, url }) => {
  const handleClick = () => {
    window.open(url);
  };

  return (
    <button type="button" onClick={handleClick} className="hover:text-blue-500">
      <Icon size={25} className="text-gray-400 hover:text-gray-100" />
    </button>
  );
};
