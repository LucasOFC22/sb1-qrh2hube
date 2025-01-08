import React, { useState } from 'react';
import { MessageSquare, Mail, ArrowLeft, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FreightQuote } from '../../../types/freight';

interface ContactStepProps {
  data: Pick<FreightQuote, 'contactPreference' | 'contactValue'>;
  onBack: () => void;
  onComplete: (data: Pick<FreightQuote, 'contactPreference' | 'contactValue'>) => void;
}

export function ContactStep({ data, onBack, onComplete }: ContactStepProps) {
  const [localData, setLocalData] = useState(data);
  const [errors, setErrors] = useState<{ contactValue?: string }>({});
  const [touched, setTouched] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { contactValue?: string } = {};
    
    if (!localData.contactValue) {
      newErrors.contactValue = 'Campo obrigatório';
    } else if (localData.contactPreference === 'email') {
      if (!/\S+@\S+\.\S+/.test(localData.contactValue)) {
        newErrors.contactValue = 'Email inválido';
      }
    } else if (localData.contactPreference === 'whatsapp') {
      if (localData.contactValue.replace(/\D/g, '').length < 10) {
        newErrors.contactValue = 'Número inválido';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    
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
          <MessageSquare className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Forma de Contato</h2>
        <p className="text-gray-600 mt-2">Como você prefere receber nossa resposta?</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex space-x-4">
          <label className="flex-1">
            <div className={`p-6 rounded-lg border-2 transition-colors duration-200 cursor-pointer
                          flex items-center space-x-3
                          ${localData.contactPreference === 'whatsapp' 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-200'}`}>
              <input
                type="radio"
                name="contactPreference"
                value="whatsapp"
                checked={localData.contactPreference === 'whatsapp'}
                onChange={() => setLocalData(prev => ({ ...prev, contactPreference: 'whatsapp', contactValue: '' }))}
                className="sr-only"
              />
              <MessageSquare className={`h-6 w-6 ${
                localData.contactPreference === 'whatsapp' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <div>
                <p className={`font-medium ${
                  localData.contactPreference === 'whatsapp' ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  WhatsApp
                </p>
                <p className="text-sm text-gray-500">Resposta mais rápida</p>
              </div>
            </div>
          </label>

          <label className="flex-1">
            <div className={`p-6 rounded-lg border-2 transition-colors duration-200 cursor-pointer
                          flex items-center space-x-3
                          ${localData.contactPreference === 'email' 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-200'}`}>
              <input
                type="radio"
                name="contactPreference"
                value="email"
                checked={localData.contactPreference === 'email'}
                onChange={() => setLocalData(prev => ({ ...prev, contactPreference: 'email', contactValue: '' }))}
                className="sr-only"
              />
              <Mail className={`h-6 w-6 ${
                localData.contactPreference === 'email' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <div>
                <p className={`font-medium ${
                  localData.contactPreference === 'email' ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  E-mail
                </p>
                <p className="text-sm text-gray-500">Detalhes completos por escrito</p>
              </div>
            </div>
          </label>
        </div>

        <div className="space-y-4">
          {localData.contactPreference === 'whatsapp' ? (
            <div className="space-y-2">
              <label className="form-label required">Número do WhatsApp</label>
              <input
                type="tel"
                value={localData.contactValue}
                onChange={(e) => setLocalData(prev => ({ ...prev, contactValue: e.target.value }))}
                className={`form-input ${touched && errors.contactValue ? 'border-red-500' : ''}`}
                placeholder="(00) 00000-0000"
                required
              />
              {touched && errors.contactValue && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.contactValue}
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <label className="form-label required">Endereço de E-mail</label>
              <input
                type="email"
                value={localData.contactValue}
                onChange={(e) => setLocalData(prev => ({ ...prev, contactValue: e.target.value }))}
                className={`form-input ${touched && errors.contactValue ? 'border-red-500' : ''}`}
                placeholder="seu@email.com"
                required
              />
              {touched && errors.contactValue && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.contactValue}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center space-x-2 px-6 py-3 text-gray-600 
                     hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 w-5" />
            <span>Voltar</span>
          </button>

          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 
                     text-white rounded-lg hover:bg-blue-700 
                     transition-colors duration-200"
          >
            <span>Próximo</span>
            <Send className="w-5 w-5" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}