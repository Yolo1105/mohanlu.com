import './globals.css';

export const metadata = {
  title: 'Mohan Lu — portfolio',
  description: 'Software engineer at NYU Tandon. Full-stack, embedded, distributed systems.',
  metadataBase: new URL('https://mohanlu.com'),
  openGraph: {
    title: 'Mohan Lu — portfolio',
    description: 'Software engineer at NYU Tandon. Full-stack, embedded, distributed systems.',
    url: 'https://mohanlu.com',
    siteName: 'mohanlu.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohan Lu — portfolio',
    description: 'Software engineer at NYU Tandon.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#141414',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Geist font is loaded via Vercel's CDN (zero-cost on Vercel hosting). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
