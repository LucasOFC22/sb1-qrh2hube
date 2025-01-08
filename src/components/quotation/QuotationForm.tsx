import React from 'react';
import { QuotationDetails } from './QuotationDetails';
import { ContactInformation } from './ContactInformation';
import { ServiceDetails } from './ServiceDetails';
import { TermsAndSignature } from './TermsAndSignature';

export function QuotationForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <QuotationDetails />
        <ContactInformation />
        <ServiceDetails />
        <TermsAndSignature />
      </div>
    </form>
  );
}