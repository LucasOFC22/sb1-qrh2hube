import validator from 'validator';
import { isValidCPF, isValidCNPJ } from './documentValidators';

export const validateEmail = (email: string): boolean => {
  return validator.isEmail(email);
};

export const validatePhone = (phone: string): boolean => {
  const numbers = phone.replace(/\D/g, '');
  return numbers.length >= 10 && numbers.length <= 11;
};

export const validateDocument = (document: string): boolean => {
  const numbers = document.replace(/\D/g, '');
  return numbers.length === 11 ? isValidCPF(numbers) : isValidCNPJ(numbers);
};

export const validateCEP = (cep: string): boolean => {
  const numbers = cep.replace(/\D/g, '');
  return numbers.length === 8;
};

export const validateState = (state: string): boolean => {
  const states = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];
  return states.includes(state.toUpperCase());
};