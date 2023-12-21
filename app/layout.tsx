import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({ subsets: ['latin'] , weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata: Metadata = {
  title: 'Alpafel & Co',
  description: 'Alpafel & Co',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
