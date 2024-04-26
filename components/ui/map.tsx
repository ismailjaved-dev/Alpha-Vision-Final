"use client"

import {useState} from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const locations = [{icon:"/malFlag.png", name : "Malaysia"},{icon:"/IndFlag.png", name : "Indonesia"}]

export default function Map() {
  const [currLocation, setCurrLocation] = useState(locations[0]);

  return <div
    className="h-[80vh] border-2 border-primary rounded-lg p-10 lg:p-6 flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-[#150F22] to-background">
    <iframe className="flex-1 w-full rounded-lg border-none overscroll-none overflow-hidden h-[20rem]"
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe>
    <h3 className="font-bold text-h3 mb-0">Our Locations</h3>
    <div className="flex flex-col lg:flex-row gap-6">
      {locations.map((location,index) => (
        <Button key={index}
                variant={currLocation.name == location.name ? "rounded" : "rounded"}
                onClick={() => {
                  setCurrLocation(location)
                }}
                className="flex gap-5"
                >
                   <Image src={location.icon} width={40} height={40} alt={location.name} priority/>
                  {location.name}</Button>
      ))}
    </div>
  </div>
}