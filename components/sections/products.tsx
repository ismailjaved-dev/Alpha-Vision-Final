import React from 'react'
import SliderBox from '../ui/sliderBox'

const Products = () => {
    const data = [
        {
            heading: "Crypto Currency Transaction System",
            desc: "Our customized system is a secure and efficient platform designed to facilitate seamless cryptocurrency transactions. Whether you're sending, receiving, or exchanging digital assets, our system ensures that transactions are fast, transparent, and protected by advanced encryption technologies. Built for both individuals and businesses, it supports a wide range of cryptocurrencies and provides an intuitive interface for managing your digital wealth with confidence.(CRM)",
            path: "/",
            slides: [
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
        },
        {
            heading: "E - Commerce Managment System",
            desc: "From inventory management and order processing to customer relationship management and analytics, our system offers a unified solution that empowers businesses to efficiently manage their e-commerce activities. Whether you’re running a small online shop or a large-scale retail operation, our system is built to scale with your business, ensuring a seamless and profitable e-commerce experience.",
            path: "/",
            slides: [
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
        },
        {
            heading: "E - Leave Management System",
            desc: "The E-Leave Management System is an advanced digital platform designed to simplify and automate the leave management process for organizations of all sizes. It offers a streamlined solution for employees to request leave, managers to approve or deny requests, and HR to maintain accurate records. This system replaces traditional, paper-based leave management with a more efficient, transparent, and user-friendly approach, ensuring that the entire leave process is handled smoothly and accurately.",
            path: "/",
            slides: [
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
        },
        {
            heading: "Inventory Management System",
            desc: "Our Inventory Management System is a robust platform designed to help businesses efficiently track, manage, and control their inventory across multiple locations. It provides real-time visibility into stock levels, streamlines order fulfillment, and reduces the risks associated with overstocking or stockouts. This system is ideal for businesses of all sizes, ensuring that inventory is always optimized, accessible, and aligned with customer demand.",
            path: "/",
            slides: [
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
        }
    ]
  return (
    <div className='w-full max-w-fluid mx-auto overflow-x-hidden px-5'>
        <div className="text-center mx-auto">
            <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold">
                Our Products
            </h2>
            <p className='text-md md:text-lg text-gray'>
            Check out our products to see how they can improve your business.
            </p>
        </div>
        <SliderBox data={data} />
    </div>
  )
}

export default Products
