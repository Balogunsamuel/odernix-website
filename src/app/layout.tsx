import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from "@/component/nav/nav";
import Loading from "@/app/loading";
import {Suspense} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Odernix Homes',
  description: 'Homes for all',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex:9999, marginTop:'8px' }} />
      <Suspense fallback={<Loading/>}>
          {children}
      </Suspense>
      </body>
    </html>
  )
}
