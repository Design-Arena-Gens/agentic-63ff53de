import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/MapClient'), { ssr: false });

export default function Page() {
  return (
    <main style={{ height: '100svh', width: '100vw' }}>
      <Map />
    </main>
  );
}
