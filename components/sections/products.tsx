import React from 'react'
import SliderBox from '../ui/sliderBox'

const Products = () => {
    const data = [
        {
            heading: "Crypto Currency Transaction System",
            desc: "Our tailored system is designed to meet the unique needs of businesses navigating the dynamic world of digital currencies. With expertise in blockchain technology and crypto transactions, our team offers a customized solution that ensures seamless and secure management of cryptocurrency transactions. Our system encompasses features such as real-time transaction tracking, secure wallet management, and comprehensive reporting tools.",
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
            desc: "Whether you're a startup or an established enterprise, our commitment is to empower your business with a scalable and flexible E-commerce solution that grows with your business and keeps you ahead in the ever-growing digital marketplace.",
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
            desc: "Alpha Vision Technology provides a customized E-Leave Management System that helps businesses digitize their internal leave management procedures. Our system is meticulously designed to handle all stages of the employee leave process including approvals from individual managers to the HR department.",
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
            desc: "No one-size-fits-all inventory? <br/> We get it. That's why our customized system bends to your specific business needs, seamlessly aligning with your unique workflow. Our solution ensures real-time visibility into stock levels, optimizing the entire inventory lifecycle beginning from procurement to sales.",
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
            </p>
        </div>
        <SliderBox data={data} />
    </div>
  )
}

export default Products
