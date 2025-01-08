import React, { useState } from 'react';
import type { FreightQuote as FreightQuoteType } from '../types/freight';
import { CargoSection } from './freight/CargoSection';
import { PersonSection } from './freight/PersonSection';
import { ContactPreferenceSection } from './freight/ContactPreferenceSection';

interface FreightQuoteProps {
  onSubmit: (data: FreightQuoteType) => void;
}

const initialState: FreightQuoteType = {
  cargo: {
    description: '',
    weight: 0,
    length: 0,
    width: 0,
    height: 0,
    value: 0,
    quantity: 1
  },
  sender: {
    name: '',
    document: '',
    phone: '',
    email: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    }
  },
  recipient: {
    name: '',
    document: '',
    phone: '',
    email: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    }
  },
  contactPreference: 'whatsapp',
  contactValue: ''
};

export function FreightQuote({ onSubmit }: FreightQuoteProps) {
  const [formData, setFormData] = useState<FreightQuoteType>(initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCargoChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      cargo: {
        ...prev.cargo,
        [field]: value
      }
    }));
  };

  const handlePersonChange = (type: 'sender' | 'recipient', field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value
      }
    }));
  };

  const handleAddressChange = (type: 'sender' | 'recipient', field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        address: {
          ...prev[type].address,
          [field]: value
        }
      }
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <CargoSection
        cargo={formData.cargo}
        onChange={handleCargoChange}
      />

      <PersonSection
        title="Dados do Remetente"
        person={formData.sender}
        type="sender"
        onPersonChange={(field, value) => handlePersonChange('sender', field, value)}
        onAddressChange={(field, value) => handleAddressChange('sender', field, value)}
      />

      <PersonSection
        title="Dados do Destinatário"
        person={formData.recipient}
        type="recipient"
        onPersonChange={(field, value) => handlePersonChange('recipient', field, value)}
        onAddressChange={(field, value) => handleAddressChange('recipient', field, value)}
      />

      <ContactPreferenceSection
        contactPreference={formData.contactPreference}
        contactValue={formData.contactValue}
        onContactPreferenceChange={(preference) => 
          setFormData(prev => ({ ...prev, contactPreference: preference }))
        }
        onContactValueChange={(value) => 
          setFormData(prev => ({ ...prev, contactValue: value }))
        }
      />

      <button type="submit" className="submit-button">
        Solicitar Cotação
      </button>
    </form>
  );
}