import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Garden Soil Calculator | How Much Soil Do I Need for Raised Beds',
  description: 'Free garden soil calculator and dirt calculator! Calculate exactly how much soil you need for raised beds. Get instant results in cubic feet, yards & bags. The best raised bed soil calculator online.',
  keywords: 'garden soil calculator, dirt calculator, raised bed soil calculator, how much soil do i need, garden bed dirt calculator, soil volume calculator, raised garden bed calculator',
  authors: [{ name: 'Garden Soil Calculator' }],
  robots: 'index, follow',
  // canonical: 'https://www.gardensoilcalculator.com/',
  openGraph: {
    type: 'website',
    url: 'https://www.gardensoilcalculator.com/',
    title: 'Garden Soil Calculator | How Much Soil Do I Need for Raised Beds',
    description: 'Free garden soil calculator and dirt calculator! Calculate exactly how much soil you need for raised beds. Get instant results in cubic feet, yards & bags.',
    images: [
      {
        url: 'https://www.gardensoilcalculator.com/assets/images/logo.svg',
        width: 120,
        height: 120,
        alt: 'Garden Soil Calculator Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garden Soil Calculator | How Much Soil Do I Need for Raised Beds',
    description: 'Free garden soil calculator and dirt calculator! Calculate exactly how much soil you need for raised beds.',
    images: ['https://www.gardensoilcalculator.com/assets/images/logo.svg'],
  },
  icons: {
    icon: '/assets/images/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Garden Soil Calculator',
              description: 'Calculate how much soil you need for your garden beds',
              url: 'https://www.gardensoilcalculator.com/',
              applicationCategory: 'UtilityApplication',
            }),
          }}
        />
      </head>
      <body>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}