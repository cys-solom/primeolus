import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Premium Plus - متجر الهواتف الذكية والإكسسوارات',
  description: 'متجر متخصص في بيع أحدث الهواتف الذكية والإكسسوارات بأفضل الأسعار',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Providers>
          <main className="min-h-screen bg-white dark:bg-gray-900">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
} 