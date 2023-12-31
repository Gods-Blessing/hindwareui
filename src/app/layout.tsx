import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/component/Header/Header'
import CustomLayout from '@/component/CustomLayout/CustomLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hindware',
  description: 'Hindware',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>
        <div style={{marginTop:"105px"}}></div>
        <CustomLayout>
          {children}
        </CustomLayout>
      </body>
    </html>
  )
}
