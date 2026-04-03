import type { Metadata } from 'next'
import './../styles/globals.css'

export const metadata: Metadata = {
  title: 'Sweet Crumbs - Freshly Baked Happiness Everyday',
  description: 'Indulge in handcrafted pastries, decadent cakes, and artisan treats made with love and the finest ingredients at Sweet Crumbs Bakery.',
  keywords: 'bakery, pastries, cakes, cupcakes, cookies, bakery shop, sweet crumbs',
  authors: [{ name: 'Sweet Crumbs Bakery' }],
  openGraph: {
    title: 'Sweet Crumbs Bakery',
    description: 'Freshly baked happiness everyday',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
