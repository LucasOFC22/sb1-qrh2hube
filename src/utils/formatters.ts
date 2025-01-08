import { formatToCPF, formatToCNPJ } from './masks';

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatWeight = (value: number): string => {
  return `${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kg`;
};

export const formatDimensions = (value: number): string => {
  return `${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} cm`;
};

export const formatDocument = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  return numbers.length <= 11 ? formatToCPF(numbers) : formatToCNPJ(numbers);
};

export const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

export const formatCEP = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  return numbers.replace(/(\d{5})(\d{3})/, '$1-$2');
};