import dynamic from "next/dynamic";
import Link from 'next/link'
import Image from "next/image";
import Photos from "@/components/Photos";


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
import bigLittleLiesWide from '@/images/services/big-little-lies.jpg'
import ladyCar from '@/images/services/lady-car.jpg'
import bodyPaint from '@/images/services/body-face-paint.jpg'
import ClientPolaroidGallery from '@/components/Gallery/ClientPolaroidGallery'
import emmy from '@/images/logos/emmy-statuette-gold.svg'
import imdb from '@/images/logos/IMDB-logo.svg'
import { services } from '@/data/services'
import ClientMasonryGallery from "@/components/Gallery/ClientMasonryGallery";
import { SideTabs } from "@/components/SideTabs";


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


export default async function Home() {

  return (
    <>
      <SideTabs />
      <Container className="mt-9 hidden md:block">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            MAKE UP & HAIR DESIGNER
          </h1>
          <div className="flex items-start gap-2 max-w-xl">
            <Image src={emmy} alt="Award" className="inline h-14 w-14 mr-2 drop-shadow-lg" />
            <h2 className="mt-6 text-xl text-zinc-700 font-bold dark:text-zinc-200">
              Nominated for 2 Primetime Emmy Awards
            </h2>
          </div>
          {/* <div className="mt-6 flex gap-6">
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />

            
          </div> */}
        </div>
      </Container>
      <Photos
        images={[image1, image2, image3, image4, image5]}
       
      />
     
      <Container className="mt-24 md:mt-28">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Services
          </h2>
          <h3 className="text-xl tracking-tight text-zinc-800 dark:text-zinc-100">On location Makeup Application and Hair Styling Services available globally</h3>
        <CardLeft image={services[0].image} alt={services[0].alt} title={services[0].title} description={services[0].description} link={services[0].link} />
        <CardRight image={services[1].image} alt={services[1].alt} title={services[1].title} description={services[1].description} link={services[1].link} />
        <CardLeft image={services[2].image} alt={services[2].alt} title={services[2].title} description={services[2].description} link={services[2].link} />

        
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Portfolio Highlights
          </h2>
        <ClientMasonryGallery images={imagesPortHighlight}/>
      </Container>
      <Container className="mt-24 md:mt-28">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Behind the Scene
          </h2>
        <ClientPolaroidGallery images={imagesBehindScenes}/>
      </Container>
    </>
  )
}
