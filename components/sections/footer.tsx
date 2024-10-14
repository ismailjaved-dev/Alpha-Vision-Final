import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin,FaFacebook, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {

  const footerData = [
    { title: 'Home' },
    {
      title: 'About Us', innerLinks: [
        { title: "Meet the Team" }
      ]
    },
    {
      title: 'Our Products', innerLinks: [
        { title: "Crypto" },
        { title: "E-Leave" },
        { title: "Inventory" },
        { title: "E-Commerce" },
      ]
    },
    {
      title: 'Services', withFlex:true, innerLinks: [
        { title: "Security" },
        { title: "Software" },
        { title: "Marketing" },
        { title: "Hardware" },
        { title: "It Consulting" },
        { title: "Networking" },
        { title: "Data Recovery" },
        { title: "Artificial Intelligence" },
      ]
    },
    {
      title: 'Contact', innerLinks: [
        { title: "25-08, Soho Capital, Podomoro City, Grogol Petamburan, Jakarta Barat, DKI Jakarta 11470, Indonesia." },
        { title: "(+62) 812-9250-9595" },
        { title: "(+62) 823-1024-2185" },
      ]
    },
  ]

  return (
  <div className='relative'>
    {/* <Image src={"/footerGlow.svg"} fill alt=''/> */}
      <div className='w-full max-w-fluid mx-auto overflow-x-hidden my-8 px-5 flex flex-col lg:flex-row gap-10'>
      <div className=''>
        <Image src={'/logo.svg'} width={300} height={150} priority unoptimized alt='' />
        {/* <p className='my-5'>Leading the Future of Technology with Comprehensive Solutions Across Industries</p> */}
        <div className='flex gap-5 mt-10 ml-4'>
        <Link href='https://www.linkedin.com/company/alphavisiontechnology/' target='_blank'><FaLinkedin size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' /></Link>
      <Link href="https://wa.me/+6282310242185" target='_blank'><FaWhatsapp size={25} className=' cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]'/></Link>
      <Link href="https://www.instagram.com/alphavisiontech.id/" target='_blank'><FaInstagram size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' /></Link>
     <Link href="https://facebook.com/alphavisiontech.id/" target='_blank'><FaFacebook size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' /></Link>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between gap-5 w-full lg:mt-3'>
        {
          footerData.map((res, index) => {
            return <div key={index}>
            <p className='font-bold cursor-pointer mb-2'>{res.title}</p>
            {res.innerLinks?.map((links, keys) => {
              return (
                <p className='text-sm text-gray cursor-pointer w-fit max-w-[270px]' key={keys}>{links.title}</p>
              )
            })}
          </div>
          })
        }
      </div>
      <div>

      </div>

    </div>
  </div>
  )
}

export default Footer
