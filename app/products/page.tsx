import Hero from "@/components/sections/hero";
import Footer from "@/components/sections/footer";
import Product from "@/components/sections/productsContent";

export default function () {
  return (
    <div>
      <Hero heading="Our Product" desc='Home / Product'/>
      <Product/>
      <Footer/>
    </div>
  )
}