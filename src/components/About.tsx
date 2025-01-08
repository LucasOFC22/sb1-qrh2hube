import React from 'react';
import { Element } from 'react-scroll';
import { MissionVisionValues } from './about/MissionVisionValues';
import { CompanyHighlights } from './about/CompanyHighlights';
import { CompanyStats } from './about/CompanyStats';

export function About() {
  return (
    <Element name="about" className="relative py-24 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Compromisso com a Excelência
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de uma década, a FP Transportes é referência no setor corporativo, 
            combinando tecnologia avançada com expertise logística para impulsionar 
            o sucesso dos nossos parceiros.
          </p>
        </div>

        <CompanyStats />
        <MissionVisionValues />
        <CompanyHighlights />
      </div>
    </Element>
  );
}