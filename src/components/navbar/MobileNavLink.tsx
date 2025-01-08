import React from 'react';

interface MobileNavLinkProps {
  onClick: () => void;
  text: string;
}

export function MobileNavLink({ onClick, text }: MobileNavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-3 text-base font-medium 
                text-gray-600 hover:text-blue-600 hover:bg-gray-50 
                rounded-md transition-all duration-200"
    >
      {text}
    </button>
  );
}