import Image from "next/image";
import Link from "next/link";

const data = [
  {
    tag: "Read More",
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur dolorem ea, earum eligendi illo incidunt minus mollitia quibusdam sed sit! Aliquid atque, dolor dolorem dolorum earum et ex, facilis in inventore molestias necessitatibus nihil nostrum officiis perspiciatis placeat possimus quasi quibusdam quidem sapiente sint sunt temporibus veritatis vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur dolorem ea, earum eligendi illo incidunt minus mollitia quibusdam sed sit! Aliquid atque, dolor dolorem dolorum earum et ex, facilis in inventore molestias necessitatibus nihil nostrum officiis perspiciatis placeat possimus quasi quibusdam quidem sapiente sint sunt temporibus veritatis vitae.',
    image: '/blog.png',
    link: '/',
    width: 'full'
  },
  {
    tag: "Read More",
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur dolorem ea, earum eligendi illo incidunt minus mollitia quibusdam sed sit! Aliquid atque, dolor dolorem dolorum earum et ex, facilis in inventore molestias necessitatibus nihil nostrum officiis perspiciatis placeat possimus quasi quibusdam quidem sapiente sint sunt temporibus veritatis vitae.',
    image: '/blog.png',
    link: '/',
    width: 'half'
  },
  {
    tag: "Read More",
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur dolorem ea, earum eligendi illo incidunt minus mollitia quibusdam sed sit! Aliquid atque, dolor dolorem dolorum earum et ex, facilis in inventore molestias necessitatibus nihil nostrum officiis perspiciatis placeat possimus quasi quibusdam quidem sapiente sint sunt temporibus veritatis vitae.',
    image: '/blog.png',
    link: '/',
    width: 'half'
  },
]

export default function About() {

  return <section className='w-full max-w-fluid mx-auto py-24 px-6 space-y-24'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12'>
      {
        data.map((item, index) => (
          <article key={index}
                   className={`p-4 flex flex-col gap-4 w-full relative bg-gradient-to-br from-[#568BFA] via-[#0D0D0D] to-[#568BFA] z-10 rounded-xl before:bg-gradient-to-br before:from-[#231349] before:to-[#150F22] before:rounded-xl before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:-z-10 aspect-video ${item.width === "full" ? "lg:col-span-2" : "col-span-1"}`}>
            <div className={`flex-1 basis-64 w-full overflow-hidden rounded-xl`}>
              <Image src={item.image} alt={item.image} height={100} width={100} unoptimized
                     className='object-cover h-full w-full'/>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-gray'>{item.content}</p>
            </div>
            <Link
              href={item.link}
              className="rounded-tl-lg rounded-br-lg absolute top-4 left-4 py-2 px-4 bg-[#231349] font-bold text-xl">{item.tag}</Link>
          </article>
        ))
      }
    </div>
    <div className="rounded-lg space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-4xl sm:text-h4 md:text-h3 lg:text-h2 font-grotesk font-semibold capitalize">
          Meet with the team
        </h2>
        <p className='text-md md:text-lg text-gray'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
      </div>
   
    </div>
  </section>
}
