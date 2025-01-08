import React from 'react';
import { Package, Truck, MapPin, Users } from 'lucide-react';

const stats = [
  {
    icon: <Package className="h-8 w-8" />,
    value: '+50mil',
    label: 'Entregas Realizadas',
    color: 'blue'
  },
  {
    icon: <Truck className="h-8 w-8" />,
    value: '+30',
    label: 'Veículos na Frota',
    color: 'green'
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    value: '+30',
    label: 'Cidades Atendidas',
    color: 'red'
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: '+1000',
    label: 'Colaboradores',
    color: 'purple'
  }
];

export function CompanyStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                   border border-gray-100 transform hover:-translate-y-1 
                   transition-all duration-300 text-center group"
        >
          <div className="inline-block p-4 rounded-xl bg-blue-50 mb-4 
                       group-hover:bg-blue-100 transition-colors duration-300">
            <div className="text-blue-600">{stat.icon}</div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}