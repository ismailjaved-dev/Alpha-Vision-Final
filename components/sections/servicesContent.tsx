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


   

    const serviceContent = [
       {
        serviceName:"default",
         data:[
          {title:"Digital Marketing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/marketing1.png'},
          {title:"Search Engine Optimization",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/marketing2.png'},
          {title:"Corporate Branding",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/marketing3.png'},
          {title:"Pay-Per-Click (PPC)",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/marketing4.png'},
          {title:"Content Writing",desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",img:'/marketing5.png'},
         ]
       },
       {
        serviceName:"artificial-intelligence",
         data:[
          {title:"AI Strategy & Consulting",desc:"Tap into the power of AI with our services. We help businesses find ways to use AI for innovation, efficiency, and growth. Our experts work with you to create a custom AI plan that fits your goals, from start to finish. We share the latest AI technologies, tools, and best practices to ensure you get the best results and stay ahead of the competition.",img:'/ai1.jpg'},
          {title:"AI-Powered Automation",desc:"Transform your business operations with AI-powered automation. Our services help you automate repetitive and complex tasks, freeing up valuable resources and reducing human error. Whether it’s robotic process automation (RPA), intelligent document processing, or automated customer interactions, our AI-driven solutions streamline workflows and enhance productivity. We design automation solutions that are scalable, adaptable, and aligned with your business objectives, ensuring continuous improvement and growth.",img:'/ai2.jpg'},
          {title:"AI Integration & Custom Development",desc:"Integrate AI seamlessly into your existing systems with our AI integration and custom development services. We specialize in building bespoke AI solutions tailored to your unique business needs. Whether you require custom algorithms, AI-driven applications, or integration with third-party AI tools, our team ensures smooth implementation and optimal performance. We focus on creating AI solutions that are user-friendly, scalable, and secure, enabling you to leverage AI effectively across your organization.",img:'/ai3.jpg'},
          {title:"Natural Language Processing (NLP) ",desc:"Enhance your interaction with technology using our Natural Language Processing services. We create advanced NLP solutions that help machines understand, interpret, and respond to human language. From chatbots and virtual assistants to sentiment analysis and language translation, our NLP services improve user experiences and streamline operations. Our AI-driven language models boost customer engagement, automate customer service, and ensure smooth communication.",img:'/ai4.jpg'},
          {title:"AI-Driven Automation",desc:"We implement AI solutions to automate repetitive and complex tasks across various business functions. Our services help streamline workflows, reduce human error, and increase operational efficiency, enabling your team to focus on higher-value activities.",img:'/ai5.jpg'},
          {title:"Machine Learning Solutions",desc:"Our company develops custom machine learning models that enhance automation and improve the accuracy of predictions across various business processes. From fraud detection to personalized recommendations, our ML solutions are designed to address specific industry challenges.",img:'/ai6.jpg'},
          {title:"AI-Powered Data Analytics",desc:"We offer advanced AI-driven data analytics solutions that help businesses extract actionable insights from vast datasets. Our AI models are tailored to analyze patterns, predict trends, and optimize decision-making processes, enabling your business to stay ahead in a data-driven world.",img:'/ai7.jpg'},
          ]
       
       },
       {
          serviceName:"hardware",
          data: [
          {title:"Hardware Repairs & Upgrades",desc:"We specialize in providing professional repair and upgrade services for all your electronic devices. Whether it's your laptop, Desktop PC, smartphone, tablet, TV, or projector, our skilled technicians are dedicated to providing quick and reliable solutions to get your devices back in optimal condition. From cracked screens and hardware malfunctions to software upgrades and performance enhancements, we handle it all with precision. Reach out to us today for swift and dependable repair and upgrade services for your needs.",img:'/hardware1.jpg'},
          {title:"Hardware Sourcing & Procurement",desc:"With years of experience and a vast network of trusted suppliers, we excel in sourcing the highest quality hardware components and peripherals with competitive pricing. Whether you require laptops, computer components, from CPUs and GPUs to networking gear and peripherals, networking devices & equipment, servers, storage solutions, or any other hardware, we’ve got you covered. Our dedicated team works tirelessly to source the best products that align with your requirements.",img:'/hardware2.jpg'},
          {title:"IT Asset Management",desc:"With our expertise in asset tracking, inventory management, and lifecycle planning, we provide tailored solutions to efficiently manage your organization's IT assets from acquisition to disposal. Our robust software platforms and skilled professionals ensure accurate tracking of hardware, software licenses, and other IT resources, enabling you to make informed decisions and maximize asset utilization. Whether you're a small business or a large enterprise, our customizable services adapt to your unique requirements, helping you reduce costs, minimize risks, and enhance productivity.",img:'/hardware3.jpg'},      
          {title:"Server Installation & Configuration",desc:"With our team of experienced IT professionals, we specialize in deploying robust server solutions that form the backbone of your digital infrastructure. Our experienced technicians ensure precise hardware installation, including processors, memory, storage drives, and network cards. We perform thorough operating system installation and configuration, along with essential software updates. Whether you’re deploying a new server environment, upgrading an existing one or migrating to cloud-based platforms, we ensure seamless integration and optimal performance for your business needs.",img:'/hardware4.jpg'},      
          ]
        },
        {
          serviceName:"software",
          data: [
          {title:"Customized Software Development",desc:"We specialize in creating comprehensive and innovative software solutions tailored to your specific business requirements. Whether you're a start-up looking to launch your first product or an established enterprise seeking to optimize your business operations, our team of experienced developers, designers, and project managers collaborates closely with clients to deliver high-quality customized applications.",img:'/software1.jpg'},
          {title:"Mobile App Development",desc:"Our Mobile App Development services empower businesses to create impactful, user-centric applications across platforms. From conceptualization and design to development, testing, and deployment, our skilled team ensures seamless experiences for iOS, Android, and cross-platform apps. We specialize in native app development, responsive design, and integrations with backend systems. Whether it’s a consumer-facing app or an enterprise solution, we deliver robust, secure, and scalable mobile experiences that drive engagement and business growth.",img:'/software2.jpg'},
          {title:"Software as a Service (SaaS) ",desc:"Our robust SaaS offerings provide seamless access to cutting-edge software solutions without the hassle of installation, maintenance, or infrastructure costs. Tailored to meet the diverse needs of businesses across various industries, our subscription packages offer flexible pricing plans and customizable features to suit your specific requirements cover a wide range of functionalities including customer relationship management (CRM) systems, enterprise resource planning (ERP), project collaboration tools, and more.",img:'/software3.jpg'},
          {title:"Website Development & Administration",desc:"Whether you're a small business looking to establish your digital presence or a large corporation seeking to revamp your online platform, we encompass the entire lifecycle of creating and maintaining a successful online presence. From designing responsive and visually appealing websites to developing custom features, we ensure seamless user experiences. Our team specializes in front-end development, back-end integration, and content management systems (CMS). We manage everything from domain registration and hosting setup to ongoing security updates, performance optimization, and analytics tracking.",img:'/software4.jpg'},      
          ]
        },
        {
          serviceName:"marketing",
          data: [
          {title:"SEO",desc:"In the digital age, being discoverable online is critical for businesses. Our team of SEO experts will optimize your website to rank higher on search engine results pages (SERPs), driving organic traffic by targeting relevant keywords and implementing proven SEO techniques to attract quality organic traffic that converts into leads and customers. With strategic keyword research, content optimization, and technical SEO enhancements, we'll ensure that your website stands out in the digital crowd.",img:'/marketing1.png'},
          {title:"Social Media Marketing (SMM)",desc:"In the dynamic world of social media, strategic marketing can make or break your brand. At Alpha Vision Technology, we specialize in creating tailored social media strategies that drive engagement, boost brand awareness, and deliver measurable results. Whether you’re a start-up, a local business, or a global enterprise, our services are designed to elevate your online presence.",img:'/marketing2.png'},
          {title:"Email Marketing",desc:"We understand that email marketing isn’t just about sending messages—it’s about creating meaningful connections with your audience. Our tailored campaigns focus on nurturing leads and engaging current customers to encourage conversions. From personalized welcome emails to targeted promotions, we craft content that resonates. Our data-driven approach ensures effective execution, tracking metrics, and optimizing results. Ready to boost your ROI? Contact us for a free consultation!",img:'/marketing3.png'},
          {title:"Pay-Per-Click (PPC) Advertising",desc:"We specialize in driving targeted traffic to your website through Pay-Per-Click (PPC) Advertising. Imagine having your brand prominently displayed on search engine result pages (SERPs) when potential customers search for relevant keywords or phrases. With PPC, you pay only when someone clicks on your ad, ensuring cost-effective exposure. Our PPC specialists maximize your advertising budget by targeting high-converting keywords, optimizing ad placements, and refining campaign strategies based on real-time data. strategically placing your message where it matters most. Whether it’s Google Ads, Bing Ads, or social media platforms, we optimize your budget for maximum impact. Gain actionable insights into campaign performance with comprehensive analytics and reporting, allowing you to make data-driven decisions and achieve measurable results.",img:'/marketing4.png'},
          {title:"Content Marketing",desc:"We specialize in crafting compelling content that resonates with your audience. Our Content Writing services cover a wide spectrum, including blog posts, white papers, case studies, and website copy. Our team of experienced writers understands the intricacies of the tech industry, translating complex concepts into clear, engaging content. Whether you need SEO-optimized articles or thought leadership pieces, we’re here to elevate your brand’s voice and drive meaningful connections. Let us weave words that captivate, inform, and inspire in the ever-evolving digital landscape.",img:'/marketing5.png'},   
          {title:"Corporate Branding",desc:"At our tech company, we specialize in strategic Corporate Branding that sets your business apart in the digital landscape. Our services encompass brand identity creation, rebranding for established companies, and defining compelling brand messaging and positioning. We collaborate closely with our clients to craft a unique brand strategy, ensuring consistency across all touchpoints. From designing captivating logos to formulating comprehensive brand guidelines, we empower tech companies to leave a lasting impression on their audience. Let us elevate your brand presence and drive meaningful connections in the ever-evolving technology sector.",img:'/marketing6.jpg'},   
        ]
        },
        {
          serviceName:"networking",
           data:[
            {title:"Network Architecture & Design",desc:"We specialize in providing professional repair and upgrade services for all your electronic devices. Whether it's your laptop, Desktop PC, smartphone, tablet, TV, or projector, our skilled technicians are dedicated to providing quick and reliable solutions to get your devices back in optimal condition. From cracked screens and hardware malfunctions to software upgrades and performance enhancements, we handle it all with precision. Reach out to us today for swift and dependable repair and upgrade services for your needs.",img:'/Network1.png'},
            {title:"Network Installation, Configuration, & Upgrades",desc:"With years of experience and a vast network of trusted suppliers, we excel in sourcing the highest quality hardware components and peripherals with competitive pricing. Whether you require laptops, computer components, from CPUs and GPUs to networking gear and peripherals, networking devices & equipment, servers, storage solutions, or any other hardware, we’ve got you covered. Our dedicated team works tirelessly to source the best products that align with your requirements.",img:'/Network2.jpg'},
            {title:"Network Audit & Assessment",desc:"With our expertise in asset tracking, inventory management, and lifecycle planning, we provide tailored solutions to efficiently manage your organization's IT assets from acquisition to disposal. Our robust software platforms and skilled professionals ensure accurate tracking of hardware, software licenses, and other IT resources, enabling you to make informed decisions and maximize asset utilization. Whether you're a small business or a large enterprise, our customizable services adapt to your unique requirements, helping you reduce costs, minimize risks, and enhance productivity.",img:'/Network3.jpg'},
            {title:"Network Hardware & Procurement",desc:"With our team of experienced IT professionals, we specialize in deploying robust server solutions that form the backbone of your digital infrastructure. Our experienced technicians ensure precise hardware installation, including processors, memory, storage drives, and network cards. We perform thorough operating system installation and configuration, along with essential software updates. Whether you’re deploying a new server environment, upgrading an existing one or migrating to cloud-based platforms, we ensure seamless integration and optimal performance for your business needs.",img:'/Network4.jpg'},
       
           ]
         },
         {
          serviceName:"data-recovery",
           data:[
            {title:"Hard Drive Data Recovery",desc:"At Alpha Vision Technology, we understand the critical importance of your data. Our state-of-the-art data recovery services are designed to tackle any data loss scenario. Whether you’re facing a mechanical failure, accidental deletion, or software corruption, our team of experts employs cutting-edge techniques and proprietary software to recover your valuable information. We prioritize the security and confidentiality of your data, all while offering a No recovery, No fee policy. Our process is transparent and customer-focused, providing you with regular updates every step of the way. Trust us to restore your peace of mind with our professional data recovery solutions.",img:'/data1.jpg'},
            {title:"Email & Database Recovery",desc:"Our Mobile App Development services empower businesses to create impactful, user-centric applications across platforms. From conceptualization and design to development, testing, and deployment, our skilled team ensures seamless experiences for iOS, Android, and cross-platform apps. We specialize in native app development, responsive design, and integrations with backend systems. Whether it’s a consumer-facing app or an enterprise solution, we deliver robust, secure, and scalable mobile experiences that drive engagement and business growth.",img:'/data5.jpg'},
            {title:"Server & RAID Data Recovery",desc:"Our robust SaaS offerings provide seamless access to cutting-edge software solutions without the hassle of installation, maintenance, or infrastructure costs. Tailored to meet the diverse needs of businesses across various industries, our subscription packages offer flexible pricing plans and customizable features to suit your specific requirements cover a wide range of functionalities including customer relationship management (CRM) systems, enterprise resource planning (ERP), project collaboration tools, and more.",img:'/data3.jpg'},
            {title:"USB Drives & Memory Card Recovery",desc:"Whether you're a small business looking to establish your digital presence or a large corporation seeking to revamp your online platform, we encompass the entire lifecycle of creating and maintaining a successful online presence. From designing responsive and visually appealing websites to developing custom features, we ensure seamless user experiences. Our team specializes in front-end development, back-end integration, and content management systems (CMS). We manage everything from domain registration and hosting setup to ongoing security updates, performance optimization, and analytics tracking.",img:'/data4.jpg'},
            {title:"Mobile Device Data Recovery",desc:"Whether you're a small business looking to establish your digital presence or a large corporation seeking to revamp your online platform, we encompass the entire lifecycle of creating and maintaining a successful online presence. From designing responsive and visually appealing websites to developing custom features, we ensure seamless user experiences. Our team specializes in front-end development, back-end integration, and content management systems (CMS). We manage everything from domain registration and hosting setup to ongoing security updates, performance optimization, and analytics tracking.",img:'/data2.jpg'},
           ]
         },
         {
          serviceName:"security",
           data:[
            {title:"Cybersecurity Services",desc:"Protect your digital assets with our all-inclusive cybersecurity services. We provide complete protection against threats like malware, ransomware, phishing, and data breaches. Our solutions include threat detection and response, vulnerability assessments, penetration testing, and security audits. Using advanced technologies like AI-driven threat analysis and real-time monitoring, we keep your network and data secure. Our proactive approach helps you stay ahead of new threats, ensuring your business remains safe and reputable.",img:'/security1.jpg'},
            {title:"Managed Security Services (MSS)",desc:"Our Managed Security Services provide continuous protection for your IT infrastructure. We offer 24/7 monitoring, threat detection, incident response, and regular security updates to keep your systems secure. Our team of experts manages all aspects of your security operations, from firewall management to intrusion detection and prevention. With our MSS, you can focus on your core business activities while we ensure your network is protected against the latest threats and vulnerabilities.",img:'/security2.jpg'},
            {title:"Cloud Security",desc:"Protect your cloud infrastructure with our comprehensive cloud security services. We help you implement best practices for securing public, private, or hybrid cloud environments. Our services include identity management, data encryption, access controls, and continuous monitoring. We ensure your cloud applications and data are safe from unauthorized access, data breaches, and other threats, allowing you to use the cloud with confidence.",img:'/security3.jpg'},
            {title:"Network Security",desc:"Strengthen your network against cyber threats with our advanced network security services. We design and implement strong security architectures to protect against unauthorized access, data breaches, and other threats. Our services include firewall configuration, VPN setup, intrusion detection and prevention, and network segmentation. We also conduct regular security assessments and audits to identify and fix potential vulnerabilities, ensuring your network stays secure and resilient.",img:'/securitynetwork.jpg'},      
            {title:"IT Audit and Compliance Assurance",desc:"Ensure that your IT systems and processes meet regulatory and industry standards with our IT audit and compliance assurance services. We conduct thorough audits to identify vulnerabilities, assess risks, and evaluate your current security measures. Our team ensures that your organization complies with relevant regulations such as GDPR, HIPAA, and PCI DSS. We provide detailed reports and actionable recommendations to help you address compliance gaps, reduce risks, and maintain a strong security posture.",img:'/securityaudit.jpg'},      
            {title:"Data Loss Prevention and Disaster Recovery",desc:"We implement advanced DLP strategies that prevent unauthorized access, accidental data leaks, and loss of sensitive information. Our disaster recovery solutions include comprehensive backup plans, failover systems, and recovery procedures to restore your operations in the event of a disaster quickly. With our services, you can safeguard your data and ensure that your business can recover quickly from any disruption.",img:'/security5.jpg'},      
            {title:"Security Policy Development & Assessment",desc:"We work with you to create tailored security policies that align with your business objectives and regulatory requirements. Our team assesses your current policies, identifies gaps, and provides recommendations for improvement. We help you establish clear guidelines for data protection, access control, incident response, and more, ensuring your organization is well-prepared to handle security challenges.",img:'/security6.jpg'},      
            {title:"CCTV Surveillance & Remote Monitoring Solutions",desc:"Improve your physical security with our CCTV Surveillance and Remote Monitoring solutions. We design and install advanced surveillance systems that offer real-time monitoring of your premises. Our solutions feature high-definition cameras, motion detection, and remote access capabilities, enabling you to monitor your facilities from anywhere at any time. We also integrate with existing security systems and provide ongoing maintenance and support, ensuring your surveillance infrastructure remains effective and reliable.",img:'/security4.jpg'},      
           ]
         },
         {
          serviceName:"it-consulting",
           data:[
            {title:"Tech Infrastructure Consulting",desc:"Optimize your IT infrastructure for performance, reliability, and scalability with our consulting services. We analyze your existing infrastructure, identify bottlenecks, and recommend improvements that align with your business needs. Our services cover everything from network design and server management to storage solutions and virtualization. We help you build a robust and future-proof infrastructure that supports your business operations and growth, ensuring minimal downtime and maximum efficiency.",img:'/it1.jpg'},
            {title:"Technology Evaluation & Vendor Management",desc:"Make informed technology decisions with our technology evaluation and vendor management services. We help you evaluate new technologies, select the right tools, and manage vendor relationships to ensure you get the best value. Our consultants provide unbiased recommendations based on your business requirements, helping you navigate the complex technology landscape. We also assist in contract negotiations, performance monitoring, and vendor risk management, ensuring successful technology partnerships.",img:'/it2.jpg'},
            {title:"Project Management",desc:"Ensure the success of your IT projects with our expert project management services. We provide end-to-end project management, from initial planning and resource allocation to execution and delivery. Our experienced project managers use industry best practices to keep your projects on track, within budget, and aligned with your business goals. Whether you're implementing new software, upgrading infrastructure, or rolling out a digital initiative, we ensure timely and successful project completion.",img:'/it3.jpg'},
            {title:"Cloud Technology",desc:"Our IT consulting services focus on helping businesses leverage cloud technology to enhance efficiency and scalability. We assist with cloud migration, infrastructure design, and ongoing management, ensuring your organization benefits from the full potential of cloud computing. Our solutions are tailored to your specific needs, whether you're adopting public, private, or hybrid cloud environments.",img:'/it4.jpg'},      
            {title:"Business Process & Outsourcing",desc:"We streamline business operations through process optimization and outsourcing solutions. Our team evaluates your existing processes, identifies areas for improvement, and implements strategies that enhance productivity and reduce costs. We also manage outsourced IT functions, allowing your organization to focus on core business activities while we handle the technical aspects.",img:'/it5.jpg'},      
            {title:"Software Licensing & Procurement",desc:"Our company offers comprehensive software licensing and procurement services, ensuring that you acquire the right software solutions at the best prices. We assist with vendor selection, contract negotiation, and license management, helping you avoid compliance issues and optimize your software investments.",img:'/it6.jpg'},      
            {title:"Business Transformation & Automation",desc:"Our consulting services include identifying opportunities for automation, designing automated workflows, and integrating these solutions into your existing systems. This approach reduces manual tasks, increases accuracy, and allows your business to adapt to changing market demands with agility.",img:'/it7.jpg'},      
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
    <h2 className="mb-3 text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
        We offer various services
    </h2>
    <p className="text-md md:text-lg text-gray">
    Discover the Services We Can Offer to Support Your Business Needs.
    </p>

    <div className="grid xsm:grid-cols-2 md:grid-cols-4 my-20 gap-5">
        {serviceLinks.map((res,index) => (
            <Link scroll={false} data-aos="fade-up" key={index} href={res.link} className={`py-7 px-5 rounded-xl flex items-center justify-center ${pathname === res.link ? "bg-primary font-semibold" : "relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10"}`} >{res.title}</Link>
        ))}
    </div>

    <h2 className="mb-3 text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
        {pathname.replace("-"," ")}
    </h2>
    {/* <p className="text-md md:text-lg text-gray">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam
    </p> */}

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
                    <Image src={res.img} fill priority alt="" objectFit="cover"/>
                </div>
            </div>
        ))}
    </div>
</div>
  );
};

export default ServicesContent;
