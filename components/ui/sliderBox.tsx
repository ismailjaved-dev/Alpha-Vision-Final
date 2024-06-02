'use client'

import React,{useEffect} from 'react'
import parse from 'html-react-parser';
import {Button} from './button';
import {Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import {Autoplay} from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SliderBox = ({data}: any) => {

  useEffect(() => {
    AOS.init({
      duration: 1000 // Duration in milliseconds
    });
  }, []);

  return (
    <div className='flex flex-col gap-20 mt-32 mb-36'>
      {
        data.map((item: any, index: number) => (
          <div key={index}
            className={`w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24  justify-center items-center  ${index % 2 === 0 ? 'reverse' : ''}`} >
            <div className='flex flex-col gap-10 textArea' data-aos={`${index % 2 == 0 ? "fade-right" : "fade-left"}`}>
              <div className='flex flex-col gap-5'>
                <h2
                  className='text-h4 font-grotesk font-semibold w-full max-w-[30.1875rem] mr-auto leading-tight'>{item.heading}</h2>
                <p className='hidden md:block text-md text-gray'>{parse(item.desc)}</p>
              </div>
              <button  className='primaryBtn w-max md:mr-auto'>Learn More</button>
            </div>
            <div className='w-full' data-aos={`${index % 2 == 0 ? "fade-left" : "fade-right"}`}>
              <Swiper
                spaceBetween={-120}
                slidesPerView={1.5}
                centeredSlides={true}
                initialSlide={1}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='animate-bounce duration-2500 product-slide'
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                {
                  item.slides?.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                      {({isActive}) => (
                        <img src={slide.url} alt="slide"
                             className={`${isActive ? 'opacity-100 scale-100' : 'scale-50 opacity-30'} w-full  transition-all duration-500 `}/>
                      )}
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <div className='h-[10rem] flex justify-center items-end glowAnimation'>
                <Image src='/bot_light.png' height={120} width={355} alt='Alpha Bot' unoptimized/>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SliderBox