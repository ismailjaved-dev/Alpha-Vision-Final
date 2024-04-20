import Image from 'next/image'
import React from 'react'
import { InstagramIcon, FacebookIcon, LinkedinIcon } from 'lucide-react'

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
    <div className='w-full max-w-fluid mx-auto my-8 px-5 flex flex-col lg:flex-row gap-10'>
      <div className=''>
        <Image src={'/logo.svg'} width={200} height={100} priority unoptimized alt='' />
        <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque dolorum incidunt deserunt.</p>
        <div className='flex gap-5 text-gray'>
          <InstagramIcon className='cursor-pointer' />
          <FacebookIcon className='cursor-pointer' />
          <LinkedinIcon className='cursor-pointer' />
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
