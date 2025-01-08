import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FreightQuote } from '../../types/freight';
import { CargoStep } from './steps/CargoStep';
import { SenderStep } from './steps/SenderStep';
import { RecipientStep } from './steps/RecipientStep';
import { ContactStep } from './steps/ContactStep';
import { ReviewStep } from './steps/ReviewStep';

interface QuoteFormProps {
  onSubmit: (data: FreightQuote) => void;
  onStepChange: (step: string) => void;
}

const steps = ['cargo', 'sender', 'recipient', 'contact', 'review'] as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const initialFormData: FreightQuote = {
  cargo: {
    description: '',
    weight: 0,
    length: 0,
    width: 0,
    height: 0,
    value: 0,
    quantity: 1
  },
  sender: {
    name: '',
    document: '',
    phone: '',
    email: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    }
  },
  recipient: {
    name: '',
    document: '',
    phone: '',
    email: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    }
  },
  contactPreference: 'whatsapp',
  contactValue: ''
};

export function QuoteForm({ onSubmit, onStepChange }: QuoteFormProps) {
  const [formData, setFormData] = useState<FreightQuote>(initialFormData);
  const [currentStep, setCurrentStep] = useState<string>('cargo');
  const [direction, setDirection] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const handleNext = useCallback(() => {
    const currentIndex = steps.indexOf(currentStep as any);
    if (currentIndex < steps.length - 1) {
      setDirection(1);
      const nextStep = steps[currentIndex + 1];
      setCurrentStep(nextStep);
      onStepChange(nextStep);
    }
  }, [currentStep, onStepChange]);

  const handlePrev = useCallback(() => {
    const currentIndex = steps.indexOf(currentStep as any);
    if (currentIndex > 0) {
      setDirection(-1);
      const prevStep = steps[currentIndex - 1];
      setCurrentStep(prevStep);
      onStepChange(prevStep);
    }
  }, [currentStep, onStepChange]);

  const handleStepComplete = useCallback((stepData: Partial<FreightQuote>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      newSet.add(currentStep);
      return newSet;
    });
    
    // Only proceed to next step if this is not the review step
    if (currentStep !== 'review') {
      handleNext();
    } else {
      onSubmit(formData);
    }
  }, [currentStep, handleNext, onSubmit, formData]);

  const isStepAccessible = useCallback((step: string): boolean => {
    const stepIndex = steps.indexOf(step as any);
    const currentIndex = steps.indexOf(currentStep as any);
    
    // First step is always accessible
    if (stepIndex === 0) return true;
    
    // Previous steps are accessible
    if (stepIndex < currentIndex) return true;
    
    // Current step is accessible
    if (stepIndex === currentIndex) return true;
    
    // Next step is only accessible if current step is completed
    if (stepIndex === currentIndex + 1) {
      return completedSteps.has(currentStep);
    }
    
    // Future steps require all previous steps to be completed
    for (let i = 0; i < stepIndex; i++) {
      if (!completedSteps.has(steps[i])) {
        return false;
      }
    }
    
    return true;
  }, [currentStep, completedSteps]);

  return (
    <div className="relative overflow-hidden bg-white rounded-xl shadow-lg p-8">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          {currentStep === 'cargo' && (
            <CargoStep
              data={formData.cargo}
              onComplete={(data) => handleStepComplete({ cargo: data })}
            />
          )}
          {currentStep === 'sender' && isStepAccessible('sender') && (
            <SenderStep
              data={formData.sender}
              onBack={handlePrev}
              onComplete={(data) => handleStepComplete({ sender: data })}
            />
          )}
          {currentStep === 'recipient' && isStepAccessible('recipient') && (
            <RecipientStep
              data={formData.recipient}
              onBack={handlePrev}
              onComplete={(data) => handleStepComplete({ recipient: data })}
            />
          )}
          {currentStep === 'contact' && isStepAccessible('contact') && (
            <ContactStep
              data={{ 
                contactPreference: formData.contactPreference, 
                contactValue: formData.contactValue 
              }}
              onBack={handlePrev}
              onComplete={(data) => handleStepComplete(data)}
            />
          )}
          {currentStep === 'review' && isStepAccessible('review') && (
            <ReviewStep
              data={formData}
              onBack={handlePrev}
              onComplete={() => onSubmit(formData)}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}