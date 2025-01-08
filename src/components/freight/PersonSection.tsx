import React from 'react';
import { User, MapPin } from 'lucide-react';
import type { FreightQuote } from '../../types/freight';
import { FormattedInput } from './FormattedInput';

interface PersonSectionProps {
  title: string;
  person: FreightQuote['sender'] | FreightQuote['recipient'];
  type: 'sender' | 'recipient';
  onPersonChange: (field: string, value: string) => void;
  onAddressChange: (field: string, value: string) => void;
}

export function PersonSection({ 
  title, 
  person, 
  type,
  onPersonChange, 
  onAddressChange 
}: PersonSectionProps) {
  return (
    <section className="quote-section">
      <div className="quote-section-header">
        <div className="quote-section-icon">
          <User className="h-6 w-6" />
        </div>
        <h3 className="quote-section-title">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="input-group">
          <label className="form-label required">Nome Completo</label>
          <input
            type="text"
            value={person.name}
            onChange={(e) => onPersonChange('name', e.target.value)}
            className="form-input"
            required
          />
        </div>
        
        <FormattedInput
          type="document"
          label="CPF/CNPJ"
          value={person.document}
          onChange={(value) => onPersonChange('document', value)}
          required
        />
        
        <FormattedInput
          type="phone"
          label="Telefone"
          value={person.phone}
          onChange={(value) => onPersonChange('phone', value)}
          placeholder="(00) 00000-0000"
          required
        />
        
        <div className="input-group">
          <label className="form-label required">E-mail</label>
          <input
            type="email"
            value={person.email}
            onChange={(e) => onPersonChange('email', e.target.value)}
            className="form-input"
            required
          />
        </div>
        
        <div className="col-span-2">
          <div className="flex items-center mb-4">
            <MapPin className="h-5 w-5 text-blue-600 mr-2" />
            <h4 className="text-lg font-medium">
              Endereço {type === 'sender' ? 'do Remetente' : 'do Destinatário'}
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-group md:col-span-2">
              <label className="form-label required">Rua</label>
              <input
                type="text"
                value={person.address.street}
                onChange={(e) => onAddressChange('street', e.target.value)}
                className="form-input"
                required
              />
            </div>
            
            <div className="input-group">
              <label className="form-label required">Número</label>
              <input
                type="text"
                value={person.address.number}
                onChange={(e) => onAddressChange('number', e.target.value)}
                className="form-input"
                required
              />
            </div>
            
            <div className="input-group">
              <label className="form-label">Complemento</label>
              <input
                type="text"
                value={person.address.complement}
                onChange={(e) => onAddressChange('complement', e.target.value)}
                className="form-input"
              />
            </div>
            
            <div className="input-group">
              <label className="form-label required">Bairro</label>
              <input
                type="text"
                value={person.address.neighborhood}
                onChange={(e) => onAddressChange('neighborhood', e.target.value)}
                className="form-input"
                required
              />
            </div>
            
            <FormattedInput
              type="cep"
              label="CEP"
              value={person.address.zipCode}
              onChange={(value) => onAddressChange('zipCode', value)}
              placeholder="00000-000"
              required
            />
            
            <div className="input-group">
              <label className="form-label required">Cidade</label>
              <input
                type="text"
                value={person.address.city}
                onChange={(e) => onAddressChange('city', e.target.value)}
                className="form-input"
                required
              />
            </div>
            
            <div className="input-group">
              <label className="form-label required">Estado</label>
              <input
                type="text"
                value={person.address.state}
                onChange={(e) => onAddressChange('state', e.target.value)}
                className="form-input"
                maxLength={2}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}