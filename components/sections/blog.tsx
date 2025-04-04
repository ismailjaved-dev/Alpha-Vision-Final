"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "../ui/input";

const Blog = () => {
  const pathname = usePathname();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const mapData = pathname == "/" ? data.slice(0, 3) : data;

  const currentItems = mapData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages =
    searchTerm == ""
      ? Math.ceil(mapData.length / itemsPerPage)
      : Math.ceil(mapData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          // className={currentPage === i ? "btn btn-primary" : "btn btn-seconaday"}
          className={`block w-[10px] h-[10px] rounded-full ${
            currentPage == i ? "bg-primary" : "bg-[#3E3E3E]"
          }`}
        ></button>
      );
    }
    return pageNumbers;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration in milliseconds
    });
  }, []);

  return (
    <div className="w-full max-w-fluid mx-auto overflow-x-hidden py-24 px-5">
      <div className="text-center">
        <h2 className="mb-3 text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold">
          Blog
        </h2>
        <p className="text-md md:text-lg text-gray">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
      </div>

      {pathname !== "/" && (
        <>
          {/* <div className="grid md:grid-cols-2 gap-10 my-10 p-5 gradientBg">
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
          </div> */}
        </>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
        {currentItems.map((item, index) => (
          <div
            className="p-4 flex flex-col gap-5 w-full h-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10"
            key={index}
            data-aos="flip-right"
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
              <AlertDialogTrigger className="btnPrimary">
                Read More
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-[70rem] overflow-hidden p-5 rounded-3xl m-4">
                <AlertDialogHeader>
                  <AlertDialogDescription className="text-center mt-8">
                    <h5 className="text-md font-bold my-3">{item.title}</h5>
                    <p className="text-gray">{item.desc}</p>
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogCancel className="absolute right-0 top-0 p-4 m-0">
                  <CircleX />
                </AlertDialogCancel>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))}
      </div>

      {pathname == "/blog" && (
        <div className="flex justify-center gap-2 my-6">
          {renderPageNumbers()}
        </div>
      )}

      {pathname == "/" && (
        <div className="flex justify-center my-[5rem]">
          <Link href={"/blog"}>
            <button className="primaryBtn">See More</button>
          </Link>
        </div>
      )}

      {pathname !== "/" && (
        <div className="p-10 overflow-hidden">
          <div className="fluid-container border p-10 gradientBg border-primary my-10">
            <div className="flex flex-col gap-7 items-start">
              <h3 className="text-h4 sm:text-h3 font-grotesk leading-[100%] m-0">
              Join Our Newsletter
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>

              <div className="w-full flex gap-10">
                <input className="bg-transparent outline-none border-b border-[#5E5E5E] w-full py-1 max-w-[29.875rem] text-gray"
                placeholder="Enter Your Email"
                />
                 {/* <Input placeholder="Enter Your Email" className="w-full border-none outline-none focus:ring-0 !bg-transparent"/> */}
              <button className="primaryBtn mt-5">Submit</button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
