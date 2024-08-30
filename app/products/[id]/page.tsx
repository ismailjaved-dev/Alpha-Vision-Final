"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';


const Page = () => {


  const pathName = usePathname().split('/')[2]


    const data = [
        {
          title: "Crypto Currency Transaction System",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"Our customized system is a secure and efficient platform designed to facilitate seamless cryptocurrency transactions. Whether you're sending, receiving, or exchanging digital assets, our system ensures that transactions are fast, transparent, and protected by advanced encryption technologies. Built for both individuals and businesses, it supports a wide range of cryptocurrencies and provides an intuitive interface for managing your digital wealth with confidence.(CRM)",
          benefits:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          keyFeatured:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          featureImg:"/product1feature.svg",
          works:"Our trusted customized System operates on a decentralized blockchain network, ensuring that all transactions are secure, transparent, and immutable. Users can create an account and integrate their digital wallets with the platform. Once set up, they can easily send or receive cryptocurrencies by entering the recipient's wallet address and the amount to be transferred. The system verifies the transaction on the blockchain, providing real-time confirmation and updating the user’s balance. With multi-currency support and real-time monitoring, managing your crypto assets has never been easier.",
          workImg:"/product1work.svg",
          pathname:"crypto-currency-transaction-system"
        },
        {
          title: "E-Commerce Management System",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"From inventory management and order processing to customer relationship management and analytics, our system offers a unified solution that empowers businesses to efficiently manage their e-commerce activities. Whether you’re running a small online shop or a large-scale retail operation, our system is built to scale with your business, ensuring a seamless and profitable e-commerce experience.",
          benefits:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          keyFeatured:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          featureImg:"/product1feature.svg",
          works:"Our E-Commerce Management System works by integrating all your e-commerce processes into a single, user-friendly platform. Once set up, it automates tasks such as inventory updates, order tracking, and customer communication. You can manage products, process orders, and analyze sales data from a centralized dashboard. The system also integrates with various third-party applications, enabling seamless payment processing, shipping, and marketing. Through real-time analytics, you can monitor performance and make data-driven decisions to optimize your e-commerce operations",
          workImg:"/product1work.svg",
          pathname:"e-commerce-management-system"
        },
        {
          title: "E-Leave Management System",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"The E-Leave Management System is an advanced digital platform designed to simplify and automate the leave management process for organizations of all sizes. It offers a streamlined solution for employees to request leave, managers to approve or deny requests, and HR to maintain accurate records. This system replaces traditional, paper-based leave management with a more efficient, transparent, and user-friendly approach, ensuring that the entire leave process is handled smoothly and accurately.",
          benefits:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          keyFeatured:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          featureImg:"/product1feature.svg",
          works:"Our customized E-Leave Management System operates through an intuitive online platform where employees can easily log in to request leave, check their balances, and view the status of their applications. Managers receive automated notifications of new leave requests, which they can approve or deny with a few clicks. The system automatically updates leave balances, records the transaction, and integrates with payroll for accurate leave accounting. HR can access detailed reports and analytics, making it easier to manage leave policies and ensure compliance.",
          workImg:"/product1work.svg",
          pathname:"e-leave-management-system"
        },
        {
          title: "Inventory Management System",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"Our Inventory Management System is a robust platform designed to help businesses efficiently track, manage, and control their inventory across multiple locations. It provides real-time visibility into stock levels, streamlines order fulfillment, and reduces the risks associated with overstocking or stockouts. This system is ideal for businesses of all sizes, ensuring that inventory is always optimized, accessible, and aligned with customer demand.",
          benefits:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          keyFeatured:"Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
          featureImg:"/product1feature.svg",
          works:"Our Inventory Management System integrates with your existing sales channels, suppliers, and warehouse systems to provide a unified view of your inventory. Users can log in to the platform to monitor stock levels, process orders, and generate reports. The system automatically updates inventory quantities in real-time as orders are placed, stock is received, or items are sold. Automated alerts notify you when stock levels reach predefined thresholds, prompting reordering to prevent stockouts. The platform's analytics tools help you identify trends, optimize stock levels, and make data-driven decisions to improve overall inventory management.",
          workImg:"/product1work.svg",
          pathname:"inventory-management-system"
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
    <section className="overflow-x-hidden py-16 px-6 productInnerPage pt-28 md:pt-40">
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

export default Page