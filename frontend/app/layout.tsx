import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { Providers } from '@/app/providers'

const inter = Manrope({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Create Next  App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full" lang="en">
      <body className={inter.className + ' h-full'}>
        <Providers>{children} </Providers>
      </body>
    </html>
  )
}
