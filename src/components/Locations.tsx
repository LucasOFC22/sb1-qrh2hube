import React from 'react';
import { LocationInfo } from './locations/LocationInfo';
import { LocationMap } from './locations/LocationMap';
import { GoogleMapsProvider } from './maps/GoogleMapsProvider';

const locations = {
  matriz: {
    name: "MATRIZ",
    address: "Rua Comendador Gomes, 265, Tomba",
    city: "Feira de Santana - BA",
    cep: "CEP: 44091-238",
    phones: "(75) 3614-4323 / 3616-6155",
    coordinates: { lat: -12.294334, lng: -38.954048 }
  },
  filial: {
    name: "FILIAL",
    address: "Rua Gurjão, 16, Cidade Industrial Satélite",
    city: "Guarulhos - SP",
    cep: "CEP: 07224-040",
    phones: "(11) 2859-8420",
    coordinates: { lat: -23.4629, lng: -46.481207 }
  }
};

export function Locations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nossas Unidades
        </h2>
        
        <GoogleMapsProvider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Matriz */}
            <div className="flex flex-col space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg flex-shrink-0">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-2xl font-bold text-blue-600">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{locations.matriz.name}</h3>
                </div>
                <LocationInfo location={locations.matriz} />
              </div>
              <LocationMap location={locations.matriz} />
            </div>

            {/* Filial */}
            <div className="flex flex-col space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg flex-shrink-0">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-2xl font-bold text-blue-600">F</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{locations.filial.name}</h3>
                </div>
                <LocationInfo location={locations.filial} />
              </div>
              <LocationMap location={locations.filial} />
            </div>
          </div>
        </GoogleMapsProvider>
      </div>
    </section>
  );
}