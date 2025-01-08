import React from 'react';
import { Send, FileText } from 'lucide-react';

export function TermsAndSignature() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Termos e Condições</h3>
        <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
          <p className="mb-4">
            Ao enviar esta solicitação de cotação, você concorda com nossos termos de serviço:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>A cotação tem validade de 7 dias a partir da data de emissão</li>
            <li>Os preços podem variar de acordo com a disponibilidade e demanda</li>
            <li>O prazo de entrega será confirmado após a aprovação da cotação</li>
            <li>Valores não incluem impostos, salvo quando especificado</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <FileText className="h-5 w-5 mr-2" />
          Ver termos completos
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700
                   transform hover:scale-105 transition-all duration-300
                   flex items-center space-x-2 shadow-lg"
        >
          <Send className="h-5 w-5" />
          <span>Solicitar Cotação</span>
        </button>
      </div>
    </div>
  );
}