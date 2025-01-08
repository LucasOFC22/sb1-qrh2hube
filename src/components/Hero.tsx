import React from 'react';
import { ArrowRight, Clock, Shield, MapPin, Users } from 'lucide-react';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Monitoramento 24h',
    description: 'Rastreamento em tempo real da sua carga'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Segurança Total',
    description: 'Proteção completa para sua mercadoria'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Cobertura Nacional',
    description: 'Atendimento em todo o Brasil'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Equipe Qualificada',
    description: 'Profissionais altamente treinados'
  }
];

export function Hero() {
  const navigate = useNavigate();

  return (
    <Element name="home" className="relative min-h-screen bg-gradient-to-b from-white via-white to-blue-50/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
              Soluções Logísticas Inteligentes
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed animate-fade-in max-w-2xl">
              Transformando desafios em entregas bem-sucedidas com tecnologia, 
              segurança e eficiência para o seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/cotacao')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg 
                         hover:bg-blue-700 transform hover:scale-105 
                         transition-all duration-300 text-lg font-semibold
                         shadow-lg hover:shadow-xl animate-fade-in
                         flex items-center"
              >
                Solicitar Cotação
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/frota')}
                className="bg-white text-gray-700 px-8 py-4 
                         rounded-lg hover:bg-gray-50 transform hover:scale-105 
                         transition-all duration-300 text-lg font-semibold
                         shadow-lg hover:shadow-xl animate-fade-in
                         border border-gray-200"
              >
                Conheça Nossa Frota
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6
                         transform hover:-translate-y-1
                         transition-all duration-300 animate-fade-in
                         border border-gray-100 hover:shadow-xl
                         group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4 transform group-hover:scale-110 
                               transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curved transition to About section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white"></div>
    </Element>
  );
}