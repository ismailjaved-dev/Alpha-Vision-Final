"use client"

import {useState} from "react";
import {Button} from "@/components/ui/button";

const locations = ["Malaysia", "Indonesia"]

export default function Map() {
  const [currLocation, setCurrLocation] = useState(locations[0]);

  return <div
    className="h-[80vh] border-2 border-primary rounded-lg p-10 lg:p-6 flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-[#150F22] to-background">
    <iframe className="flex-1 w-full rounded-lg border-none overscroll-none overflow-hidden"
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe>
    <h3 className="font-bold">Our Locations</h3>
    <div className="flex flex-col lg:flex-row gap-6">
      {locations.map((location) => (
        <Button key={location}
                variant={currLocation === location ? "rounded" : "rounded"}
                onClick={() => {
                  setCurrLocation(location)
                }}>{location}</Button>
      ))}
    </div>
  </div>
}