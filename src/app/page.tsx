import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import CardLeft  from '@/components/CardLeft'
import CardRight  from '@/components/CardRight'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
} from '@/components/SocialIcons'

import { imagesPortHighlight, imagesBehindScenes } from '@/data/galleryImages'

import image5 from '@/images/photos/hunters_Al_Pacino-no-border.jpg'
import image2 from '@/images/photos/hayek_avon.jpg'
import image1 from '@/images/photos/lady-in-the-lake-poster.jpg'
import image3 from '@/images/photos/home_09.jpg'
import image4 from '@/images/photos/home_21-no-border.jpg'
import bigLittleLiesWide from '@/images/photos/posters-landscape/big-little-lies.jpg'
import sharpObjects from '@/images/photos/posters-landscape/sharp-objects.jpg'
import ladyInTheLake from '@/images/photos/posters-landscape/lady-in-the-lake.jpg'
import Gallery from '@/components/Gallery/Gallery'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-2/3 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* <div className="relative aspect-[2/3] w-44 sm:w-72"> */}
              {/* Blurred background */}
              {/* <Image
                src={image}
                alt=""
                fill
                className="absolute inset-0 object-cover blur-lg scale-110"
              /> */}
              {/* Actual image */}
              {/* <Image
                src={image}
                alt=""
                fill
                className="absolute inset-0 object-contain"
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {

  return (
    <>
    
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Make Up & Hair Design
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Claudia, a Make Up and Hair Artist based in Baltimore. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </p>
          {/* <div className="mt-6 flex gap-6">
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div> */}
        </div>
      </Container>
       <Photos />
     
      <Container className="mt-24 md:mt-28">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            MAKE UP + HAIR DESIGN
          </h2>
        <CardLeft image={bigLittleLiesWide} alt="Big Little Lies poster movie - Landscape"/>
        <CardRight image={sharpObjects} alt="Sharp Objects poster movie - Landscape" />
        <CardLeft image={ladyInTheLake} alt="Big Little Lies poster movie - Landscape"/>

        
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Portfolio Highlights
          </h2>
        <Gallery images={imagesPortHighlight}/>
      </Container>
      <Container className="mt-24 md:mt-28">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Behind the Scene
          </h2>
        <Gallery images={imagesBehindScenes}/>
      </Container>
    </>
  )
}
