import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { Element } from 'react-scroll';

export function QuoteButton() {
  const navigate = useNavigate();

  return (
    <Element name="quote" className="text-center my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/cotacao')}
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white 
                   rounded-lg hover:bg-blue-700 transform hover:scale-105 
                   transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Truck className="h-6 w-6 mr-3" />
          <span className="text-lg font-semibold">Solicitar Cotação</span>
        </button>
      </div>
    </Element>
  );
}