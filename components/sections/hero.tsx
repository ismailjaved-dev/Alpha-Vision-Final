'use client'

import Image from 'next/image'
import React from 'react'
import {Button} from '../ui/button'
import {usePathname} from 'next/navigation'

interface HeroProps {
  heading: string;
  desc: string;
  videoBg?: string;
}

const Hero: React.FC<HeroProps> = ({heading, desc, videoBg}) => {
  const pathname = usePathname();

  return (
    <div className='w-full h-[34.9375rem] md:h-[44.9375rem] relative z-10 px-5 pt-10 md:pt-0'>
      <div className='w-full h-full flex justify-center items-center flex-col gap-[1.5625rem]'>
        <h1>
          <span
            className='text-4xl md:text-5xl font-semibold font-grotesk text-white w-full text-center flex'>{heading}</span>
        </h1>
        <p className={`text-md md:text-lg max-w-[39.125rem] mx-auto text-center ${pathname == '/' && 'opacity-60'}`}>
          {desc}
        </p>

        {
          pathname == '/' &&
            <Button variant='rounded'>Book Now</Button>
        }

      </div>
      {
        videoBg
          ?
          <video autoPlay muted className='object-cover w-full h-full absolute top-0 left-0 -z-10 opacity-50'>
            <source src={videoBg} type="video/mp4"/>
          </video>
          :
          <Image src='/hero_home.png' alt='hero' height={100} width={100}
                 className='object-cover w-full h-full absolute top-0 left-0 -z-10' unoptimized/>
      }
    </div>
  );
};

export default Hero;
