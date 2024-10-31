"use client"
import React,{useEffect} from "react";
import ContactForm from "@/components/forms/contact-form"
import Map from "@/components/ui/map";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin,FaFacebook, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const cardsData = [
  {
    Icon: '/phoneIcon.png',
    content: <>
      <p>(+62) 812-9250-9595</p>
      <p>(+62) 823-1024-2185</p>
    </>
  }, {
    Icon: '/mailIcon.png',
    content: <>
      <p>info@alphavtechnology.com</p>
      <p>alikhan@alphavtechnology.com</p>
    </>
  }, {
    Icon: '/socialIcon.png',
    content: <>
      <div className="flex gap-5">
      <Link href='https://www.linkedin.com/company/alphavisiontechnology/' target='_blank'><FaLinkedin size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' /></Link>
      <Link href="https://wa.me/+6282310242185" target='_blank'><FaWhatsapp size={25} className=' cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]'/></Link>
      <Link href="https://www.instagram.com/alphavisiontech.id/" target='_blank'><FaInstagram size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' /></Link>
     <Link href="https://facebook.com/alphavisiontech.id/" target='_blank'><FaFacebook size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff]' /></Link>
      </div>
     
    </>
  }, {
    Icon: '/locationIcon.png',
    content: <>
      <p>25-08, Soho Capital,</p>
      <p>Podomoro City,</p>
      <p>Jakarta Barat,</p>
      <p>DKI Jakarta 11470, Indonesia.</p>
    </>
  }]

export default function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1000 // Duration in milliseconds
    });
  }, []);

  return <section className='w-full max-w-fluid mx-auto overflow-x-hidden py-24 px-5 space-y-16'>
    <div className="text-center space-y-6">
      <h2 className="mb-3 text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
        Connect with us now
      </h2>
      <p className='text-md md:text-lg text-gray'>
      We focus on understanding your needs and creating customized solutions that aligns with your business.
      </p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {
        cardsData.map(({Icon, content}, index) => (
          <div
            key={index}
            className="p-2 lg:p-4 h-64 rounded-xl flex flex-col gap-6 justify-center items-center  text-white bg-[#150F22] border-2 border-primary rounded-lg"
            data-aos="flip-right"
            >
            <div>
  
              
              <Image src={Icon} width={60} height={60} alt="" priority/>
            </div>
            <div className="text-xs lg:text-sm text-white/85 text-center">
              {content}
            </div>
          </div>
        ))
      }
    </div>
    <div className="border-2 border-primary rounded-lg p-6 lg:p-16 space-y-12 bg-[#150F22]">
      <div className="text-center space-y-6">
        <h2 className="mb-3 text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
          Get in touch with us
        </h2>
        <p className='text-md md:text-lg text-gray'>
         Schedule a free consultation with one of our experts
        </p>
      </div>
      <ContactForm/>
    </div>
    <Map/>
  </section>
}