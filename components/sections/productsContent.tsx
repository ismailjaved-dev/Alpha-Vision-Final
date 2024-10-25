"use client";
import React,{useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";


const ProductsContent = () => {
  const data = [
    {
      title: "Crypto Currency Transaction System",
      desc: "AlphaVision Technology offers a secure and efficient Crypto Currency Transaction Management System, enabling seamless transactions with multi-currency support, real-time monitoring, and advanced encryption. Manage your digital assets with ease and confidence.",
      img:"/productImg.png",
      pathName:"/products/crypto-currency-transaction-system",
    },
     {
      title: "E-Commerce Management System",
      desc: "AlphaVision Technology offers an all-in-one E-Commerce Management System to streamline inventory, orders, and analytics, helping businesses boost efficiency and deliver a seamless customer experience.",
      img:"/productImg.png",
      pathName:"/products/e-commerce-management-system",
    }, {
      title: "E-Leave Management System",
      desc: "AlphaVision Technology offers an E-Leave Management System that simplifies and automates the leave process, providing employees, managers, and HR with an efficient and transparent platform for leave requests, approvals, and tracking.",
      img:"/productImg.png",
      pathName:"/products/e-leave-management-system",
    }, {
      title: "Inventory Management System",
      desc: "AlphaVision Technology offers an advanced Inventory Management System that provides real-time tracking, automated reordering, and comprehensive analytics to help businesses efficiently manage their inventory, reduce costs, and optimize stock levels across multiple locations.",
      img:"/productImg.png",
      pathName:"/products/inventory-management-system",
    },
  ];

  return (
    <>
      <div className="w-full max-w-fluid mx-auto overflow-x-hidden text-center p-5 py-24">
        <div className="text-center flex flex-wrap justify-center">
          <h2 className="mb-3 text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize max-w-[56.25rem] leading-none">
          Explore Our Range Of Products For Your Business Needs
          </h2>
          <p className="text-md md:text-lg text-gray w-full">
          Discover our range of products designed specifically for businesses across various industries.
          </p>
        </div>
      </div>

      <div className="w-full mb-24 px-5">
        <Swiper
         
          centeredSlides={true}
          initialSlide={1}
          loop={true}
          spaceBetween={5}
          className="p-16"
          breakpoints={{
            1000: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 1.8,
              spaceBetween: 50,
            },
          }}
        >
      
          {
            data.map((res,index)=>{
              return(
                <SwiperSlide key={index} className="gradientBg py-10 px-8 sm:px-16 min-h-[35rem] overflow-hidden ">
                     <div>
                     <h1 className="text-h4 md:text-h3 2xl:text-h2 font-bold leading-tight">{res.title}</h1>
                     <p className={`lg:max-w-[25rem] mt-4`}>{res.desc}</p>
                     </div>
                  <Image src={res.img} fill alt="" className={`!relative lg:!absolute !left-0 lg:!left-[43%] lg:!top-[37%] my-4 lg:my-0`}/>
                   <Link href={res.pathName}>
                   <Button className="mt-8 lg:mt-[10rem]">Product Details</Button>
                   </Link>
               </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </>
  );
};

export default ProductsContent;
