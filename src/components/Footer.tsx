import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { scrollToSection } from '../utils/smoothScroll';
import logoImage from '../imags/logo.png';

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="FP Transportes" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600">
              Seu parceiro confiável em soluções de transporte e logística.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('fleet')} 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Frota
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Transporte Rodoviário</li>
              <li className="text-gray-600">Armazenagem</li>
              <li className="text-gray-600">Entrega Expressa</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} FP TRANSPORTES. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}