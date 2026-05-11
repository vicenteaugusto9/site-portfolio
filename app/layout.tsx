import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vicente Augusto | Portfólio',
  description: 'Desenvolvedor Full-Stack focado no ecossistema TypeScript. Especializado em sistemas SaaS, ERPs e soluções multi-tenant.',
  generator: 'Next.js',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: [
      {
        url: '/iconlogo.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/iconlogo.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/iconlogo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/iconlogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
