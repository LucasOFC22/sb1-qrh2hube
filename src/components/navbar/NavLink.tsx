import React from 'react';

interface NavLinkProps {
  onClick: () => void;
  text: string;
  isDark: boolean;
}

export function NavLink({ onClick, text }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 
                transition-colors duration-200 relative group"
    >
      {text}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 
                     group-hover:scale-x-100 transition-transform duration-200" />
    </button>
  );
}