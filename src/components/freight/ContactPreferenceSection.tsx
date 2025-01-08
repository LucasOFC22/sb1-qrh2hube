import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import type { FreightQuote } from '../../types/freight';
import { FormattedInput } from './FormattedInput';

interface ContactPreferenceSectionProps {
  contactPreference: FreightQuote['contactPreference'];
  contactValue: string;
  onContactPreferenceChange: (preference: 'whatsapp' | 'email') => void;
  onContactValueChange: (value: string) => void;
}

export function ContactPreferenceSection({
  contactPreference,
  contactValue,
  onContactPreferenceChange,
  onContactValueChange
}: ContactPreferenceSectionProps) {
  return (
    <section className="quote-section">
      <div className="quote-section-header">
        <div className="quote-section-icon">
          <MessageSquare className="h-6 w-6" />
        </div>
        <h3 className="quote-section-title">Preferência de Contato</h3>
      </div>
      
      <div className="space-y-6">
        <div className="flex space-x-4">
          <label className="flex-1">
            <div className={`p-4 rounded-lg border-2 transition-colors duration-200 cursor-pointer
                          flex items-center space-x-3
                          ${contactPreference === 'whatsapp' 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-200'}`}>
              <input
                type="radio"
                name="contactPreference"
                value="whatsapp"
                checked={contactPreference === 'whatsapp'}
                onChange={() => onContactPreferenceChange('whatsapp')}
                className="sr-only"
              />
              <MessageSquare className={`h-5 w-5 ${
                contactPreference === 'whatsapp' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <span className={`font-medium ${
                contactPreference === 'whatsapp' ? 'text-blue-600' : 'text-gray-600'
              }`}>
                WhatsApp
              </span>
            </div>
          </label>

          <label className="flex-1">
            <div className={`p-4 rounded-lg border-2 transition-colors duration-200 cursor-pointer
                          flex items-center space-x-3
                          ${contactPreference === 'email' 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-200'}`}>
              <input
                type="radio"
                name="contactPreference"
                value="email"
                checked={contactPreference === 'email'}
                onChange={() => onContactPreferenceChange('email')}
                className="sr-only"
              />
              <Mail className={`h-5 w-5 ${
                contactPreference === 'email' ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <span className={`font-medium ${
                contactPreference === 'email' ? 'text-blue-600' : 'text-gray-600'
              }`}>
                E-mail
              </span>
            </div>
          </label>
        </div>

        <div className="space-y-2">
          {contactPreference === 'whatsapp' ? (
            <FormattedInput
              type="phone"
              label="Número do WhatsApp"
              value={contactValue}
              onChange={onContactValueChange}
              placeholder="(00) 00000-0000"
              required
            />
          ) : (
            <div className="input-group">
              <label className="form-label required">Endereço de E-mail</label>
              <input
                type="email"
                value={contactValue}
                onChange={(e) => onContactValueChange(e.target.value)}
                placeholder="seu@email.com"
                className="form-input"
                required
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}