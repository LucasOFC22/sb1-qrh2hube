import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { QuotationForm } from '../components/quotation/QuotationForm';
import { QuotationHeader } from '../components/quotation/QuotationHeader';

export function PriceQuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationHeader />
          <QuotationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}