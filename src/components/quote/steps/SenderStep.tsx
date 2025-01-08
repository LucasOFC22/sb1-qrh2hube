import React, { useState } from 'react';
import { User, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FreightQuote } from '../../../types/freight';
import { formatDocument, formatPhone, formatCEP } from '../../../utils/formatters';

interface SenderStepProps {
  data: FreightQuote['sender'];
  onBack: () => void;
  onComplete: (data: FreightQuote['sender']) => void;
}

interface ValidationErrors {
  name?: string;
  document?: string;
  phone?: string;
  email?: string;
  address?: {
    street?: string;
    number?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
}

export function SenderStep({ data, onBack, onComplete }: SenderStepProps) {
  const [localData, setLocalData] = useState(data);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof typeof localData, value: string) => {
    let formattedValue = value;
    if (field === 'document') formattedValue = formatDocument(value);
    if (field === 'phone') formattedValue = formatPhone(value);

    setLocalData(prev => ({
      ...prev,
      [field]: formattedValue
    }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleAddressChange = (field: keyof typeof localData.address, value: string) => {
    let formattedValue = value;
    if (field === 'zipCode') formattedValue = formatCEP(value);
    if (field === 'state') formattedValue = value.toUpperCase().slice(0, 2);

    setLocalData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: formattedValue
      }
    }));
    if (errors.address?.[field]) {
      setErrors(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: undefined
        }
      }));
    }
  };

  const validateField = (field: string, value: string): string | undefined => {
    if (!value.trim()) {
      return 'Campo obrigatório';
    }

    switch (field) {
      case 'name':
        return value.trim().length < 3 ? 'Nome muito curto' : undefined;
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Email inválido' : undefined;
      case 'document':
        return value.replace(/\D/g, '').length < 11 ? 'Documento inválido' : undefined;
      case 'phone':
        return value.replace(/\D/g, '').length < 10 ? 'Telefone inválido' : undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // Validate main fields
    const fields = ['name', 'document', 'phone', 'email'] as const;
    fields.forEach(field => {
      const error = validateField(field, localData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    // Validate address fields
    const addressFields = ['street', 'number', 'neighborhood', 'city', 'state', 'zipCode'] as const;
    const addressErrors: Record<string, string> = {};
    
    addressFields.forEach(field => {
      if (!localData.address[field].trim()) {
        addressErrors[field] = 'Campo obrigatório';
        isValid = false;
      }
    });

    if (Object.keys(addressErrors).length > 0) {
      newErrors.address = addressErrors;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setTouched({
      name: true,
      document: true,
      phone: true,
      email: true,
      address: true
    });

    if (validateForm()) {
      onComplete(localData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center mb-8">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Dados do Remetente</h2>
        <p className="text-gray-600 mt-2">Informe os dados de quem está enviando a mercadoria</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="form-label required">Nome Completo / Razão Social</label>
            <input
              type="text"
              value={localData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`form-input ${touched.name && errors.name ? 'border-red-500' : ''}`}
              required
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">CPF/CNPJ</label>
            <input
              type="text"
              value={localData.document}
              onChange={(e) => handleChange('document', e.target.value)}
              className={`form-input ${touched.document && errors.document ? 'border-red-500' : ''}`}
              required
            />
            {touched.document && errors.document && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.document}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">Telefone</label>
            <input
              type="tel"
              value={localData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`form-input ${touched.phone && errors.phone ? 'border-red-500' : ''}`}
              placeholder="(00) 00000-0000"
              required
            />
            {touched.phone && errors.phone && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="form-label required">Email</label>
            <input
              type="email"
              value={localData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`form-input ${touched.email && errors.email ? 'border-red-500' : ''}`}
              required
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Endereço</h3>
          </div>

          <div className="md:col-span-2">
            <label className="form-label required">Rua</label>
            <input
              type="text"
              value={localData.address.street}
              onChange={(e) => handleAddressChange('street', e.target.value)}
              className={`form-input ${
                touched.address && errors.address?.street ? 'border-red-500' : ''
              }`}
              required
            />
            {touched.address && errors.address?.street && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.address.street}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">Número</label>
            <input
              type="text"
              value={localData.address.number}
              onChange={(e) => handleAddressChange('number', e.target.value)}
              className={`form-input ${
                touched.address && errors.address?.number ? 'border-red-500' : ''
              }`}
              required
            />
            {touched.address && errors.address?.number && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.address.number}
              </p>
            )}
          </div>

          <div>
            <label className="form-label">Complemento</label>
            <input
              type="text"
              value={localData.address.complement}
              onChange={(e) => handleAddressChange('complement', e.target.value)}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label required">Bairro</label>
            <input
              type="text"
              value={localData.address.neighborhood}
              onChange={(e) => handleAddressChange('neighborhood', e.target.value)}
              className={`form-input ${
                touched.address && errors.address?.neighborhood ? 'border-red-500' : ''
              }`}
              required
            />
            {touched.address && errors.address?.neighborhood && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.address.neighborhood}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">CEP</label>
            <input
              type="text"
              value={localData.address.zipCode}
              onChange={(e) => handleAddressChange('zipCode', e.target.value)}
              className={`form-input ${
                touched.address && errors.address?.zipCode ? 'border-red-500' : ''
              }`}
              placeholder="00000-000"
              required
            />
            {touched.address && errors.address?.zipCode && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.address.zipCode}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">Cidade</label>
            <input
              type="text"
              value={localData.address.city}
              onChange={(e) => handleAddressChange('city', e.target.value)}
              className={`form-input ${
                touched.address && errors.address?.city ? 'border-red-500' : ''
              }`}
              required
            />
            {touched.address && errors.address?.city && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.address.city}
              </p>
            )}
          </div>

          <div>
            <label className="form-label required">Estado</label>
            <input
              type="text"
              value={localData.address.state}
              onChange={(e) => handleAddressChange('state', e.target.value)}
              className={`form-input ${
                touched.address && errors.address?.state ? 'border-red-500' : ''
              }`}
              maxLength={2}
              placeholder="UF"
              required
            />
            {touched.address && errors.address?.state && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.address.state}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center space-x-2 px-6 py-3 text-gray-600 
                     hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>

          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 
                     text-white rounded-lg hover:bg-blue-700 
                     transition-colors duration-200"
          >
            <span>Próximo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}