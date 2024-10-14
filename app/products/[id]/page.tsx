"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react'; 
import { Autoplay } from 'swiper/modules';

const Page = () => {


  const pathName = usePathname().split('/')[2]


    const data = [
        {
          title: "Crypto Currency Transaction System",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"Our customized system is a secure and efficient platform designed to facilitate seamless cryptocurrency transactions. Whether you're sending, receiving, or exchanging digital assets, our system ensures that transactions are fast, transparent, and protected by advanced encryption technologies. Built for both individuals and businesses, it supports a wide range of cryptocurrencies and provides an intuitive interface for managing your digital wealth with confidence.(CRM)",
          benefits:  <ul>
          <li className='my-1'><b>Security: </b>Employs state-of-the-art encryption and blockchain technology to safeguard your transactions and digital assets.</li>
          <li className='my-1'><b>Speed: </b>Enables near-instantaneous transactions, reducing the time and costs associated with traditional banking systems.</li>
          <li className='my-1'><b>Transparency: </b>{`Utilizes blockchain's immutable ledger to provide a clear, verifiable record of all transactions.`}</li>
          <li className='my-1'><b>Global Reach: </b>Facilitates cross-border transactions without the need for intermediaries, making it easier to transfer funds worldwide.</li>
          <li className='my-1'><b>Cost-Effective: </b>Reduces transaction fees compared to traditional financial systems, offering significant savings on large or frequent transactions.</li>
          <li className='my-1'><b>CRM Benefits: </b>Enhances customer engagement and satisfaction by providing personalized service and streamlined communication through integrated CRM tools.</li>
        </ul>,
          keyFeatured:
          <ul>
          <li className='my-1'><b>Multi-Currency Support: </b>Supports a wide range of cryptocurrencies, allowing users to manage and transact with different digital assets from a single platform.</li>
          <li className='my-1'><b> Secure Wallet Integration: </b>Provides a secure digital wallet for storing and managing your cryptocurrencies, with multi-factor authentication and encryption for added protection.</li>
          <li className='my-1'><b>Real-Time Transaction Monitoring: </b>{`Offers real-time tracking and notifications for all transactions, ensuring you’re always informed of your account activity.`}</li>
          <li className='my-1'><b>Blockchain Explorer: </b>Includes a built-in blockchain explorer for users to verify transactions and explore the public ledger, ensuring transparency and trust.</li>
          <li className='my-1'><b>User-Friendly Interface: </b>Features an intuitive design that simplifies the process of sending, receiving, and managing cryptocurrencies, even for beginners.</li>
          <li className='my-1'><b>User Access Rights & Control: </b>Allows for customizable access levels and permissions, ensuring that users have the appropriate control and security based on their roles and responsibilities.</li>
        </ul>
          ,
          featureImg:"/product1feature.svg",
          works:"Our trusted customized System operates on a decentralized blockchain network, ensuring that all transactions are secure, transparent, and immutable. Users can create an account and integrate their digital wallets with the platform. Once set up, they can easily send or receive cryptocurrencies by entering the recipient's wallet address and the amount to be transferred. The system verifies the transaction on the blockchain, providing real-time confirmation and updating the user’s balance. With multi-currency support and real-time monitoring, managing your crypto assets has never been easier.",
          workImg:"/product1work.svg",
          pathname:"crypto-currency-transaction-system",
          slides: [
            {
                url: '/product1-1.svg'
            },
            {
                url: '/product1-2.svg'
            },
            {
                url: '/product1-3.svg'
            },
            {
                url: '/product1-1.svg'
            },
            {
              url: '/product1-2.svg'
          },
          {
              url: '/product1-3.svg'
          }
        ]
        },
        {
          title: "E-Commerce Management System",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"From inventory management and order processing to customer relationship management and analytics, our system offers a unified solution that empowers businesses to efficiently manage their e-commerce activities. Whether you’re running a small online shop or a large-scale retail operation, our system is built to scale with your business, ensuring a seamless and profitable e-commerce experience.",
          benefits:<ul>
          <li className='my-1'><b>Enhanced Efficiency: </b>Automates routine tasks like inventory tracking, order processing, and customer support, freeing up time for strategic activities.</li>
          <li className='my-1'><b>Improved Customer Experience: </b>Provides personalized shopping experiences and faster order fulfillment, increasing customer satisfaction and loyalty.</li>
          <li className='my-1'><b>Scalability: </b>Adapts to the growing needs of your business, allowing you to manage more products, orders, and customers as you expand.</li>
          <li className='my-1'><b>Data-Driven Insights: </b>Offers detailed analytics and reporting tools to help you make informed decisions, optimize operations, and increase profitability.</li>
          <li className='my-1'><b>Centralized Management: </b>Consolidates all aspects of your e-commerce business into one platform, simplifying management and reducing complexity.</li>
        </ul>,
          keyFeatured:
          <ul>
          <li className='my-1'><b>Inventory Management: </b>Real-time tracking of stock levels, automated reordering, and inventory forecasting to prevent stockouts and overstocking.</li>
          <li className='my-1'><b>Order Processing: </b>Streamlined order management with automated workflows for processing, fulfillment, and shipping.</li>
          <li className='my-1'><b>Customer Relationship Management (CRM): </b>Tools for managing customer data, communication, and support, fostering stronger customer relationships.</li>
          <li className='my-1'><b>Multi-Channel Integration: </b>Seamlessly integrates with various sales channels, including your website, social media, and marketplaces like Amazon and eBay.</li>
          <li className='my-1'><b>Analytics and Reporting: </b>Comprehensive dashboards and reports that provide insights into sales performance, customer behavior, and operational efficiency.</li>
          <li className='my-1'><b>Payment Integration: </b>Supports multiple payment methods, offers secure transactions, and simplifies financial management with real-time processing and automated invoicing.</li>
        </ul>
          ,
          featureImg:"/product1feature.svg",
          works:"Our E-Commerce Management System works by integrating all your e-commerce processes into a single, user-friendly platform. Once set up, it automates tasks such as inventory updates, order tracking, and customer communication. You can manage products, process orders, and analyze sales data from a centralized dashboard. The system also integrates with various third-party applications, enabling seamless payment processing, shipping, and marketing. Through real-time analytics, you can monitor performance and make data-driven decisions to optimize your e-commerce operations",
          workImg:"/product1work.svg",
          pathname:"e-commerce-management-system",
          slides: [
            {
                url: '/product2-1.svg'
            },
            {
                url: '/product2-2.svg'
            },
            {
                url: '/product2-3.svg'
            },
            {
                url: '/product2-1.svg'
            },
            {
              url: '/product2-2.svg'
          },
          {
              url: '/product2-3.svg'
          }
        ]
        },
        {
          title: "E-Leave Management System",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"The E-Leave Management System is an advanced digital platform designed to simplify and automate the leave management process for organizations of all sizes. It offers a streamlined solution for employees to request leave, managers to approve or deny requests, and HR to maintain accurate records. This system replaces traditional, paper-based leave management with a more efficient, transparent, and user-friendly approach, ensuring that the entire leave process is handled smoothly and accurately.",
          benefits:
          <ul>
          <li className='my-1'><b>Efficiency: </b>Automates the leave application and approval process, reducing the time and effort required for both employees and managers.</li>
          <li className='my-1'><b>Transparency: </b>Provides clear visibility into leave balances, approval status, and historical records for all stakeholders.</li>
          <li className='my-1'><b>Compliance: </b>Ensures adherence to company leave policies and legal requirements, minimizing errors and discrepancies.</li>
          <li className='my-1'><b>Improved Communication: </b>Facilitates seamless communication between employees, managers, and HR regarding leave requests and approvals.</li>
          <li className='my-1'><b>Data-Driven Decisions: </b>Offers detailed reporting and analytics to help HR make informed decisions regarding leave trends and workforce planning.</li>
        </ul>
          ,
          keyFeatured:
          <ul>
          <li className='my-1'><b>Online Leave Requests: </b>Allows employees to submit leave requests online, view their leave balance, and track the status of their requests in real-time.</li>
          <li className='my-1'><b>Automated Approval Workflow: </b>Streamlines the approval process with customizable workflows that notify managers and HR of new requests, ensuring timely responses.</li>
          <li className='my-1'><b>Leave Balances & Accrual Tracking: </b>Automatically tracks and updates leave balances, accruals, and usage, providing accurate data to employees and HR.</li>
          <li className='my-1'><b>Integration with Payroll: </b>Integrates seamlessly with payroll systems to ensure accurate deductions and payments based on leave taken.</li>
          <li className='my-1'><b>Reporting & Analytics: </b>Provides comprehensive reports on leave usage, trends, and employee attendance, helping HR to optimize resource planning and policy adjustments.</li>
        </ul>
          ,
          featureImg:"/product1feature.svg",
          works:"Our customized E-Leave Management System operates through an intuitive online platform where employees can easily log in to request leave, check their balances, and view the status of their applications. Managers receive automated notifications of new leave requests, which they can approve or deny with a few clicks. The system automatically updates leave balances, records the transaction, and integrates with payroll for accurate leave accounting. HR can access detailed reports and analytics, making it easier to manage leave policies and ensure compliance.",
          workImg:"/product1work.svg",
          pathname:"e-leave-management-system",
          slides: [
            {
                url: '/product3-1.svg'
            },
            {
                url: '/product3-2.svg'
            },
            {
                url: '/product3-3.svg'
            },
            {
                url: '/product3-1.svg'
            },
            {
              url: '/product3-2.svg'
          },
          {
              url: '/product3-3.svg'
          }
        ]
        },
        {
          title: "Inventory Management System",
          desc: "Welcome to Alpha Vision Technology, where we believe we have what it takes to revolutionize individuals",
          about:"Our Inventory Management System is a robust platform designed to help businesses efficiently track, manage, and control their inventory across multiple locations. It provides real-time visibility into stock levels, streamlines order fulfillment, and reduces the risks associated with overstocking or stockouts. This system is ideal for businesses of all sizes, ensuring that inventory is always optimized, accessible, and aligned with customer demand.",
          benefits:
          <ul>
          <li className='my-1'><b>Real-Time Inventory Tracking: </b>Provides accurate, up-to-date information on stock levels across multiple locations, reducing the risk of overstocking or stockouts.</li>
          <li className='my-1'><b>Increased Efficiency: </b>Automates key inventory management processes, such as order tracking, restocking, and reporting, saving time and reducing human error.</li>
          <li className='my-1'><b>Cost Savings: </b>Optimizes inventory levels to minimize carrying costs, reduce waste, and improve cash flow.</li>
          <li className='my-1'><b>Improved Decision Making: </b>Offers detailed analytics and reporting tools that provide insights into inventory trends, helping businesses make informed purchasing and sales decisions.</li>
          <li className='my-1'><b>Scalability: </b> Easily adapts to the growing needs of your business, allowing you to manage a larger inventory as your business expands.</li>
        </ul>
          ,
          keyFeatured:
          <ul>
          <li className='my-1'><b>Multi-Location Management: </b>Track and manage inventory across multiple warehouses or store locations from a centralized dashboard.</li>
          <li className='my-1'><b>Automated Reordering: </b>Set up automated reordering to ensure that stock levels are maintained at optimal levels, preventing shortages and excess inventory.</li>
          <li className='my-1'><b>Order Management: </b>Seamlessly manage purchase orders, sales orders, and returns, with real-time updates to inventory levels.</li>
          <li className='my-1'><b>Reporting & Analytics: </b>Access detailed reports on stock levels, sales performance, and inventory turnover to optimize inventory management and business operations.</li>
        </ul>
          ,
          featureImg:"/product1feature.svg",
          works:"Our Inventory Management System integrates with your existing sales channels, suppliers, and warehouse systems to provide a unified view of your inventory. Users can log in to the platform to monitor stock levels, process orders, and generate reports. The system automatically updates inventory quantities in real-time as orders are placed, stock is received, or items are sold. Automated alerts notify you when stock levels reach predefined thresholds, prompting reordering to prevent stockouts. The platform's analytics tools help you identify trends, optimize stock levels, and make data-driven decisions to improve overall inventory management.",
          workImg:"/product1work.svg",
          pathname:"inventory-management-system",
          slides: [
              {
                  url: '/product4-1.svg'
              },
              {
                  url: '/product4-2.svg'
              },
              {
                  url: '/product4-3.svg'
              },
              {
                  url: '/product4-1.svg'
              },
              ,
              {
                  url: '/product4-2.svg'
              },
              {
                  url: '/product4-3.svg'
              }
          ]
        },
      ];





const renderData = data.filter((res) => res.pathname === pathName);


  return (
    <section className="overflow-x-hidden py-16 px-6 productInnerPage pt-28 md:pt-40">
      {renderData.map((res, index) => (
        <div key={index} className='w-full max-w-fluid mx-auto'>

<div className='py-10 relative'>
            
            <div className='swiper-gr swiper-gr-left'></div>
            <div className='swiper-gr swiper-gr-right'></div>
           
            <Swiper
                 slidesPerView={1.5}
                 centeredSlides={true}
                 //  initialSlide={1}
                 loop={true}
                 onSwiper={(swiper) => console.log(swiper)}
                 autoplay={{
                   delay: 2500,
                   disableOnInteraction: false,
                  }}
                  breakpoints={{
                    100: {
                      spaceBetween: 100,
                      slidesPerView: 1,
                    },
                    400: {
                      slidesPerView: 1.5,
                      spaceBetween: -100,
                    },
                    600: {
                      spaceBetween: -150,
                    },
                    800: {
                      spaceBetween: -200,
                    },
                    1100: {
                      spaceBetween: -250,
                    },
                    1300: {
                      spaceBetween: -350,
                    }
                  }}
                  spaceBetween={-300}
                modules={[Autoplay]}
              >
                {
                  res?.slides?.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                      {({isActive}) => (
                        <img src={slide.url} alt="slide"
                             className={`${isActive ? 'opacity-100 scale-90 z-[999]' : 'scale-50 opacity-30 z-10'} relative w-full  transition-all duration-500 object-cover`}/>
                      )}
                    </SwiperSlide>
                  ))
                }

                </Swiper>

          </div>

          <h1 className="text-h3 sm:text-h2 lg:text-h1 font-bold relative !z-[100]">{res.title}</h1>
          <p>{res.desc}</p>

        

          <div className='py-2 sm:py-3 lg:py-5  mt-4 grid  lg:grid-cols-2 gap-10'>
            <div className='p-5  gradientBg'>
              <h3 className='text-h5 lg:text-h4 mb-3'>Benefits</h3>
              <div>{res.benefits}</div> {/* Changed from <p> to <div> */}
            </div>
            <div className='p-5  gradientBg'>
              <h3 className='text-h5 lg:text-h4 mb-3'>ABOUT</h3>
              <p>{res.about}</p>
            </div>
          </div>

          <div className='py-2 sm:py-3 lg:py-5  mt-4 grid  lg:grid-cols-2 gap-10'>
          <div className='p-5  gradientBg'>
            
              <h3 className='text-h5 lg:text-h4 mb-3'>Key Features</h3>
              <div>{res.keyFeatured}</div> {/* Changed from <p> to <div> */}
       
            
          </div>

            <div className='p-5  gradientBg'>
              <h3 className='text-h5 lg:text-h4 mb-3'>How It Works</h3>
              <p>{res.works}</p>
            </div>
           
          </div>

       

        </div>
      ))}
    </section>
  )
}

export default Page