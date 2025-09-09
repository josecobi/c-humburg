import bigLittleLiesWide from '@/images/services/big-little-lies.jpg'
import ladyCar from '@/images/services/lady-car.jpg'
import bodyPaint from '@/images/services/body-face-paint.jpg'

export const services = [
  {
    title: 'Movies & Tv Shows',
    description:
      (
      <>
        <p className="mt-1 text-gray-500 dark:text-zinc-200">
          Character Makeup for individuals and groups for movies, TV shows and commercials. Including
          period looks, old age, beards & bald caps, onset SFX.
        </p>
        {/* <p className="mt-1 text-gray-500 dark:text-zinc-200">
          Experienced in creating diverse looks that enhance character portrayal and meet production needs.
        </p> */}
        <p className="mt-1 text-gray-500 dark:text-zinc-200">
          <strong>Nominated for 2 Primetime Emmy Awards </strong> for my work on <span className="text-fuchsia-300 font-semibold"><em>Big Little Lies</em>.</span>
          <br />
          Affiliation: <span className="font-semibold">IATSE, local 706</span>.
        </p>
        
      </>
    ),
    image: bigLittleLiesWide,
    alt: 'Big Little Lies poster movie - Landscape',
    link: '/services/movies-and-tv-shows',
  },
  {
    title: 'Editorial, Ads & Private Events',
    description: 
    (
      <> 
        <p className="mt-1 text-gray-500 dark:text-zinc-200">
          Beauty makeup, natural, no-makeup look glow, fashion, red carpet, and Weddings. Skilled in creating high-impact looks that align with brand aesthetics and captivate audiences.
        </p>
      </>
    ),
    image: ladyCar,
    alt: 'Lady in the car with makeup and hair done - Landscape',
    link: '/services/editorial-and-ads',
  },
  {
    title: 'Body & Face Paint',
    description:
    (
      <> 
        <p className="mt-1 text-gray-500 dark:text-zinc-200">
      Unique, creative designs for special events, runway, fashion and art projects. Specialized body and face painting services for events, performances, and artistic projects. Proficient in transforming visions into vibrant, wearable art that captivates and inspires.
        </p>
      </>
    ),
    image: bodyPaint,
    alt: 'Body and face paint art - Portrait',
    link: '/services/body-and-face-paint',
  },
]