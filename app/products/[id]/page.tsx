"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';


const page = () => {


  const pathName = usePathname().split('/')[2]


    const data = [
        {
          title: "Crypto Curency1",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          benefits:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          keyFeatured:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          featureImg:"/product1feature.svg",
          works:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          workImg:"/product1work.svg",
          pathname:"crypto-curency1"
        },
        {
          title: "Crypto Curency2",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          benefits:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          keyFeatured:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          featureImg:"/product1feature.svg",
          works:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          workImg:"/product1work.svg",
          pathname:"crypto-curency2"
        },
        {
          title: "Crypto Curency3",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          benefits:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          keyFeatured:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          featureImg:"/product1feature.svg",
          works:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          workImg:"/product1work.svg",
          pathname:"crypto-curency3"
        },
        {
          title: "Crypto Curency4",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          benefits:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          keyFeatured:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          featureImg:"/product1feature.svg",
          works:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          workImg:"/product1work.svg",
          pathname:"crypto-curency4"
        },
      ];



   const slides = [
      {
          url: '/mockup.png'
      },
      {
          url: '/mockup.png'
      },
      {
          url: '/mockup.png'
      },
      {
          url: '/mockup.png'
      }
  ]

      const renderData = data.filter((res)=>{
         return res.pathname == pathName
      })


  return (
    <section className="overflow-x-hidden py-16 px-6 productInnerPage">
         {
          renderData.map((res,index)=>{
          return(
            <div key={index} className='w-full max-w-fluid mx-auto'>
            <h1 className="text-h3 sm:text-h2 lg:text-h1 font-bold">{res.title}</h1>
            <p>{res.desc}</p>

            {/* <div className='py-10'>
            <Swiper
                spaceBetween={-300}
                slidesPerView={1.5}
                centeredSlides={true}
                initialSlide={1}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                // modules={[Autoplay]}
              >
                {
                  slides?.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                      {({isActive}) => (
                        <img src={slide.url} alt="slide"
                             className={`${isActive ? 'opacity-100 scale-100' : 'scale-50 opacity-30'} w-full  transition-all duration-500 `}/>
                      )}
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div> */}
                
                 <div className='md:flex gap-10 justify-between py-10 border-b border-primary'>
                  <div className='md:max-w-[400px]'>
                    <h3 className='text-h5 lg:text-h4 leading-[16%]'>ABOUT</h3>
                    <p>{res.about}</p>
                  </div>
                  <div className='mt-10 md:mt-0 md:max-w-[400px]'>
                    <h3 className='text-h5 lg:text-h4 leading-[16%]'>Benefits</h3>
                    <p>{res.benefits}</p>
                  </div>
                 </div>

                  
                 <div className='md:flex gap-10 justify-between items-center py-10 '>
                  <div className='md:max-w-[400px] relative max-h-fit'>
                    <h3 className='text-h5 lg:text-h4 leading-[16%]'>Key Features</h3>
                    <p>{res.keyFeatured}</p>
                  </div>
                  <div className='max-w-[600px] relative w-full min-h-[400px]'>
                     <Image src={res.featureImg} fill alt=""/>
                  </div>
                 </div>

                 <div className='py-10 '>
                  <div>
                    <h3 className='text-h5 lg:text-h4 leading-[16%]'>How It Works</h3>
                    <p>{res.works}</p>
                  </div>
                  <div className='hidden md:block relative w-full min-h-[700px] mt-10'>
                     <Image src={res.workImg} fill alt=""/>
                  </div>
                 </div>

              </div>
          )})
         }
           
    </section>
  )
}

export default page