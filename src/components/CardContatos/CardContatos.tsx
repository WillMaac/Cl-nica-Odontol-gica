import React from "react";

interface CardContactProps {
  title: string;
  numero: string;
  des?: string;
  icone: React.ReactNode;
}

export const CardContact = ({ title, numero, des, icone }: CardContactProps) => {
  return (
    <article className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm max-w-md">
      
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white">
        {icone}
      </div>

      <div className="flex flex-col">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-800">{numero}</p>
        {des && <p className="text-sm text-blue-600 mt-1">{des}</p>}
      </div>
    </article>
  );
};
