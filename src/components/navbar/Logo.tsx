import React from 'react';
import logoImage from '../../imags/logo.png';

interface LogoProps {
  onClick: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <div className="flex-shrink-0">
      <button 
        onClick={onClick}
        className="flex items-center hover:opacity-80 transition-opacity duration-200"
      >
        <img 
          src={logoImage}
          alt="FP Transportes"
          className="h-10 w-auto"
        />
      </button>
    </div>
  );
}