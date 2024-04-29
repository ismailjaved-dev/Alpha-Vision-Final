import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import localFont from "next/font/local";

import {cn} from "@/lib/utils"
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import {Toaster} from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat'
})

const clash = localFont({
  src: [
    {
      path: '../public/fonts/ClashGrotesk-Regular.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/ClashGrotesk-Semibold.otf',
      weight: '600'
    },
  ],
  variable: '--font-grotesk'
})

export const metadata: Metadata = {
  title: "Alpha Vision Technology",
  description: "A Smart, Sustainale Future",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
     
      </head>
    <body className={`${clash.variable} ${montserrat.variable} font-sans text-white bg-background antialiased`}>
    <Navbar/>
    {children}
    <Toaster/>

    </body>
    </html>
  );
}
