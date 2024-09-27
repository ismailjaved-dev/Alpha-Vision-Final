import AlphaBot from "@/components/sections/alphaBot";
import Blog from "@/components/sections/blog";
import Clients from "@/components/sections/clients";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import ServiceCard from "@/components/sections/serviceCard";
import Services from "@/components/sections/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <div className="flex justify-center items-center  flex-col h-[100vh] text-center p-5 relative">
        <Image fill src={'/hero_home.png'} alt=""/>
     <div className="relative z-20">
     <h1 className="text-h2 sm:text-h1 capitalize font-bold">Site is under maintenance</h1>
     <p>{`We're working hard to improve the user experience. Stay tuned!`}</p>
     </div>
      </div> */}
      <Hero videoBg="/hero-bg-video.mp4" heading="A Smart, Sustainable Future"
            desc="We are committed to driving innovation through smart, sustainable IT solutions. Discover how our innovative services can help you grow."/>
      <Services/>
      <ServiceCard />
      <AlphaBot/>
      <Products/>
      <Clients/>
      <Footer/>
    </main>
  );
}