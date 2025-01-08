import React, { useCallback } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

interface LocationMapProps {
  location: {
    coordinates: {
      lat: number;
      lng: number;
    };
    name: string;
  };
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '300px'
};

const mapOptions = {
  styles: [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [{ saturation: -100 }]
    }
  ],
  disableDefaultUI: true,
  zoomControl: true
};

export function LocationMap({ location }: LocationMapProps) {
  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(location.coordinates);
    map.fitBounds(bounds);
    map.setZoom(15);
  }, [location.coordinates]);

  return (
    <div className="h-[300px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location.coordinates}
        zoom={15}
        options={mapOptions}
        onLoad={onLoad}
      >
        <Marker
          position={location.coordinates}
          title={location.name}
        />
      </GoogleMap>
    </div>
  );
}