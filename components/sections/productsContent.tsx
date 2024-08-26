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
      desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
      img:"/productImg.png",
      pathName:"/products/crypto-currency-transaction-system",
    },
     {
      title: "E-Commerce Management System",
      desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
      img:"/productImg.png",
      pathName:"/products/e-commerce-management-system",
    }, {
      title: "E-Leave Management System",
      desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
      img:"/productImg.png",
      pathName:"/products/e-leave-management-system",
    }, {
      title: "Inventory Management System",
      desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
      img:"/productImg.png",
      pathName:"/products/inventory-management-system",
    },
  ];




  return (
    <>
      <div className="w-full max-w-fluid mx-auto overflow-x-hidden text-center p-5 py-24">
        <div className="text-center flex flex-wrap justify-center">
          <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize max-w-[56.25rem] leading-normal">
            we have amazing product for your company needs
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
                     <h1 className="text-h4 md:text-h3 2xl:text-h2 font-bold">{res.title}</h1>
                     <p className={`max-w-[25rem]`}>{res.desc}</p>
                     </div>
                  <Image src={res.img} fill alt="" className={`!relative lg:!absolute !left-0 lg:!left-[40%] lg:!top-[35%] my-4 lg:my-0`}/>
                   <Link href={res.pathName}>
                   <Button className="mt-8 lg:mt-[10rem]">Detail Product </Button>
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
