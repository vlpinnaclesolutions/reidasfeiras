import React from 'react';
import { IconType } from 'react-icons';

interface ButtomNavProps {
  titulo: string;
  icone: IconType; // Tipo de ícone fornecido pelo pacote react-icons
  onClick: () => void;
}

export const ButtomNav: React.FC<ButtomNavProps> = ({ titulo, icone, onClick }) => {
  return (
    <div onClick={onClick} className="flex pl-2 flex-column w-100 h-10 gap-3 justify-start items-center
                  bg-slate-200 hover:bg-slate-300 active:bg-slate-700
                  text-sm font-bold duration-300 ease-in-out cursor-pointer" >
      {icone && <span className="icone">{React.createElement(icone)}</span>}
      <p>{titulo}</p>

    </div>
  );
}
