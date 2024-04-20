import Hero from "@/components/sections/hero";
import Footer from "@/components/sections/footer";
import About from "@/components/sections/about";

export default function () {
  return (
    <div>
      <Hero heading="About Us" desc='Home / About Us'/>
      <About/>
      <Footer/>
    </div>
  )
}