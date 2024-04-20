import React from 'react'
import { Button } from './button'

const ServiceCTA = () => {
  return (
    <div className='w-full max-w-fluid mx-auto mt-20'>
      <div className="w-full grid md:grid-cols-2 bg-gradient-to-br from-[#231349] to-[#150F22] rounded-xl border-[3px] border-white min-h-80">
        <div className='p-11 h-full flex justify-between flex-col'>
            <div>
                <h3 className="text-h3 font-grotesk font-semibold">
                    Our Services
                </h3>
                <p className='text-gray'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
            </div>
            <Button variant="rounded" className='w-max'>See Our Services</Button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCTA
