import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/smoothScroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { BillDropdown } from './navbar/BillDropdown';
import { NavLink } from './navbar/NavLink';
import { MobileNavLink } from './navbar/MobileNavLink';
import { Logo } from './navbar/Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const navigateToFleet = () => {
    navigate('/frota', { replace: true });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo onClick={() => navigate('/')} />

          <div className="hidden md:flex md:items-center md:space-x-2">
            <NavLink onClick={() => handleNavClick('home')} text="Início" isDark={true} />
            <NavLink onClick={() => handleNavClick('services')} text="Serviços" isDark={true} />
            <NavLink onClick={navigateToFleet} text="Frota" isDark={true} />
            <NavLink onClick={() => navigate('/cotacao')} text="Cotação" isDark={true} />
            <NavLink onClick={() => handleNavClick('contact')} text="Contato" isDark={true} />
            <BillDropdown isDark={true} />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 
                     transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink onClick={() => handleNavClick('home')} text="Início" />
            <MobileNavLink onClick={() => handleNavClick('services')} text="Serviços" />
            <MobileNavLink onClick={navigateToFleet} text="Frota" />
            <MobileNavLink onClick={() => navigate('/cotacao')} text="Cotação" />
            <MobileNavLink onClick={() => handleNavClick('contact')} text="Contato" />
            <div className="px-3 py-2">
              <BillDropdown isDark={true} isMobile={true} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}