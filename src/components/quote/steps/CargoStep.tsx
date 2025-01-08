import React, { useState } from 'react';
import { Package, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FreightQuote } from '../../../types/freight';

interface CargoStepProps {
  data: FreightQuote['cargo'];
  onComplete: (data: FreightQuote['cargo']) => void;
}

interface ValidationErrors {
  description?: string;
  quantity?: string;
  weight?: string;
  value?: string;
  dimensions?: string;
}

export function CargoStep({ data, onComplete }: CargoStepProps) {
  const [localData, setLocalData] = useState(data);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof FreightQuote['cargo'], value: string | number) => {
    setLocalData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNumberChange = (field: keyof FreightQuote['cargo'], value: string) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    if (!isNaN(numValue)) {
      handleChange(field, numValue);
    }
  };

  const validateField = (field: string, value: any): string | undefined => {
    switch (field) {
      case 'description':
        if (!value.trim()) return 'Descrição é obrigatória';
        if (value.trim().length < 3) return 'Descrição muito curta';
        return undefined;
      case 'quantity':
        if (!value || value < 1) return 'Quantidade deve ser maior que 0';
        return undefined;
      case 'weight':
        if (!value || value <= 0) return 'Peso deve ser maior que 0';
        return undefined;
      case 'value':
        if (!value || value <= 0) return 'Valor deve ser maior que 0';
        return undefined;
      case 'dimensions':
        if (!localData.length || !localData.width || !localData.height) {
          return 'Todas as dimensões são obrigatórias';
        }
        if (localData.length <= 0 || localData.width <= 0 || localData.height <= 0) {
          return 'Dimensões devem ser maiores que 0';
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    newErrors.description = validateField('description', localData.description);
    newErrors.quantity = validateField('quantity', localData.quantity);
    newErrors.weight = validateField('weight', localData.weight);
    newErrors.value = validateField('value', localData.value);
    newErrors.dimensions = validateField('dimensions', localData);

    Object.keys(newErrors).forEach(key => {
      if (newErrors[key as keyof ValidationErrors] === undefined) {
        delete newErrors[key as keyof ValidationErrors];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const allTouched = Object.keys(localData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);

    if (validateForm()) {
      onComplete(localData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-xl p-8"
    >
      <div className="text-center mb-8">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Informações da Carga</h2>
        <p className="text-gray-600 mt-2">Preencha os detalhes da mercadoria a ser transportada</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="form-label required">Descrição da Mercadoria</label>
            <input
              type="text"
              value={localData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className={`form-input ${
                touched.description && errors.description ? 'border-red-500' : ''
              }`}
              placeholder="Ex: Eletrônicos, Móveis, etc."
              required
            />
            {touched.description && errors.description && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.description}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">Quantidade</label>
            <input
              type="number"
              value={localData.quantity || ''}
              onChange={(e) => handleNumberChange('quantity', e.target.value)}
              className={`form-input ${
                touched.quantity && errors.quantity ? 'border-red-500' : ''
              }`}
              min="1"
              step="1"
              required
            />
            {touched.quantity && errors.quantity && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.quantity}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">Peso por unidade (kg)</label>
            <input
              type="number"
              value={localData.weight || ''}
              onChange={(e) => handleNumberChange('weight', e.target.value)}
              className={`form-input ${
                touched.weight && errors.weight ? 'border-red-500' : ''
              }`}
              step="0.01"
              min="0.01"
              required
            />
            {touched.weight && errors.weight && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.weight}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">Valor Declarado (R$)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                R$
              </span>
              <input
                type="number"
                value={localData.value || ''}
                onChange={(e) => handleNumberChange('value', e.target.value)}
                className={`form-input pl-9 ${
                  touched.value && errors.value ? 'border-red-500' : ''
                }`}
                step="0.01"
                min="0.01"
                required
              />
            </div>
            {touched.value && errors.value && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.value}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="form-label required">Dimensões por unidade (cm)</label>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <input
                  type="number"
                  value={localData.length || ''}
                  onChange={(e) => handleNumberChange('length', e.target.value)}
                  className={`form-input ${
                    touched.dimensions && errors.dimensions ? 'border-red-500' : ''
                  }`}
                  placeholder="Comprimento"
                  step="0.01"
                  min="0.01"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  value={localData.width || ''}
                  onChange={(e) => handleNumberChange('width', e.target.value)}
                  className={`form-input ${
                    touched.dimensions && errors.dimensions ? 'border-red-500' : ''
                  }`}
                  placeholder="Largura"
                  step="0.01"
                  min="0.01"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  value={localData.height || ''}
                  onChange={(e) => handleNumberChange('height', e.target.value)}
                  className={`form-input ${
                    touched.dimensions && errors.dimensions ? 'border-red-500' : ''
                  }`}
                  placeholder="Altura"
                  step="0.01"
                  min="0.01"
                  required
                />
              </div>
            </div>
            {touched.dimensions && errors.dimensions && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.dimensions}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white 
                     rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <span>Próximo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}