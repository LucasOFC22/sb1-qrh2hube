import React from 'react';
import { Calendar } from 'lucide-react';

export function QuotationDetails() {
  const quoteNumber = `QT${new Date().getFullYear()}${String(Date.now()).slice(-4)}`;
  const today = new Date().toLocaleDateString('pt-BR');
  const validThrough = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR');

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Cotação #{quoteNumber}</h2>
          <div className="flex items-center text-blue-100">
            <Calendar className="h-5 w-5 mr-2" />
            <span>Emitida em {today}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-blue-100">Válida até</div>
          <div className="text-xl font-semibold">{validThrough}</div>
        </div>
      </div>
    </div>
  );
}