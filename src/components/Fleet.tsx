import React from 'react';
import { Element } from 'react-scroll';

const vehicles = [
  {
    image: "https://images.unsplash.com/photo-1586191582056-b7f0372a3ce6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Caminhão Pesado",
    capacity: "Até 12.000 kg",
    features: ["Rastreamento GPS", "Refrigeração", "Seguro total"]
  },
  {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Caminhão Baú",
    capacity: "Até 7.000 kg",
    features: ["Proteção contra intempéries", "Ideal para mudanças", "Sistema anti-furto"]
  },
  {
    image: "https://images.unsplash.com/photo-1557211300-9d790af0d5cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Van de Carga",
    capacity: "Até 1.500 kg",
    features: ["Entregas urbanas", "Agilidade", "Economia"]
  }
];

export function Fleet() {
  return (
    <Element name="fleet" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossa Frota</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos com uma frota moderna e diversificada, preparada para 
            atender diferentes tipos de carga com máxima eficiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl 
                       transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{vehicle.name}</h3>
                  <p className="text-lg opacity-90">{vehicle.capacity}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}