import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const BANK_URLS = {
  itau: 'https://www.itau.com.br/servicos/boletos/segunda-via',
  bradesco: 'https://www.bradesco.com.br/2via-boleto'
};

interface BillDropdownProps {
  isDark: boolean;
  isMobile?: boolean;
}

export function BillDropdown({ isDark, isMobile = false }: BillDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 
                    text-base font-medium text-gray-600 hover:text-blue-600"
        >
          <span>2ª via</span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-1 animate-fade-in">
            {Object.entries(BANK_URLS).map(([bank, url]) => (
              <a
                key={bank}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              >
                {bank.charAt(0).toUpperCase() + bank.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      ref={dropdownRef}
      className="relative inline-block"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 
                  transition-colors duration-200 flex items-center"
      >
        <span>2ª via</span>
        <ChevronDown 
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 rounded-md shadow-lg bg-white 
                      ring-1 ring-black ring-opacity-5 z-50 animate-fade-in">
          <div className="py-1" role="menu">
            {Object.entries(BANK_URLS).map(([bank, url]) => (
              <a
                key={bank}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 
                         hover:text-blue-600 transition-colors duration-200"
                role="menuitem"
              >
                {bank.charAt(0).toUpperCase() + bank.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}