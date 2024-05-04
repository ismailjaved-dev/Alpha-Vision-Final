"use client";
import React,{useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Button } from "../ui/button";
import Image from "next/image";


const ProductsContent = () => {
  const data = [
    {
      title: "Crypto Curency1",
      desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
      img:"/productImg.png",
    },
     {
      title: "Crypto Curency2",
      desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
      img:"/productImg.png",
    }, {
      title: "Crypto Curency3",
      desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
      img:"/productImg.png",
    }, {
      title: "Crypto Curency4",
      desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
      img:"/productImg.png",
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
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div className="w-full mb-24">
        <Swiper
          slidesPerView={1.8}
          centeredSlides={true}
          initialSlide={1}
          loop={true}
          spaceBetween={5}
          className="p-16"
        >
      
          {
            data.map((res,index)=>{
              return(
                <SwiperSlide key={index} className="gradientBg py-10 px-16 min-h-[35rem] overflow-hidden ">
                     <div>
                     <h1 className="text-h1 font-bold">{res.title}</h1>
                     <p className={`max-w-[25rem]`}>{res.desc}</p>
                     </div>
                  <Image src={res.img} fill alt="" className={`!left-[40%] !top-[35%]`}/>
                     <Button className="mt-[10rem]">Detail Product </Button>
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
