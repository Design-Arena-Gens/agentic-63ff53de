import './globals.css';

export const metadata = {
  title: 'Dwapara Yuga Map',
  description: 'GeoJSON viewer for Dwapara Yuga dataset',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: '100vh', width: '100vw' }}>{children}</body>
    </html>
  );
}
