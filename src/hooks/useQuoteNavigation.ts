import { useState, useCallback } from 'react';
import type { FreightQuote } from '../types/freight';

interface UseQuoteNavigationProps {
  steps: readonly string[];
  initialStep: string;
  onStepChange: (step: string) => void;
  formData: FreightQuote;
  setFormData: (data: Partial<FreightQuote>) => void;
  onSubmit: (data: FreightQuote) => void;
}

// src/hooks/useQuoteNavigation.ts
export function useQuoteNavigation({
  steps,
  initialStep,
  onStepChange,
  formData,
  setFormData,
  onSubmit
}: UseQuoteNavigationProps) {
  const [currentStep, setCurrentStep] = useState<string>(initialStep);
  const [direction, setDirection] = useState(0);

  const currentIndex = steps.indexOf(currentStep);

  const handleNext = useCallback(() => {
    if (currentIndex < steps.length - 1) {
      setDirection(1);
      const nextStep = steps[currentIndex + 1];
      setCurrentStep(nextStep);
      onStepChange(nextStep);
    }
  }, [currentIndex, steps, onStepChange]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      const prevStep = steps[currentIndex - 1];
      setCurrentStep(prevStep);
      onStepChange(prevStep);
    }
  }, [currentIndex, steps, onStepChange]);

  const isStepAccessible = useCallback((step: string): boolean => {
    return true; // Allow all steps to be accessible for now
  }, []);

  return {
    currentStep,
    direction,
    handleNext,
    handlePrev,
    isStepAccessible
  };
}
