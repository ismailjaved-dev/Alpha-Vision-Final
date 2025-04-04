import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = () => {
  return (
   <div className='p-10 overflow-hidden '>
     <div className='fluid-container max-w-[900px] border p-10 gradientBg border-white my-10 gap-10 flex justify-between items-center relative z-10 overflow-hidden'>
    <Image src={'/circuit.png'} fill alt='' className='z-[-1] object-cover !h-[285%]' />
     <div className='flex flex-col gap-7 items-start'>
     <h3 className='text-h4 sm:text-h3 font-grotesk leading-[100%] m-0'>Our Services</h3>
      <Link href={"/services/hardware"}>
      <button className='primaryBtn mt-5'>See Our Services</button>
      </Link>
     </div>
     

    </div>
   </div>
  )
}

export default ServiceCard