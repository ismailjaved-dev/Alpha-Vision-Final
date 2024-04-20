import React from 'react'

const Clients = () => {
    const marqueeX = [
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        }
    ]

    const marqueeX2 = [
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        },
        {
            name: 'Marquee X',
            img: '/marquee.png'
        }
    ]
  return (
    <div className=''>
        <div className="w-full max-w-fluid mx-auto text-center p-5">
            <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold">
                Our Clients
            </h2>
            <p className='text-md md:text-lg text-gray'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
            </p>
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="pointer-events-none relative flex gap-5 overflow-hidden">
                <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-5">
                    {
                        marqueeX.map((item, index) => {
                            return (
                                <div key={index} className="p-3 flex justify-center min-h-[13.75rem] items-center w-full h-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10">
                                    <img className="h-full max-h-[8.75rem] w-auto" src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-5">
                    {
                        marqueeX.map((item, index) => {
                            return (
                                <div key={index} className="p-3 flex justify-center min-h-[13.75rem] items-center w-full h-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10">
                                    <img className="h-full max-h-[8.75rem] w-auto" src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="pointer-events-none relative mt-5 flex gap-5 overflow-hidden">
                <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-5 [animation-direction:reverse]">
                    {
                        marqueeX2.map((item, index) => {
                            return (
                                <div key={index} className="p-3 flex justify-center min-h-[13.75rem] items-center w-full h-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10">
                                    <img className="h-full max-h-[8.75rem] w-auto" src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-5 [animation-direction:reverse]">
                    {
                        marqueeX2.map((item, index) => {
                            return (
                                <div key={index} className="p-3 flex justify-center min-h-[13.75rem] items-center w-full h-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10">
                                    <img className="h-full max-h-[8.75rem] w-auto" src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Clients
