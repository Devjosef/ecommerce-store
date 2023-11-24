import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import Toastprovider from '@/providers/toast-provider'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Toastprovider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
