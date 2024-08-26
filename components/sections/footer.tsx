import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin,FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {

  const footerData = [
    { title: 'Home' },
    {
      title: 'About Us', innerLinks: [
        { title: "Teams" }
      ]
    },
    {
      title: 'Our Products', innerLinks: [
        { title: "Cryto" },
        { title: "E-Commerce" },
        { title: "Mangement" },
      ]
    },
    { title: 'Blog' },
    {
      title: 'Services', innerLinks: [
        { title: "Security" },
        { title: "Hardware" },
        { title: "Software" },
        { title: "Networking" },
      ]
    },
  ]

  return (
    <div className='w-full max-w-fluid mx-auto overflow-x-hidden my-8 px-5 flex flex-col lg:flex-row gap-10'>
      <div className=''>
        <Image src={'/logo.svg'} width={200} height={100} priority unoptimized alt='' />
        <p className='my-5'>Leading the Future of Technology with Comprehensive Solutions Across Industries</p>
        <div className='flex gap-5'>
        <FaLinkedin size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' />
      <FaWhatsapp size={25} className=' cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]'/>
      <FaInstagram size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' />
      <FaFacebook size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between gap-5 w-full lg:mt-3'>
        {
          footerData.map((res, index) => {
            return (
              <div key={index}>
                <p className='font-bold cursor-pointer'>{res.title}</p>
                {res.innerLinks?.map((links, keys) => {
                  return (
                    <p className='text-gray cursor-pointer w-fit' key={keys}>{links.title}</p>
                  )
                })}
              </div>
            )
          })
        }
      </div>
      <div>

      </div>

    </div>
  )
}

export default Footer
