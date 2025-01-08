import React from 'react';
import { Truck, Package, Clock, Shield, Users, BarChart, Headphones, Warehouse } from 'lucide-react';
import { Element } from 'react-scroll';

const services = [
  {
    icon: <Truck className="h-10 w-10" />,
    title: 'Transporte Rodoviário',
    description: 'Transporte seguro e eficiente em todo território nacional com nossa moderna frota.',
    features: ['Rastreamento em tempo real', 'Seguro total da carga', 'Entrega porta a porta']
  },
  {
    icon: <Package className="h-10 w-10" />,
    title: 'Armazenagem',
    description: 'Soluções completas de armazenamento com gestão avançada de estoque.',
    features: ['Espaço climatizado', 'Segurança 24h', 'Sistema WMS']
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: 'Entrega Expressa',
    description: 'Serviço premium de entrega com prazo garantido para cargas urgentes.',
    features: ['Entrega no mesmo dia', 'Prioridade máxima', 'Monitoramento especial']
  },
  {
    icon: <Warehouse className="h-10 w-10" />,
    title: 'Gestão de Estoque',
    description: 'Controle total do seu inventário com tecnologia avançada.',
    features: ['Inventário em tempo real', 'Relatórios detalhados', 'Gestão informatizada']
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Segurança Total',
    description: 'Monitoramento 24/7 e seguro completo para todas as cargas.',
    features: ['Escolta armada', 'Monitoramento via satélite', 'Seguro all risk']
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Equipe Especializada',
    description: 'Profissionais treinados e certificados para cada tipo de operação.',
    features: ['Treinamento contínuo', 'Certificações', 'Suporte dedicado']
  }
];

export function Services() {
  return (
    <Element name="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas em Logística
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um conjunto abrangente de serviços logísticos personalizados 
            para atender às necessidades específicas do seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg 
                       hover:shadow-xl transition-all duration-500 
                       border border-gray-100 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 
                           bg-gradient-to-br from-blue-50 to-blue-100 
                           rounded-bl-full opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 -z-10"></div>
              
              {/* Icon */}
              <div className="relative">
                <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6 
                             group-hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-blue-600 transform group-hover:scale-110 
                               transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" 
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" 
                            strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 
                           transform scale-x-0 group-hover:scale-x-100 
                           transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}