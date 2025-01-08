import React from 'react';
import { Package, User, Send, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 'cargo',
    icon: <Package className="h-6 w-6" />,
    title: "Informações da Carga",
    description: "Detalhes da mercadoria"
  },
  {
    id: 'sender',
    icon: <User className="h-6 w-6" />,
    title: "Dados do Remetente",
    description: "Quem está enviando"
  },
  {
    id: 'recipient',
    icon: <User className="h-6 w-6" />,
    title: "Dados do Destinatário",
    description: "Quem vai receber"
  },
  {
    id: 'contact',
    icon: <Send className="h-6 w-6" />,
    title: "Forma de Contato",
    description: "Como te responderemos"
  },
  {
    id: 'review',
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Revisão",
    description: "Confirmar informações"
  }
];

interface QuoteStepsProps {
  currentStep?: string;
  completedSteps?: Set<string>;
}

export function QuoteSteps({ currentStep = 'cargo', completedSteps = new Set() }: QuoteStepsProps) {
  const stepOrder = steps.map(step => step.id);
  const currentIndex = stepOrder.indexOf(currentStep);
  
  const calculateProgress = () => {
    // Calculate progress based on current step position
    const stepsCompleted = currentIndex + 1;
    const totalSteps = steps.length;
    const progress = (stepsCompleted / totalSteps) * 100;
    return `${progress}%`;
  };

  const getStepStatus = (index: number) => {
    if (index < currentIndex) return 'completed';
    if (index === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Progress bar */}
          <div className="absolute top-6 left-0 w-full h-1">
            <div className="mx-auto w-[90%] h-full bg-gray-200 rounded">
              <motion.div 
                className="h-full bg-blue-600 rounded origin-left"
                initial={{ width: '0%' }}
                animate={{ width: calculateProgress() }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const status = getStepStatus(index);
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center relative z-10"
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center 
                             transition-all duration-300
                             ${status === 'upcoming' 
                               ? 'bg-white text-gray-400 border-2 border-gray-200' 
                               : 'bg-blue-600 text-white'}`}
                    initial={false}
                    animate={{
                      scale: status === 'current' ? 1.1 : 1,
                      backgroundColor: status === 'upcoming' ? '#ffffff' : '#2563eb'
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="mt-4 text-center">
                    <p className={`font-medium ${
                      status !== 'upcoming' ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}