import type React from "react";

export const Summary: React.FC = () => (
  <div className="flex flex-col gap-4">
    <h1 className="text-5xl font-roboto font-bold text-gray-100">
      Juho Lehtimäki
    </h1>
    <h3 className="text-xl font-roboto font-bold text-gray-100">
      Full Stack Developer
    </h3>
    <p className="font-roboto text-gray-400 max-w-xs">
      I build scalable, cloud-powered, and efficient web solutions.
    </p>
  </div>
);
