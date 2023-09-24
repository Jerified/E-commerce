import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'



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
    <html lang="en" className=''>
<<<<<<< HEAD
      <body className={` ${inter.className} h-screen`} >
        <div className="border-b border-gray-400 ">
          <Header />

        </div>
=======
      <body className={` ${inter.className} bg-orange-500`} >
>>>>>>> 1b3904ac2037c7a5560c1f07a3c08fc563d09932
        <main className="lg:max-w-6xl md:mx-w-4xl mx-auto">
          <Navbar />
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
