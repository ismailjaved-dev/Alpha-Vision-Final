import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";


interface ServiceProps {
    pathname: string;
  }

  const ServicesContent: React.FC<ServiceProps> = ({pathname}) =>{


    const serviceLinks = [
        {title: 'Hardware', link:"hardware"},
        {title: 'Software', link:"software"},
        {title: 'Marketing', link:"marketing"},
        {title: 'Networking', link:"networking"},
        {title: 'Data Recovery', link:"data-recovery"},
        {title: 'Artificial Intelligence (AI)', link:"artificial-intelligence"},
        {title: 'Security', link:"security"},
        {title: 'IT Consulting', link:"it-consulting"},
    ]


    const serviceContent = [
        {title:"Digital Marketing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
        {title:"Search Engine Optimization",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
        {title:"Corporate Branding",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
        {title:"Pay-Per-Click (PPC)",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
        {title:"Content Writing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
    ]


  return (
    <div className="w-full max-w-fluid mx-auto text-center p-5 py-32">
      <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
        We offer various services
      </h2>
      <p className="text-md md:text-lg text-gray">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam
      </p>

      <div className="grid xsm:grid-cols-2 md:grid-cols-4 my-20 gap-5">
        {
            serviceLinks.map((res,index)=>{
                return(
                    <Link key={index} href={res.link} className={`py-7 px-5 rounded-xl flex items-center justify-center ${pathname == res.link ? "bg-primary" : "relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10"}`} >{res.title}</Link>
                )
            })
        }
      </div>

      <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
        {pathname}
      </h2>
      <p className="text-md md:text-lg text-gray">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam
      </p>


    <div className="mt-16">
        {
            serviceContent.map((res,index)=>{
                return(
                    <div key={index} className={`grid md:grid-cols-2 gap-8 md:gap-16 text-start my-16 ${index % 2 === 0 ? 'reverse' : ''}`}>
                        <div className="flex flex-col my-0 lg:my-10 gap-8 items-start textArea">
                            <h4 className="text-h4">{res.title}</h4>
                            <p>{res.desc}</p>
                            <Button>Contact Us</Button>
                        </div>
                        <div className="h-[25rem] w-full relative">
                            <Image src={res.img} fill priority alt=""/>
                        </div>
                    </div>
                )
            })
        }
    </div>


    </div>
  );
};

export default ServicesContent;
