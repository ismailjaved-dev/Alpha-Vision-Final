import Hero from "@/components/sections/hero";
import Footer from "@/components/sections/footer";
import Contact from "@/components/sections/contact";

const page = () => {
  return (
    <div>
      <Hero heading="Contact Us" desc='Home / Contact Us'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page