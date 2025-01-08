import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

interface ContactPreferenceProps {
  selectedOption: 'whatsapp' | 'email';
  onSelect: (option: 'whatsapp' | 'email') => void;
  contactValue: string;
  onContactValueChange: (value: string) => void;
}

export function ContactPreference({
  selectedOption,
  onSelect,
  contactValue,
  onContactValueChange
}: ContactPreferenceProps) {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Preferência de Contato
      </h2>

      <div className="space-y-6">
        <div className="flex space-x-4">
          <label className="flex-1">
            <div className={`p-4 rounded-lg border-2 transition-colors duration-200 cursor-pointer
                          flex items-center space-x-3
                          ${selectedOption === 'whatsapp' 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-200'}`}>
              <input
                type="radio"
                name="contactPreference"
                value="whatsapp"
                checked={selectedOption === 'whatsapp'}
                onChange={() => onSelect('whatsapp')}
                className="sr-only"
              />
              <MessageSquare className={`h-5 w-5 ${
                selectedOption === 'whatsapp' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <span className={`font-medium ${
                selectedOption === 'whatsapp' ? 'text-blue-600' : 'text-gray-600'
              }`}>
                WhatsApp
              </span>
            </div>
          </label>

          <label className="flex-1">
            <div className={`p-4 rounded-lg border-2 transition-colors duration-200 cursor-pointer
                          flex items-center space-x-3
                          ${selectedOption === 'email' 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-200'}`}>
              <input
                type="radio"
                name="contactPreference"
                value="email"
                checked={selectedOption === 'email'}
                onChange={() => onSelect('email')}
                className="sr-only"
              />
              <Mail className={`h-5 w-5 ${
                selectedOption === 'email' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <span className={`font-medium ${
                selectedOption === 'email' ? 'text-blue-600' : 'text-gray-600'
              }`}>
                E-mail
              </span>
            </div>
          </label>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {selectedOption === 'whatsapp' ? 'Número do WhatsApp' : 'Endereço de E-mail'}
          </label>
          <input
            type={selectedOption === 'whatsapp' ? 'tel' : 'email'}
            value={contactValue}
            onChange={(e) => onContactValueChange(e.target.value)}
            placeholder={selectedOption === 'whatsapp' 
              ? '(00) 00000-0000' 
              : 'seu@email.com'
            }
            className="form-input"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            {selectedOption === 'whatsapp'
              ? 'Digite seu número com DDD'
              : 'Digite seu endereço de e-mail'
            }
          </p>
        </div>
      </div>
    </div>
  );
}