"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ServiceProps {
    pathname: string;
  }

  const ServicesContent: React.FC<ServiceProps> = ({pathname}) =>{
 
    const [data, setData] = useState<any>([
      {
        serviceName:"default",
         data:[
          {title:"Digital Marketing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
          {title:"Search Engine Optimization",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
          {title:"Corporate Branding",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
          {title:"Pay-Per-Click (PPC)",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
          {title:"Content Writing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
     
         ]
       }
    ]);
    

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


    console.log(pathname)

    const serviceContent = [
       {
        serviceName:"default",
         data:[
          {title:"Digital Marketing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
          {title:"Search Engine Optimization",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
          {title:"Corporate Branding",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
          {title:"Pay-Per-Click (PPC)",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
          {title:"Content Writing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/servicesImg.png'},
     
         ]
       },
       {
          serviceName:"hardware",
          data: [
          {title:"Hardware Repairs & Upgrades",desc:"We specialize in creating comprehensive and innovative software solutions tailored to your specific business requirements. Whether you're a start-up looking to launch your first product or an established enterprise seeking to optimize your business operations, our team of experienced developers, designers, and project managers collaborates closely with clients to deliver high-quality customized applications.",img:'/hardware1.jpg'},
          {title:"Hardware Sourcing & Procurement",desc:"With years of experience and a vast network of trusted suppliers, we excel in sourcing the highest quality hardware components and peripherals with competitive pricing. Whether you require laptops, computer components, from CPUs and GPUs to networking gear and peripherals, networking devices & equipment, servers, storage solutions, or any other hardware, we’ve got you covered. Our dedicated team works tirelessly to source the best products that align with your requirements. ",img:'/hardware2.jpg'},
          {title:"IT Asset Management",desc:"With our expertise in asset tracking, inventory management, and lifecycle planning, we provide tailored solutions to efficiently manage your organization's IT assets from acquisition to disposal. Our robust software platforms and skilled professionals ensure accurate tracking of hardware, software licenses, and other IT resources, enabling you to make informed decisions and maximize asset utilization. Whether you're a small business or a large enterprise, our customizable services adapt to your unique requirements, helping you reduce costs, minimize risks, and enhance productivity.",img:'/hardware3.jpg'},
          {title:"Server Installation & Configuration",desc:"With our team of experienced IT professionals, we specialize in deploying robust server solutions that form the backbone of your digital infrastructure. Our experienced technicians ensure precise hardware installation, including processors, memory, storage drives, and network cards. We perform thorough operating system installation and configuration, along with essential software updates. Whether you’re deploying a new server environment, upgrading an existing one or migrating to cloud-based platforms, we ensure seamless integration and optimal performance for your business needs.",img:'/hardware4.jpg'},      
          ]
        },
        {
          serviceName:"software",
          data: [
          {title:"Customized Software Development",desc:"We specialize in providing professional repair and upgrade services for all your electronic devices. Whether it's your laptop, Desktop PC, smartphone, tablet, TV, or projector, our skilled technicians are dedicated to providing quick and reliable solutions to get your devices back in optimal condition. From cracked screens and hardware malfunctions to software upgrades and performance enhancements, we handle it all with precision. Reach out to us today for swift and dependable repair and upgrade services for your needs.",img:'/software1.jpg'},
          {title:"Mobile App Development",desc:"Our Mobile App Development services empower businesses to create impactful, user-centric applications across platforms. From conceptualization and design to development, testing, and deployment, our skilled team ensures seamless experiences for iOS, Android, and cross-platform apps. We specialize in native app development, responsive design, and integrations with backend systems. Whether it’s a consumer-facing app or an enterprise solution, we deliver robust, secure, and scalable mobile experiences that drive engagement and business growth.",img:'/software2.jpg'},
          {title:"Software as a Service (SaaS) ",desc:"Our robust SaaS offerings provide seamless access to cutting-edge software solutions without the hassle of installation, maintenance, or infrastructure costs. Tailored to meet the diverse needs of businesses across various industries, our subscription packages offer flexible pricing plans and customizable features to suit your specific requirements cover a wide range of functionalities including customer relationship management (CRM) systems, enterprise resource planning (ERP), project collaboration tools, and more.",img:'/software3.jpg'},
          {title:"Website Development & Administration",desc:"Whether you're a small business looking to establish your digital presence or a large corporation seeking to revamp your online platform, we encompass the entire lifecycle of creating and maintaining a successful online presence. From designing responsive and visually appealing websites to developing custom features, we ensure seamless user experiences. Our team specializes in front-end development, back-end integration, and content management systems (CMS). We manage everything from domain registration and hosting setup to ongoing security updates, performance optimization, and analytics tracking.",img:'/software4.jpg'},      
          ]
        },
        {
          serviceName:"marketing",
          data: [
          {title:"SEO",desc:"In the digital age, being discoverable online is critical for businesses. Our team of SEO experts will optimize your website to rank higher on search engine results pages (SERPs), driving organic traffic by targeting relevant keywords and implementing proven SEO techniques to attract quality organic traffic that converts into leads and customers. With strategic keyword research, content optimization, and technical SEO enhancements, we'll ensure that your website stands out in the digital crowd.",img:'/servicesImg.png'},
          {title:"Social Media Marketing (SMM)",desc:"In the dynamic world of social media, strategic marketing can make or break your brand. At Alpha Vision Technology, we specialize in creating tailored social media strategies that drive engagement, boost brand awareness, and deliver measurable results. Whether you’re a start-up, a local business, or a global enterprise, our services are designed to elevate your online presence.",img:'/servicesImg.png'},
          {title:"Email Marketing",desc:"We understand that email marketing isn’t just about sending messages—it’s about creating meaningful connections with your audience. Our tailored campaigns focus on nurturing leads and engaging current customers to encourage conversions. From personalized welcome emails to targeted promotions, we craft content that resonates. Our data-driven approach ensures effective execution, tracking metrics, and optimizing results. Ready to boost your ROI? Contact us for a free consultation! 📧🚀",img:'/servicesImg.png'},
          {title:"Pay-Per-Click (PPC) Advertising",desc:"We specialize in driving targeted traffic to your website through Pay-Per-Click (PPC) Advertising. Imagine having your brand prominently displayed on search engine result pages (SERPs) when potential customers search for relevant keywords or phrases. With PPC, you pay only when someone clicks on your ad, ensuring cost-effective exposure. Our PPC specialists maximize your advertising budget by targeting high-converting keywords, optimizing ad placements, and refining campaign strategies based on real-time data. strategically placing your message where it matters most. Whether it’s Google Ads, Bing Ads, or social media platforms, we optimize your budget for maximum impact. Gain actionable insights into campaign performance with comprehensive analytics and reporting, allowing you to make data-driven decisions and achieve measurable results.",img:'/servicesImg.png'},
          {title:"Content Marketing",desc:"Our Content Marketing service goes beyond mere product pitches. Instead, we strategically provide useful content to your prospects and customers, helping them solve real-world issues. Whether it’s B2B content for work challenges or B2C content for personal needs, we tailor our approach to resonate naturally with your audience. From blog posts and ebooks to videos and infographics, we create a narrative that engages, educates, and delights. Our goal? To increase brand awareness, drive sales, and foster lasting loyalty. Let’s tell your story effectively and build meaningful connections with your audience.",img:'/servicesImg.png'},   
          {title:"Corporate Branding",desc:"At our tech company, we specialize in strategic Corporate Branding that sets your business apart in the digital landscape. Our services encompass brand identity creation, rebranding for established companies, and defining compelling brand messaging and positioning. We collaborate closely with our clients to craft a unique brand strategy, ensuring consistency across all touchpoints. From designing captivating logos to formulating comprehensive brand guidelines, we empower tech companies to leave a lasting impression on their audience. Let us elevate your brand presence and drive meaningful connections in the ever-evolving technology sector.",img:'/servicesImg.png'},   
          {title:"Content Writing",desc:"We specialize in crafting compelling content that resonates with your audience. Our Content Writing services cover a wide spectrum, including blog posts, white papers, case studies, and website copy. Our team of experienced writers understands the intricacies of the tech industry, translating complex concepts into clear, engaging content. Whether you need SEO-optimized articles or thought leadership pieces, we’re here to elevate your brand’s voice and drive meaningful connections. Let us weave words that captivate, inform, and inspire in the ever-evolving digital landscape.",img:'/servicesImg.png'},   
        ]
        },
        {
          serviceName:"networking",
           data:[
            {title:"Digital Marketing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/Network1.png'},
            {title:"Search Engine Optimization",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/Network2.jpg'},
            {title:"Corporate Branding",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/Network3.jpg'},
            {title:"Pay-Per-Click (PPC)",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/Network4.jpg'},
       
           ]
         },
         {
          serviceName:"data-recovery",
           data:[
            {title:"Digital Marketing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/data1.jpg'},
            {title:"Search Engine Optimization",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/data2.jpg'},
            {title:"Corporate Branding",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/data3.jpg'},
            {title:"Pay-Per-Click (PPC)",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/data4.jpg'},
            {title:"Content Writing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/data5.jpg'},
           ]
         },
         {
          serviceName:"security",
           data:[
            {title:"Digital Marketing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/security1.jpg'},
            {title:"Search Engine Optimization",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/security2.jpg'},
            {title:"Corporate Branding",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/security3.jpg'},
            {title:"Pay-Per-Click (PPC)",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/security4.jpg'},      
           ]
         },
         {
          serviceName:"it-consulting",
           data:[
            {title:"Digital Marketing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/it1.jpg'},
            {title:"Search Engine Optimization",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/it2.jpg'},
            {title:"Corporate Branding",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/it3.jpg'},
            {title:"Pay-Per-Click (PPC)",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/it4.jpg'},      
           ]
         },

    ]

    useEffect(() => {
      const renderData = () => {
          const filter = serviceContent.filter((res) => res.serviceName === pathname);
         filter.length >= 1 && setData(filter);
          
      };
      renderData();
  }, [pathname]);


  useEffect(() => {
    AOS.init({
        duration: 1000 // Duration in milliseconds
    });
}, []);

    

  return (
    <div className="w-full max-w-fluid mx-auto overflow-x-hidden text-center p-5 py-32">
    <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
        We offer various services
    </h2>
    <p className="text-md md:text-lg text-gray">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam
    </p>

    <div className="grid xsm:grid-cols-2 md:grid-cols-4 my-20 gap-5">
        {serviceLinks.map((res,index) => (
            <Link scroll={false} data-aos="fade-up" key={index} href={res.link} className={`py-7 px-5 rounded-xl flex items-center justify-center ${pathname === res.link ? "bg-primary font-semibold" : "relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10"}`} >{res.title}</Link>
        ))}
    </div>

    <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
        {pathname}
    </h2>
    <p className="text-md md:text-lg text-gray">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam
    </p>

    <div className="mt-16">
        {data[0].data.map((res:any,index:number) => (
            <div key={index} className={`grid items-center md:grid-cols-2 gap-8 md:gap-16 text-start my-16 ${index % 2 === 0 ? 'reverse' : ''}`}>
                <div className="flex flex-col my-0 gap-8 items-start textArea" data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}>
                    <h4 className="text-h4 font-semibold mb-0">{res.title}</h4>
                    <p>{res.desc}</p>
                    <Link href={'/contact'}>
                        <button className="primaryBtn">Contact Us</button>
                    </Link>
                </div>
                <div className="h-[25rem] w-full relative" data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}>
                    <Image src={res.img} fill priority alt=""/>
                </div>
            </div>
        ))}
    </div>
</div>
  );
};

export default ServicesContent;
