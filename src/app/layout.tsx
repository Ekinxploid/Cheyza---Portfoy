import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Cheyza — Full Stack Developer',
  description: 'Yazılım dünyasında kendimi geliştirmeye çalışıyorum. Öğrenirken bazen yapay zekadan yardım alıyorum ama hedefim her satır kodu anlayarak ilerlemek.',
  keywords: ['Cheyza', 'Full Stack Developer', 'React', 'Next.js', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Cheyza' }],
  creator: 'Cheyza',
  publisher: 'Cheyza',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://cheyza.vercel.app',
    title: 'Cheyza — Full Stack Developer',
    description: 'Yazılım dünyasında kendimi geliştirmeye çalışıyorum. Öğrenirken bazen yapay zekadan yardım alıyorum ama hedefim her satır kodu anlayarak ilerlemek.',
    siteName: 'Cheyza Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheyza — Full Stack Developer',
    description: 'Yazılım dünyasında kendimi geliştirmeye çalışıyorum. Öğrenirken bazen yapay zekadan yardım alıyorum ama hedefim her satır kodu anlayarak ilerlemek.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-background text-white antialiased">
        {children}
      </body>
    </html>
  )
}
