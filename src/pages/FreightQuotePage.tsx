import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { QuoteForm } from '../components/quote/QuoteForm';
import { QuoteHeader } from '../components/quote/QuoteHeader';
import { QuoteSteps } from '../components/quote/QuoteSteps';
import type { FreightQuote } from '../types/freight';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function FreightQuotePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('cargo');
  const [completedSteps, setCompletedSteps] = useState(new Set<string>());

  const handleStepChange = useCallback((step: string) => {
    setCurrentStep(step);
    const stepOrder = ['cargo', 'sender', 'recipient', 'contact', 'review'];
    const currentIndex = stepOrder.indexOf(step);
    setCompletedSteps(prev => {
      const newCompleted = new Set(prev);
      for (let i = 0; i < currentIndex; i++) {
        newCompleted.add(stepOrder[i]);
      }
      return newCompleted;
    });
  }, []);

  const handleQuoteSubmit = useCallback((formData: FreightQuote) => {
    navigate('/contato-preferencial', {
      state: {
        freightData: formData,
        contactPreference: formData.contactPreference
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <motion.div 
        className="pt-24 pb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="group mb-8 flex items-center text-gray-600 hover:text-gray-900 
                     transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 
                                transition-transform duration-300" />
            <span className="text-sm font-medium">Voltar para Home</span>
          </button>
          
          <div className="max-w-4xl mx-auto">
            <QuoteHeader />
            <QuoteSteps 
              currentStep={currentStep} 
              completedSteps={completedSteps} 
            />
            
            <div className="mt-12">
              <QuoteForm 
                onSubmit={handleQuoteSubmit}
                onStepChange={handleStepChange}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}