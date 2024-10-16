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
      
      <Hero videoBg="/hero-bg-video.mp4" heading="<p>Welcome to Revolution, <br/> Welcome to Alpha Vision Technology</p>"
            desc="Join us as we continue to push the boundaries of what technology can achieve. Experience a future where productivity, efficiency and intelligence converge."/>
      <Services/>
      <ServiceCard />
      <AlphaBot/>
      <Products/>
      <Clients/>
      <Footer/>
    </main>
  );
}