import AlphaBot from "@/components/sections/alphaBot";
import Blog from "@/components/sections/blog";
import Clients from "@/components/sections/clients";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import ServiceCard from "@/components/sections/serviceCard";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <Hero videoBg="/hero-bg-video.mp4" heading="A Smart, Sustainable Future"
            desc="We are committed to driving innovation through smart, sustainable IT solutions. Discover how our innovative services can help you grow."/>
      <Services/>
      <ServiceCard />
      <AlphaBot/>
      <Products/>
      <Clients/>
      <Blog/>
      <Footer/>
    </main>
  );
}