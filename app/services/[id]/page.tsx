"use client"
import Hero from '@/components/sections/hero'
import React from 'react'
import { usePathname } from 'next/navigation'
import ServicesContent from '@/components/sections/servicesContent'
import Footer from '@/components/sections/footer'

const Page = () => {

    const pathname = usePathname().split("/")[2]
   

  return (
   <>
    <Hero heading="Services" desc="Home / Services"/>
    <ServicesContent pathname={pathname}/>
    <Footer />
   </>
  )
}

export default Page