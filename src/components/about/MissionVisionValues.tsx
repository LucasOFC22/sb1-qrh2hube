import React from 'react';
import { Target, Award, Shield } from 'lucide-react';

export function MissionVisionValues() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                   border border-gray-100 transition-all duration-300 group">
        <div className="flex items-center mb-6">
          <div className="bg-blue-50 p-4 rounded-xl group-hover:bg-blue-100 
                       transition-colors duration-300">
            <Target className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 ml-4">Missão</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Entregar excelência em soluções logísticas, impulsionando o sucesso dos nossos clientes 
          através de inovação e eficiência operacional.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                   border border-gray-100 transition-all duration-300 group">
        <div className="flex items-center mb-6">
          <div className="bg-blue-50 p-4 rounded-xl group-hover:bg-blue-100 
                       transition-colors duration-300">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 ml-4">Visão</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Ser a referência nacional em logística integrada, reconhecida pela excelência 
          operacional e compromisso com a satisfação do cliente.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                   border border-gray-100 transition-all duration-300 group">
        <div className="flex items-center mb-6">
          <div className="bg-blue-50 p-4 rounded-xl group-hover:bg-blue-100 
                       transition-colors duration-300">
            <Award className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 ml-4">Valores</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            <span className="text-lg">Excelência em cada entrega</span>
          </li>
          <li className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            <span className="text-lg">Integridade e transparência</span>
          </li>
          <li className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            <span className="text-lg">Inovação constante</span>
          </li>
          <li className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            <span className="text-lg">Sustentabilidade</span>
          </li>
        </ul>
      </div>
    </div>
  );
}