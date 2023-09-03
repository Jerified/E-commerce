import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Home/Header/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#D6DEE7]'>
      <body className={` ${inter.className}`} >
        <div className="border-b border-gray-400">
          <Header />
          
        </div>
        <main className="lg:max-w-6xl md:mx-w-4xl mx-auto">
        
          {children}
        </main>
        </body>
    </html>
  )
}
