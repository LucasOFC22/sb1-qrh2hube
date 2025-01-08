import React from 'react';
import { Truck, Shield, Clock } from 'lucide-react';

export function CompanyHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="group">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                     border border-gray-100 transition-all duration-300 h-full">
          <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6 
                       group-hover:bg-blue-100 transition-colors duration-300">
            <Truck className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnologia Avançada</h3>
          <p className="text-gray-600 leading-relaxed">
            Frota moderna com rastreamento em tempo real e sistemas inteligentes de 
            roteirização para máxima eficiência.
          </p>
        </div>
      </div>

      <div className="group">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                     border border-gray-100 transition-all duration-300 h-full">
          <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6 
                       group-hover:bg-blue-100 transition-colors duration-300">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Segurança Total</h3>
          <p className="text-gray-600 leading-relaxed">
            Monitoramento 24/7 e protocolos rigorosos de segurança para garantir a 
            integridade de cada carga.
          </p>
        </div>
      </div>

      <div className="group">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                     border border-gray-100 transition-all duration-300 h-full">
          <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6 
                       group-hover:bg-blue-100 transition-colors duration-300">
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Compromisso com Prazos</h3>
          <p className="text-gray-600 leading-relaxed">
            Planejamento logístico preciso e equipe dedicada para garantir entregas 
            pontuais e confiáveis.
          </p>
        </div>
      </div>
    </div>
  );
}