import React from 'react';
import { Truck, Package, Weight, Forklift, Navigation, Cog, Users, MapPin, Calendar } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const equipments = [
  {
    icon: <Weight className="h-8 w-8" />,
    name: 'Balanças',
    description: 'Equipamentos de pesagem de alta precisão'
  },
  {
    icon: <Forklift className="h-8 w-8" />,
    name: 'Empilhadeiras',
    description: 'Movimentação eficiente de cargas'
  },
  {
    icon: <Package className="h-8 w-8" />,
    name: 'Carrinhos Hidráulicos',
    description: 'Transporte interno de mercadorias'
  },
  {
    icon: <Navigation className="h-8 w-8" />,
    name: 'Rastreadores',
    description: 'Monitoramento em tempo real'
  },
  {
    icon: <Truck className="h-8 w-8" />,
    name: 'Plataforma Móvel',
    description: 'Caminhões equipados com tecnologia avançada'
  },
  {
    icon: <Cog className="h-8 w-8" />,
    name: 'Equipamentos Especializados',
    description: 'Material completo para transporte e manuseio'
  }
];

const fleetHighlights = [
  {
    icon: <Truck />,
    title: 'Frota Moderna',
    description: 'Mercedes-Benz Bitruck e outros modelos'
  },
  {
    icon: <Calendar />,
    title: 'Idade Média',
    description: '3 anos de idade média dos veículos'
  },
  {
    icon: <Users />,
    title: 'Parceiros',
    description: '25 caminhoneiros autônomos agregados'
  },
  {
    icon: <MapPin />,
    title: 'Cobertura',
    description: 'Atendimento em todo território nacional'
  }
];

export function FleetPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa Frota
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Excelência em transporte com uma frota moderna e diversificada para 
              atender todas as suas necessidades logísticas
            </p>
          </div>
        </div>

        {/* Fleet Highlights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 w-6 h-6">
                      {highlight.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:border-r border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Frota Própria
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-3 rounded-lg mr-4">
                      <Truck className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Mercedes-Benz Bitruck
                      </h3>
                      <p className="text-gray-600">
                        Nossa frota inclui o moderno Mercedes-Benz Bitruck, oferecendo 
                        maior capacidade de carga e eficiência no transporte.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-3 rounded-lg mr-4">
                      <Calendar className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Idade Média de 3 Anos
                      </h3>
                      <p className="text-gray-600">
                        Mantemos nossa frota sempre atualizada para garantir máxima 
                        eficiência e confiabilidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Parceiros Agregados
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-3 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        25 Parceiros Qualificados
                      </h3>
                      <p className="text-gray-600">
                        Contamos com uma rede de caminhoneiros autônomos agregados, 
                        cuidadosamente selecionados.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-3 rounded-lg mr-4">
                      <Truck className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Frota Complementar
                      </h3>
                      <p className="text-gray-600">
                        Caminhões truck e bitruck para atender diferentes 
                        necessidades de transporte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nossos Equipamentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipments.map((equipment, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                           transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                    <div className="text-gray-600">
                      {equipment.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {equipment.name}
                  </h3>
                  <p className="text-gray-600">
                    {equipment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}