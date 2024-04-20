"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Arrow } from "@radix-ui/react-select";
import { CircleX } from "lucide-react";

const Blog = () => {
  const pathname = usePathname();

  const data = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque.",
      image: "/blog.png",
      link: "/",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque.",
      image: "/blog.png",
      link: "/",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque.",
      image: "/blog.png",
      link: "/",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque.",
      image: "/blog.png",
      link: "/",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque.",
      image: "/blog.png",
      link: "/",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque.",
      image: "/blog.png",
      link: "/",
    },
  ];

  const mapData = pathname == "/" ? data.slice(0, 3) : data;

  return (
    <div className="w-full max-w-fluid mx-auto py-24 px-5">
      <div className="text-center">
        <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold">
          Blog
        </h2>
        <p className="text-md md:text-lg text-gray">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
      </div>

      {pathname !== "/" && (
        <>
          <div className="grid md:grid-cols-2 gap-10 my-10 p-5 gradientBg">
            <div className="hidden md:block relative">
              <Image src={"/blogImg.png"} fill alt="" priority />
            </div>
            <div className="my-auto lg:my-10">
              <h5 className="text-h5 font-bold capitalize mb-5">
                AI product development is being held back by data engineering.
                It’s time to do something about it
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante.
              </p>
            </div>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
        {mapData.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col gap-5 w-full h-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10"
          >
            <div className="h-[15rem] w-full overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={100}
                unoptimized
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-md font-bold">{item.title}</h5>
              <p className="text-gray">{item.desc}</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger className="btnPrimary">Read More</AlertDialogTrigger>
              <AlertDialogContent className="max-w-[70rem] overflow-hidden p-5 rounded-3xl m-4">
                <AlertDialogHeader>
                  <AlertDialogDescription className="text-center mt-8">
             
                  <h5 className="text-md font-bold my-3">{item.title}</h5>
                  <p className="text-gray">{item.desc}</p>
                  </AlertDialogDescription>
                </AlertDialogHeader>
    
                  <AlertDialogCancel className="absolute right-0 top-0 p-4 m-0"><CircleX /></AlertDialogCancel>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
