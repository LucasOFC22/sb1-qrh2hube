import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

export function ContactInformation() {
  return (
    <div className="p-8 border-b border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <User className="h-4 w-4 mr-2" />
            Nome Completo <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            required
            className="form-input"
            placeholder="Seu nome completo"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Mail className="h-4 w-4 mr-2" />
            Email <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            required
            className="form-input"
            placeholder="seu@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Phone className="h-4 w-4 mr-2" />
            Telefone <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="tel"
            required
            className="form-input"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>
    </div>
  );
}