import Hero from "@/components/sections/hero";
import Footer from "@/components/sections/footer";
import Product from "@/components/sections/productsContent";

const page = () => {
  return (
    <div>
      <Hero heading="Our Product" desc='Home / Product'/>
      <Product/>
      <Footer/>

    </div>
  )
}


export default page