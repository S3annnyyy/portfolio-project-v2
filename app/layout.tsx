import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/main/Sidebar'
import StarsCanvas from '@/components/main/StarsBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sean Yap | Portfolio Website',
  description: 'Sean Yap Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />                
        {children}
      </body>
    </html>
  )
}
