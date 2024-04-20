"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import { Menu } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [state, setState] = useState(false);

  const data = [
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Services",
      path: "/services/hardware",
    },
    {
      label: "Our Products",
      path: "/products",
    },
    {
      label: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className="absolute w-full top-0 left-0 z-[99999] pt-12">
      <div className="w-full max-w-fluid mx-auto flex justify-between items-center gap-4 px-5 ">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            height={50}
            width={177}
            alt="Alpha Vision"
            className="h-[50px] w-max"
          />
        </Link>
        <div className="flex gap-6">
          {data.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="text-white text-md hidden lg:flex"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href={"/contact"}>
          {" "}
          <Button className=" hidden lg:flex">Book an Appointment</Button>
        </Link>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu onClick={()=>setState(true)}/>
            </SheetTrigger>
            <SheetContent className="z-[10000000]">
              <SheetHeader>
                <SheetDescription className="pt-16">
                  <SheetPrimitive.Close onClick={()=>setState(false)} className={`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary `}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </SheetPrimitive.Close>
                  {data.map((res, index) => {
                    return (
                      <Link href={res.path} key={index}>
                        <p
                          className={`flex justify-between w-full border-b border-white p-5 text-lg ${state && 'popUp'}`}
                        >
                          {res.label}
                          <ArrowUpRight />
                        </p>
                      </Link>
                    );
                  })}
                  <Link href={"/contact"}>
                    <p className={`flex justify-between w-full border-b border-white p-5 text-lg ${state && 'popUp'}`}>
                      Book An Appointment
                      <ArrowUpRight />
                    </p>
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
