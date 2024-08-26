import React from 'react'

const Clients = () => {
    const marqueeX = [
        {
            name: 'Marquee X',
            img: '/client1.png'
        },
        {
            name: 'Marquee X',
            img: '/client2.png'
        },
        {
            name: 'Marquee X',
            img: '/client3.png'
        },
        {
            name: 'Marquee X',
            img: '/client4.png'
        },
        {
            name: 'Marquee X',
            img: '/client5.png'
        },
        {
            name: 'Marquee X',
            img: '/client6.png'
        },
        {
            name: 'Marquee X',
            img: '/client7.png'
        },
        {
            name: 'Marquee X',
            img: '/client8.png'
        },
        {
            name: 'Marquee X',
            img: '/client9.png'
        },
        {
            name: 'Marquee X',
            img: '/client10.png'
        },
        {
            name: 'Marquee X',
            img: '/client11.png'
        },
        {
            name: 'Marquee X',
            img: '/client12.png'
        },
        {
            name: 'Marquee X',
            img: '/client13.png'
        },
        {
            name: 'Marquee X',
            img: '/client22.png'
        },
    ]

    const marqueeX2 = [
        {
            name: 'Marquee X',
            img: '/client15.png'
        },
        {
            name: 'Marquee X',
            img: '/client17.png'
        },
        {
            name: 'Marquee X',
            img: '/client18.png'
        },
        {
            name: 'Marquee X',
            img: '/client19.png'
        },
        {
            name: 'Marquee X',
            img: '/client20.png'
        },
        {
            name: 'Marquee X',
            img: '/client21.png'
        },
        {
            name: 'Marquee X',
            img: '/client23.png'
        },
        {
            name: 'Marquee X',
            img: '/client24.png'
        },
        {
            name: 'Marquee X',
            img: '/client25.png'
        },
        {
            name: 'Marquee X',
            img: '/client27.png'
        },
        {
            name: 'Marquee X',
            img: '/client28.png'
        },
        {
            name: 'Marquee X',
            img: '/client29.png'
        },
        {
            name: 'Marquee X',
            img: '/client30.png'
        },
        {
            name: 'Marquee X',
            img: '/client31.png'
        },
        {
            name: 'Marquee X',
            img: '/client32.png'
        },
        {
            name: 'Marquee X',
            img: '/client14.png'
        },
        {
            name: 'Marquee X',
            img: '/client16.png'
        },
    ]



  return (
    <div className=''>
        <div className="w-full max-w-fluid mx-auto overflow-x-hidden text-center p-5">
            <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold">
                Our Clients
            </h2>
            <p className='text-md md:text-lg text-gray'>
            Trusted by Leading Companies Across Various Industries
            </p>
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="pointer-events-none relative flex gap-5 overflow-hidden">
                <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-5">
                    {
                        marqueeX.map((item, index) => {
                            return (
                                <div key={index} className="py-3 px-8 flex justify-center min-h-[13.75rem] items-center w-full h-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10">
                                    <img className="h-full max-h-[8.75rem] w-auto" src={item.img} alt={item.img} />
                                </div>
                            )
                        })
                    }
                </div>
                <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-5">
                    {
                        marqueeX.map((item, index) => {
                            return (
                                <div key={index} className="py-3 px-8 flex justify-center min-h-[13.75rem] items-center w-full h-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10">
                                    <img className="h-full max-h-[8.75rem] w-auto" src={item.img} alt={item.img} />
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
                                    <img className="h-full max-h-[8.75rem] w-[280px] aspect-video object-contain" src={item.img} alt={item.img} />
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
                                    <img className="h-full max-h-[8.75rem] w-[280px] aspect-video object-contain" src={item.img} alt={item.img} />
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
