import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface LocationInfoProps {
  location: {
    address: string;
    city: string;
    cep: string;
    phones: string;
  };
}

export function LocationInfo({ location }: LocationInfoProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-start space-x-3">
        <MapPin className="h-5 w-5 text-blue-600 mt-1" />
        <div>
          <p className="font-medium text-gray-900">{location.address}</p>
          <p className="text-gray-600">{location.city}</p>
          <p className="text-sm text-gray-500">{location.cep}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="h-5 w-5 text-blue-600" />
        <span className="font-medium text-gray-900">{location.phones}</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5 text-blue-600" />
        <span className="text-gray-600">contato@fptranscargas.com.br</span>
      </div>
    </div>
  );
}