import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
const Services = () => {
    const left_btns = [
        {
            label: 'Security',
            path: '/'
        },
        {
            label: 'Networking',
            path: '/'
        },
        {
            label: 'Data Recovery',
            path: '/'
        },
        {
            label: 'Artificial Intelligence',
            path: '/'
        },
    ]
    const right_btns = [
        {
            label: 'Software',
            path: '/'
        },
        {
            label: 'Hardware',
            path: '/'
        },
        {
            label: 'Marketing',
            path: '/'
        },
        {
            label: 'IT Consulting',
            path: '/'
        },
    ]
  return (
    <div className='w-full max-w-fluid mx-auto overflow-x-hidden py-32 px-5'>
        <div className="text-center">
            <h2 className='text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold'> Our Services</h2>
            <p className='text-md text-gray'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
            </p>
        </div>
        <div className="relative grid xsm:grid-cols-2 lg:grid-cols-4 gap-8 xsm:gap-0  mt-20 items-end max-w-[62.5rem] mx-auto">
            <div className='block w-full h-16 absolute bg-primary bg-opacity-55 rounded-[100%] blur-[100px]'></div>
            <div className="relative flex flex-col gap-9 items-center lg:items-end h-max">
                <div className="hidden lg:block w-[1px] h-[calc(100%-59px)] border-r border-primary border-dashed absolute -right-1 top-[29px] -z-10"></div>
                {
                    left_btns.map((item, index) => (
                        <Link href={item.path} className={`serviceAnchor pr-[25px] ${index === left_btns.length - 1 ? 'last-link' : ''}`}  key={index}>
                            <Button variant='rounded' className="serviceBtn w-[200px] after:content-[''] after:block after:h-[1px] after:w-[25px] after:absolute after:right-0 after:border-t after:border-primary after:border-dashed after:translate-x-full">{item.label}</Button>
                        </Link>
                    ))
                }
            </div>
            <div className="hidden lg:block col-span-2 mb-[30px] border-b border-dashed border-primary">
                <div className="h-[24.0625rem] relative mb-9 w-full after:content-[''] after:block after:h-[1px] after:w-[25px] after:absolute after:left-1 after:border-t after:border-primary after:border-dashed  after:bottom-48 before:content-[''] before:block before:h-[1px] before:w-[25px] before:absolute before:right-1 before:border-t before:border-primary before:border-dashed  before:bottom-48">
                    <Image src='service_symbol.svg' fill alt='services'/>
                </div>
            </div>
            <div className="relative flex flex-col gap-9 items-center lg:items-start h-max">
                <div className="hidden lg:block w-[1px] h-[calc(100%-59px)] border-l border-primary border-dashed absolute -left-1 top-[29px] -z-10"></div>
                {
                    right_btns.map((item, index) => (
                        <Link href={item.path} className={`serviceAnchor pl-[25px] ${index === left_btns.length - 1 ? 'last-link' : ''}`}  key={index}>
                            <Button variant='rounded' className="serviceBtn w-[200px] after:content-[''] after:block after:h-[1px] after:w-[25px] after:absolute after:left-0 after:border-t after:border-primary after:border-dashed after:-translate-x-full">{item.label}</Button>
                        </Link>
                    ))
                }
            </div>
        </div>
        {/* <div className='w-full'>
            <object type="image/svg+xml" data="/service.svg">svg-animation</object>
        </div> */}
    </div>
  )
}

export default Services
