"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

const data = [
  {
    tag: "About Us",
    content:
      "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals and businesses across all industries, ushering in a new era of productivity, efficiency, and competency through the transformative power of technology.",
    content2:
      "Alpha Vision Technology represents a collaboration between two well-established and reputable technology providers in Malaysia. One specializes in hardware-related services, while the other brings expertise from the software industry. Through the synergies of these two companies, we provide an extensive range of solutions & services to our customer base in Indonesia, further expanding our clientele throughout Southeast Asia.",
    image: "/about1.svg",
    link: "/",
    width: "full",
  },
  {
    tag: "Our Mission",
    content:
      "To revolutionize people and businesses across all industries to work productively, efficiently, and intelligently, with the power of technology.",
    image: "/about3.svg",
    link: "/",
    width: "half",
  },
  {
    tag: "Our Vision",
    content:
      "We aim to become the leading IT solution provider for SMEs across Southeast Asia region with unparalleled service & competence. We aspire to be a trusted business partner, having long-term relationship with our clients, a rewarding workplace for our employees, and a positive force for the community.",
    image: "/about2.svg",
    link: "/",
    width: "half",
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration in milliseconds
    });
  }, []);

  const activeCard = true;

  return (
    <section className="w-full max-w-fluid mx-auto overflow-x-hidden py-24 px-6 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-16 mt-12">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`${
              index == 0 ? "p-4 sm:p-8" : "p-4"
            } flex flex-col gap-4 w-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10  ${
              item.width === "full" ? "lg:col-span-2" : "col-span-1"
            }`}
          >
            <Image
              src={item.image}
              alt={item.image}
              height={100}
              width={100}
              unoptimized
              className={`object-cover h-full w-full  ${
                index == 0
                  ? "aboutImages"
                  : "aboutImagesActive border border-[#568BFA]"
              }`}
            />

            <div className="flex flex-col gap-4">
              <p className="text-gray">{item.content}</p>
              <p className="text-gray">{item.content2}</p>
            </div>
            <h2
              className={`${
                index == 0
                  ? "text-h5 left-4 sm:text-h4 sm:left-8"
                  : "text-h5 left-4 border !border-[#568BFA]"
              } rounded-tl-lg rounded-br-lg absolute top-4 left-4 py-2 px-4 bg-[#231349] font-bold border-t-0 border-l-0 !rounded-t-[0px] !rounded-l-[0px] `}
            >
              {item.tag}
            </h2>
          </div>
        ))}
      </div>
      <div className="rounded-lg space-y-12" id="meet-the-team">
        <div className="text-center space-y-6">
          <h2 className="mb-3 text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
            Meet with the team
          </h2>
          <p className="text-md md:text-lg text-gray">
          Meet the experienced leaders driving Alpha Vision Technology’s success.
          </p>

          <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 pt-20">
            <div
              className={`gradientBg !opacity-100 p-[15px] flex flex-col gap-16 relative overflow-hidden cursor-default`}
            >
              <div className="flex justify-between">
                <p className={`text-sm text-white/50 text-left`}>
                 CEO
                </p>
                <p className="bg-secondary text-sm text-white h-fit px-3 py-[7px] rounded-sm min-w-10 text-center">
                  <Link href={"https://www.linkedin.com/in/itsalisajid/"} target="_blank">
                  <FaLinkedin size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff] mt-[-7px]' />
                  </Link>
                </p>
              </div>
            
              <p
                className={`text-left text-lg font-[600px] ${
                  activeCard && "text-white"
                }`}
              >
                Ali  
                <br />
                Khan
              </p>
              <Image
                src={"/ali.png"}
                alt={"res.fullName"}
                fill
                className="absolute !w-2/3 !h-[74%] !top-[24%] !bottom-0 !right-[0] !left-auto !z-[-10] !max-w-[125px]"
              />
            </div>

            <div
              className={`gradientBg !opacity-100 p-[15px] flex flex-col gap-16 relative overflow-hidden cursor-default`}
            >
              <div className="flex justify-between">
                <p className={`text-sm text-white/50 text-left`}>
                  Project Manager
                  <br />
                  Team Lead
                </p>
                <p className="bg-secondary text-sm text-white h-fit px-3 py-[7px] rounded-sm min-w-10 text-center">
                <Link href={"https://www.linkedin.com/in/talha-wajid-679559216/"} target="_blank">
                  <FaLinkedin size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff] mt-[-7px]' />
                  </Link>
                </p>
              </div>
             
              <p
                className={`text-left text-lg font-[600px] ${
                  activeCard && "text-white"
                }`}
              >
              
                Talha
              </p>
              <Image
                src={"/talha.png"}
                alt={"res.fullName"}
                fill
                className="absolute !w-2/3 !h-[69%] !top-[30%] !bottom-0 !right-[0] !left-auto !z-[-10] !max-w-[110px] mr-2"
              />
            </div>

            <div
              className={`gradientBg !opacity-100 p-[15px] flex flex-col gap-16 relative overflow-hidden cursor-default`}
            >
              <div className="flex justify-between">
                <p className={`text-sm text-white/50 text-left`}>
                  Marketing
                  <br />
                  Manager
                </p>
                <p className="bg-secondary text-sm text-white h-fit px-3 py-[7px] rounded-sm min-w-10 text-center">
                <Link href={"https://www.linkedin.com/in/yousuf-sajid/"} target="_blank">
                  <FaLinkedin size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff] mt-[-7px]' />
                  </Link>
                </p>
              </div>
             
              <p
                className={`text-left text-lg font-[600px] ${
                  activeCard && "text-white"
                }`}
              >
                Mohd
                <br />
                Shariman
              </p>
              <Image
                src={"/mohd.png"}
                alt={"res.fullName"}
                fill
                className="absolute !w-2/3 !h-[70%] !top-[28%] !bottom-0 !right-[0] !left-auto !z-[-10] !max-w-[110px]"
              />
            </div>

            <div
              className={`gradientBg !opacity-100 p-[15px] flex flex-col gap-16 relative overflow-hidden cursor-default`}
            >
              <div className="flex justify-between">
                <p className={`text-sm text-white/50 text-left`}>
                  Finance
                  <br />
                  Manager
                </p>
                <p className="bg-secondary text-sm text-white h-fit px-3 py-[7px] rounded-sm min-w-10 text-center">
                  <Link href={""} >
                  <FaLinkedin size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff] mt-[-7px]' />
                  </Link>
                </p>
              </div>
           
              <p
                className={`text-left text-lg font-[600px] ${
                  activeCard && "text-white"
                }`}
              >
                Ahmed
                <br />
                Nour
              </p>
              <Image
                src={"/ahmed.svg"}
                alt={"res.fullName"}
                fill
                className="absolute !w-2/3 !h-[98%] !top-[26%] !bottom-0 !right-[0] !left-auto !z-[-10] !max-w-[120px]"
              />
            </div>

            <div
              className={`gradientBg !opacity-100 p-[15px] flex flex-col gap-16 relative overflow-hidden cursor-default`}
            >
              <div className="flex justify-between">
                <p className={`text-sm text-white/50 text-left`}>
                  Regional Sales
                  <br />
                  Manager
                </p>
                <p className="bg-secondary text-sm text-white h-fit px-3 py-[7px] rounded-sm min-w-10 text-center">
                  <Link href={"https://www.linkedin.com/in/nancykhoo21/"} target="_blank">
                  <FaLinkedin size={25} className='cursor-pointer transition text-[#6C6C6C] hover:text-[#fff] mt-[-7px]' />
                  </Link>
                </p>
              </div>
          
              <p
                className={`text-left text-lg font-[600px] ${
                  activeCard && "text-white"
                }`}
              >
                Nancy
                <br />
                Khoo
              </p>
              <Image
                src={"/nancy.png"}
                alt={"res.fullName"}
                fill
                className="absolute !w-2/3 !h-[69%] !top-[30%] !bottom-0 !right-[0] !left-auto !z-[-10] !max-w-[125px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
