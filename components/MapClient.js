'use client';

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON, ScaleControl, ZoomControl } from 'react-leaflet';

export default function MapClient() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/data/dwapara.geo.json')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setError('Failed to load dataset'));
  }, []);

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer
        center={[20, 77]}
        zoom={4}
        minZoom={2}
        maxZoom={12}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        worldCopyJump
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {data && <GeoJSON data={data} style={{ color: '#d97706', weight: 2 }} />}
        <ScaleControl position="bottomleft" />
        <ZoomControl position="topleft" />
      </MapContainer>
      <div
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: 8,
          maxWidth: 360,
          fontSize: 12,
          lineHeight: 1.4,
        }}
      >
        <strong>Dwapara Yuga GeoJSON</strong>
        <div>Dataset is a scaffold. Ancient boundaries and names are non-authoritative.</div>
        {error && <div style={{ color: '#ffb4a1' }}>{error}</div>}
      </div>
    </div>
  );
}
