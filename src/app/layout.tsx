import React from 'react';
import type { Metadata } from 'next';
import { Inter, Crimson_Text, Lora } from 'next/font/google';
import Script from 'next/script';
import '@/styles/index.css';
import '@/styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
});

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson-text',
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
  adjustFontFallback: true,
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Freezme - Premium Introductions for Intentional Daters',
  description: 'Human-curated introductions for intentional dating and meaningful connections. Quality over quantity, always.',
  keywords: ['introductions', 'matchmaking', 'intentional dating', 'premium dating', 'curated introductions', 'serious relationships'],
  authors: [{ name: 'Sumit', url: 'https://freezme.in' }],
  metadataBase: new URL('https://freezme.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Freezme - Premium Introductions for Intentional Daters',
    description: 'Human-curated introductions for professionals and intentional daters.',
    url: 'https://freezme.in',
    siteName: 'Freezme',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/assets/images/image-1768307203606.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/image-1768307203606.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/images/image-1768307203606.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/images/image-1768307203606.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [{ url: '/assets/images/image-1768307203606.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${crimsonText.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
