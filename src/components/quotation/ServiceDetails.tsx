import React from 'react';
import { Package, ClipboardList } from 'lucide-react';

export function ServiceDetails() {
  return (
    <div className="p-8 border-b border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Detalhes do Serviço</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Package className="h-4 w-4 mr-2" />
            Produto/Serviço <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            required
            className="form-input"
            placeholder="Descreva o produto ou serviço"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <ClipboardList className="h-4 w-4 mr-2" />
            Quantidade <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="number"
            required
            min="1"
            className="form-input"
            placeholder="Quantidade desejada"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            Observações
          </label>
          <textarea
            className="form-input min-h-[120px]"
            placeholder="Informações adicionais sobre sua solicitação"
          />
        </div>
      </div>
    </div>
  );
}