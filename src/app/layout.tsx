import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import { cn } from '@/lib/utils'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn( // Allows us to join classes together 
        inter.className,
        "relative h-full font-sans antialiased"
      )}>
        <main className="relative flex flex-col min-h-screen" >
          <NavBar />
          <div className="flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
