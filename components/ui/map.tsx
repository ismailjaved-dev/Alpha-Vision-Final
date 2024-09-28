"use client"

import {useState} from "react";
import Image from "next/image";

const locations = [{icon:"/malFlag.png", name : "Malaysia", href:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8126826096704!2d101.70506908489384!3d3.1440911450303415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3629019c8661%3A0x584753437f2a7287!2sPlaza%20Low%20Yat!5e0!3m2!1sen!2s!4v1727457955581!5m2!1sen!2s"},{icon:"/indFlag.png", name : "Indonesia",href:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.673108631724!2d106.78742177591347!3d-6.174500360507131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f73add25d7ab%3A0x5c0265cf5e639bb5!2sSoho%20Capital!5e0!3m2!1sen!2s!4v1727457735536!5m2!1sen!2s"}]

export default function Map() {
  const [currLocation, setCurrLocation] = useState(locations[0]);



  return <div
    className="h-[80vh] border-2 border-primary rounded-lg p-10 lg:p-6 flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-[#150F22] to-background">
    <iframe className="flex-1 w-full rounded-lg border-none overscroll-none overflow-hidden h-[20rem]"
            src={currLocation.href}>
    </iframe>

    <h3 className="font-bold text-h3 mb-0">Our Locations</h3>
    <div className="flex flex-col lg:flex-row gap-6">
      {locations.map((location,index) => (
        <button key={index}
                // variant={currLocation.name == location.name ? "rounded" : "rounded"}
                onClick={() => {
                  setCurrLocation(location)
                }}
                className="flex gap-5 secondaryBtn rounded-[44px] formBtn"
                >
                   <Image src={location.icon} width={40} height={40} alt={location.name} priority/>
                  {location.name}</button>
      ))}
    </div>
  </div>
}

