import React from 'react';
import { Package } from 'lucide-react';
import type { FreightQuote } from '../../types/freight';
import { FormattedInput } from './FormattedInput';

interface CargoSectionProps {
  cargo: FreightQuote['cargo'];
  onChange: (field: string, value: string | number) => void;
}

export function CargoSection({ cargo, onChange }: CargoSectionProps) {
  return (
    <section className="quote-section">
      <div className="quote-section-header">
        <div className="quote-section-icon">
          <Package className="h-6 w-6" />
        </div>
        <h3 className="quote-section-title">Dados da Mercadoria</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="input-group col-span-2">
          <label className="form-label required">Descrição da Mercadoria</label>
          <input
            type="text"
            value={cargo.description}
            onChange={(e) => onChange('description', e.target.value)}
            className="form-input"
            placeholder="Ex: Eletrônicos, Móveis, etc."
            required
          />
        </div>
        
        <div className="input-group">
          <label className="form-label required">Quantidade</label>
          <input
            type="number"
            value={cargo.quantity || ''}
            onChange={(e) => onChange('quantity', parseInt(e.target.value))}
            className="form-input"
            placeholder="0"
            min="1"
            required
          />
        </div>

        <FormattedInput
          type="weight"
          label="Peso por unidade (kg)"
          value={cargo.weight.toString()}
          onChange={(value) => onChange('weight', parseFloat(value) || 0)}
          placeholder="0.00"
          required
        />
        
        <FormattedInput
          type="currency"
          label="Valor Declarado (R$)"
          value={cargo.value.toString()}
          onChange={(value) => onChange('value', parseFloat(value) || 0)}
          placeholder="0.00"
          required
        />
        
        <div className="input-group col-span-2">
          <label className="form-label required">Dimensões por unidade (cm)</label>
          <div className="grid grid-cols-3 gap-4">
            <FormattedInput
              type="dimensions"
              label=""
              value={cargo.length.toString()}
              onChange={(value) => onChange('length', parseFloat(value) || 0)}
              placeholder="Comprimento"
              required
            />
            <FormattedInput
              type="dimensions"
              label=""
              value={cargo.width.toString()}
              onChange={(value) => onChange('width', parseFloat(value) || 0)}
              placeholder="Largura"
              required
            />
            <FormattedInput
              type="dimensions"
              label=""
              value={cargo.height.toString()}
              onChange={(value) => onChange('height', parseFloat(value) || 0)}
              placeholder="Altura"
              required
            />
          </div>
        </div>
      </div>
    </section>
  );
}