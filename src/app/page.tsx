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
      <Container className="mt-6 md:mt-9 hidden md:block">
        <div className="max-w-4xl">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-zinc-900 dark:text-zinc-50 leading-tight mb-3">
            MAKE UP & HAIR DESIGNER
          </h1>
          <div className="flex items-start gap-3 max-w-3xl bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-4 rounded-lg border-l-4 border-[#D4AF37]">
            <Image
              src={emmy}
              alt="Emmy Award"
              className="inline h-14 w-14 sm:h-16 sm:w-16 mr-2 drop-shadow-2xl animate-shimmer flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl lg:text-2xl text-zinc-800 font-bold dark:text-zinc-100 font-playfair leading-tight whitespace-nowrap">
                Nominated for <span className="text-[#D4AF37] text-gold-glow">2 Primetime Emmy Awards</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 italic">
                Excellence in Television Makeup & Hairstyling
              </p>
            </div>
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
        <div className="mb-12">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-zinc-900 dark:text-zinc-100 mb-3">
            Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-transparent mb-4" />
          <h3 className="font-playfair text-xl sm:text-2xl italic text-zinc-700 dark:text-zinc-300 leading-relaxed">
            On location Makeup Application and Hair Styling Services available globally
          </h3>
        </div>
        <CardLeft image={services[0].image} alt={services[0].alt} title={services[0].title} description={services[0].description} link={services[0].link} />
        <CardRight image={services[1].image} alt={services[1].alt} title={services[1].title} description={services[1].description} link={services[1].link} />
        <CardLeft image={services[2].image} alt={services[2].alt} title={services[2].title} description={services[2].description} link={services[2].link} />
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mb-12 text-center">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
            Portfolio Highlights
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>
        <ClientMasonryGallery images={imagesPortHighlight}/>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mb-12 text-center">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
            Behind the Scene
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>
        <ClientPolaroidGallery images={imagesBehindScenes}/>
      </Container>
    </>
  )
}
