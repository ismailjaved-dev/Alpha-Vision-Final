import Hero from "@/components/sections/hero";
import Footer from "@/components/sections/footer";
import Contact from "@/components/sections/contact";

const page = () => {
  return (
    <div>
      <Hero heading="Book an Appointment" desc='Home / Book an Appointment'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page