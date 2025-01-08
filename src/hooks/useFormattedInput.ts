import { useState, useCallback } from 'react';
import { 
  formatCurrency, 
  formatWeight, 
  formatDimensions,
  formatDocument,
  formatPhone,
  formatCEP
} from '../utils/formatters';
import {
  validateEmail,
  validatePhone,
  validateDocument,
  validateCEP,
  validateState
} from '../utils/validators';

type FormatterType = 'currency' | 'weight' | 'dimensions' | 'document' | 'phone' | 'cep';

export function useFormattedInput(type: FormatterType, initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const formatValue = useCallback((input: string) => {
    switch (type) {
      case 'currency':
        return formatCurrency(parseFloat(input) || 0);
      case 'weight':
        return formatWeight(parseFloat(input) || 0);
      case 'dimensions':
        return formatDimensions(parseFloat(input) || 0);
      case 'document':
        return formatDocument(input);
      case 'phone':
        return formatPhone(input);
      case 'cep':
        return formatCEP(input);
      default:
        return input;
    }
  }, [type]);

  const validateValue = useCallback((input: string) => {
    switch (type) {
      case 'document':
        if (!validateDocument(input)) {
          setError('Documento inválido');
          return false;
        }
        break;
      case 'phone':
        if (!validatePhone(input)) {
          setError('Telefone inválido');
          return false;
        }
        break;
      case 'cep':
        if (!validateCEP(input)) {
          setError('CEP inválido');
          return false;
        }
        break;
      default:
        break;
    }
    setError('');
    return true;
  }, [type]);

  const handleChange = useCallback((input: string) => {
    const formatted = formatValue(input);
    setValue(formatted);
    validateValue(input);
  }, [formatValue, validateValue]);

  return {
    value,
    error,
    handleChange,
    isValid: !error
  };
}