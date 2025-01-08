import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Cotação Rápida",
    description: "Receba sua cotação em até 2 horas úteis"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Segurança Garantida",
    description: "Sua carga protegida do início ao fim"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Agilidade",
    description: "Processo simplificado e eficiente"
  }
];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function QuoteHeader() {
  return (
    <div className="text-center">
      <motion.div
        variants={headerVariants}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Solicite sua Cotação
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Preencha os detalhes da sua carga para receber uma cotação personalizada
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={featureVariants}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                     transition-all duration-300 border border-gray-100"
          >
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 
                         flex items-center justify-center text-blue-600">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}