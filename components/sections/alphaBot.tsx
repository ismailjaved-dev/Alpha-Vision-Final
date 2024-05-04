import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const AlphaBot = () => {
    const data = 
    {
        heading: 'Make Your Work Fast, Efficient & Easy With AlphaBot ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam',
        links: [
            {
                label: 'Measurement',
                path: '/'
            },
            {
                label: 'Measurement',
                path: '/'
            },
            {
                label: 'Measurement',
                path: '/'
            },
            {
                label: 'Measurement',
                path: '/'
            },
            {
                label: 'Measurement',
                path: '/'
            },
            {
                label: 'Measurement',
                path: '/'
            },
            {
                label: 'Measurement',
                path: '/'
            },
            {
                label: 'Measurement',
                path: '/'
            }
        ]
    }
  return (
    <div className='w-full max-w-fluid mx-auto overflow-x-hidden'>
        <div className="text-center max-w-[51.375rem] mx-auto p-5">
            <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 leading-[60px] font-grotesk font-semibold">
                {data.heading}
            </h2>
            <p className='text-gray text-md md:text-lg'>
                {data.desc}
            </p>
        </div>
        <div className='w-full flex justify-center items-center relative py-24 sm:py-32 z-10  p-5'>
            <Image src='/bot.png' height={500} width={300} alt='Alpha Bot' className='animate-bounce duration-2500' unoptimized/>
            <div className="absolute bottom-10 -z-10 p-5">
                <Image src='/bot_light.png' className='glowAnimation' height={120} width={355} alt='Alpha Bot' unoptimized/>
            </div>
        </div>
        <div className="w-full max-w-[50rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 p-5">
            {
                data.links.map((item: any, index: number) => (
                    <button key={index} className='w-full h-16 rounded-[0.625rem] secondaryBtn'>
                        {item.label}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default AlphaBot
