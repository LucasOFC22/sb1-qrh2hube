import React from 'react';
import { FileText } from 'lucide-react';

export function QuotationHeader() {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-blue-50 p-4 rounded-full">
          <FileText className="h-8 w-8 text-blue-600" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Solicitação de Cotação
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Preencha o formulário abaixo com os detalhes do seu pedido para receber uma 
          cotação personalizada de nossos serviços
        </p>
      </div>
    </div>
  );
}