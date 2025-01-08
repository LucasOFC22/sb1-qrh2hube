import React from 'react';
import { useLoadScript } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = "AIzaSyDCDffaK-iHMTBWC8luz8T0_KeMWiX8yNI";

interface GoogleMapsProviderProps {
  children: React.ReactNode;
}

export function GoogleMapsProvider({ children }: GoogleMapsProviderProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return (
      <div className="h-[300px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Erro ao carregar o mapa</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="h-[300px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Carregando mapa...</p>
      </div>
    );
  }

  return <>{children}</>;
}