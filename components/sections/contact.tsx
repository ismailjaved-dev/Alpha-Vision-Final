import {Smartphone} from "lucide-react";
import ContactForm from "@/components/forms/contact-form"
import Map from "@/components/ui/map";

const cardsData = [
  {
    Icon: Smartphone,
    content: <>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  }, {
    Icon: Smartphone,
    content: <>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  }, {
    Icon: Smartphone,
    content: <>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  }, {
    Icon: Smartphone,
    content: <>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  }]

export default function Contact() {
  return <section className='w-full max-w-fluid mx-auto py-24 px-5 space-y-16'>
    <div className="text-center space-y-6">
      <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
        Connect with us now
      </h2>
      <p className='text-md md:text-lg text-gray'>
        Lorem ipsum dolor sit amet consectetur adipiscing elit
      </p>
    </div>
    <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
      {
        cardsData.map(({Icon, content}, index) => (
          <div
            key={index}
            className="p-2 lg:p-4 h-64 rounded-xl flex flex-col gap-6 justify-center items-center bg-[#568BFA] text-white">
            <div>
              <Icon size={72}/>
            </div>
            <div className="text-xs lg:text-sm text-white/85 text-center">
              {content}
            </div>
          </div>
        ))
      }
    </div>
    <div className="border-2 border-primary rounded-lg p-10 lg:p-6 space-y-12 bg-[#150F22]">
      <div className="text-center space-y-6">
        <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
          Get in touch with us
        </h2>
        <p className='text-md md:text-lg text-gray'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
      </div>
      <ContactForm/>
    </div>
    <Map/>
  </section>
}