// app/portfolio/page.tsx
import PageTemplate from '@/components/PageTemplate'
import ClientMasonryGallery from '@/components/Gallery/ClientMasonryGallery'
import React from 'react'
import { imagesBodyFace } from '@/data/galleryImages'
import aboutMeHero from '/public/images/pagesHero/AboutMe.jpg'

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-[#D4AF37] dark:text-zinc-200 dark:hover:text-[#F4D03F]"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-[#D4AF37] dark:group-hover:fill-[#F4D03F]" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}




export default function PortfolioPage() {
  return (
    //FIX URL<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    <PageTemplate
      seo={{
        title: 'Portfolio',
        description: 'Selected work — photography, film, art',
        image: '/images/og-portfolio.jpg',
        url: 'https://mydomain.com/portfolio',
      }}
      hero={{
        eyebrow: 'Claudia Humburg',
        title: <>Aaaaa</>,
        subtitle:
          'Aaaa',
        ctaLabel: 'Book a session',
        ctaHref: '/contact',
        image: aboutMeHero.src
      }}
      // Todo: edit props and style or remove gallery <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      showGallery={false}
      galleryProps={{ items: imagesBodyFace }}
    >
      <section className="py-12 text-center">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
         <div className="lg:pl-20">
           <div className="max-w-xs px-2.5 lg:max-w-none">
             <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I &apos;m Claudia Humburg. I live in Baltimore, where I ...
          </h1>
          <div className="mt-6 text-left space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Claudia Humburg began her journey in the beauty industry in Germany. Growing up in her mom&apos;s hair and make up salon, she developed an early passion for beauty. Claudia was drawn to color, texture and shape and as an aspiring artist, she began training at the Art Institute of Cologne, known there as, “Die Maske” to earn a degree in Art. She later attended numerous workshops and seminars given at the International Make-up School, by Madame Vare in Paris, at the Typolo in Italy, given by Tina Farina and at the Claudia HumburgKryolan GmbH Germany and by Joe Blasco in the USA. Her training has been very international in scope which later lead to her success in the entertainment industry.
            </p>
            <p>
              As a professional Hair Stylist, Claudia received her journeyman certificate at the international school of hair, “Inter Studio Harder”, in Duisburg Germany. It was not long before Claudia grew into a very sought after make-up and hair artist within the German Entertainment industry where she gained considerable experience with numerous movies and commercial projects.
              
              
            </p>
            <p>
              In 1998 the German movie, “Marlene Dietrich”, brought Claudia to Los Angeles, and she soon decided to transfer her professional services to Southern California. She started her company, Make-Over Consulting and Services, in 2000.
            </p>
            <p>
              In 2003, Claudia signed with the famous Fred Segal Beauty Agency of Beverly Hills, CA. Represented by the agency, Claudia worked on many projects that included photo shoots, fashion shows and commercials for clients like US Bank, Mattel, Target, Blackberry, Disney, Hershey`&apos;`s, Citibank and Toyota, to just name a few. Her work was featured in many magazines that include among others, UK Vogue, In Style, Lucky, Glamour, People, Vanity Fair and Vogue.
            </p>
            <p>
              In 2005, Claudia began work with 2 companies, Smashbox Cosmetic Company and Photogenics Agency. Today Claudia is a highly recognized celebrity Make-up and Hair Artist. Her clients include well-known personalities such as, Antonio Villaragosa, Cate Blanchett, David Hyde Pierce, David Morse, Jordana Brewster, Keri Russel, Kyra Sedgwick, Liza Minnelli, Mira Sorvino, Uma Thurman and Milla Jovoich.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            
            <SocialLink href="https://www.instagram.com/claudiahumburg/?hl=en" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
          
            <SocialLink
              href="mailto:claudiah1@mac.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              claudiah1@mac.com
            </SocialLink>
          </ul>
        </div>
      </div>
      </section>


      {/* If you want to render the actual MasonryGallery directly inside content */}
      {/* <div className="mt-8">
        <ClientMasonryGallery images={imagesPortHighlight} />
      </div> */}
    </PageTemplate>
  )
}


// import { type Metadata } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'
// import clsx from 'clsx'

// import { Container } from '@/components/Container'
// import {
//   GitHubIcon,
//   InstagramIcon,
//   LinkedInIcon,
//   XIcon,
// } from '@/components/SocialIcons'
// import portraitImage from '@/images/portrait.jpg'

// function SocialLink({
//   className,
//   href,
//   children,
//   icon: Icon,
// }: {
//   className?: string
//   href: string
//   icon: React.ComponentType<{ className?: string }>
//   children: React.ReactNode
// }) {
//   return (
//     <li className={clsx(className, 'flex')}>
//       <Link
//         href={href}
//         className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
//       >
//         <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
//         <span className="ml-4">{children}</span>
//       </Link>
//     </li>
//   )
// }

// function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//       <path
//         fillRule="evenodd"
//         d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
//       />
//     </svg>
//   )
// }

// export const metadata: Metadata = {
//   title: 'About',
//   description:
//     "I''m Claudia Humburg. I live in Baltimore, where I...",
// }

// export default function About() {
//   return (
//     <Container className="mt-16 sm:mt-32">
//       <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
//         <div className="lg:pl-20">
//           <div className="max-w-xs px-2.5 lg:max-w-none">
//             <Image
//               src={portraitImage}
//               alt=""
//               sizes="(min-width: 1024px) 32rem, 20rem"
//               className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
//             />
//           </div>
//         </div>
//         <div className="lg:order-first lg:row-span-2">
//           <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
//             I &apos;m Claudia Humburg. I live in Baltimore, where I ...
//           </h1>
//           <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
//             <p>
//               Claudia Humburg began her journey in the beauty industry in Germany. Growing up in her mom`&apos;`s hair and make up salon, she developed an early passion for beauty. Claudia was drawn to color, texture and shape and as an aspiring artist, she began training at the Art Institute of Cologne, known there as, “Die Maske” to earn a degree in Art. She later attended numerous workshops and seminars given at the International Make-up School, by Madame Vare in Paris, at the Typolo in Italy, given by Tina Farina and at the Claudia HumburgKryolan GmbH Germany and by Joe Blasco in the USA. Her training has been very international in scope which later lead to her success in the entertainment industry.
//             </p>
//             <p>
//               As a professional Hair Stylist, Claudia received her journeyman certificate at the international school of hair, “Inter Studio Harder”, in Duisburg Germany. It was not long before Claudia grew into a very sought after make-up and hair artist within the German Entertainment industry where she gained considerable experience with numerous movies and commercial projects.
              
              
//             </p>
//             <p>
//               In 1998 the German movie, “Marlene Dietrich”, brought Claudia to Los Angeles, and she soon decided to transfer her professional services to Southern California. She started her company, Make-Over Consulting and Services, in 2000.
//             </p>
//             <p>
//               In 2003, Claudia signed with the famous Fred Segal Beauty Agency of Beverly Hills, CA. Represented by the agency, Claudia worked on many projects that included photo shoots, fashion shows and commercials for clients like US Bank, Mattel, Target, Blackberry, Disney, Hershey`&apos;`s, Citibank and Toyota, to just name a few. Her work was featured in many magazines that include among others, UK Vogue, In Style, Lucky, Glamour, People, Vanity Fair and Vogue.
//             </p>
//             <p>
//               In 2005, Claudia began work with 2 companies, Smashbox Cosmetic Company and Photogenics Agency. Today Claudia is a highly recognized celebrity Make-up and Hair Artist. Her clients include well-known personalities such as, Antonio Villaragosa, Cate Blanchett, David Hyde Pierce, David Morse, Jordana Brewster, Keri Russel, Kyra Sedgwick, Liza Minnelli, Mira Sorvino, Uma Thurman and Milla Jovoich.
//             </p>
//           </div>
//         </div>
//         <div className="lg:pl-20">
//           <ul role="list">
            
//             <SocialLink href="https://www.instagram.com/claudiahumburg/?hl=en" icon={InstagramIcon} className="mt-4">
//               Follow on Instagram
//             </SocialLink>
          
//             <SocialLink
//               href="mailto:claudiah1@mac.com"
//               icon={MailIcon}
//               className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
//             >
//               claudiah1@mac.com
//             </SocialLink>
//           </ul>
//         </div>
//       </div>
//     </Container>
//   )
// }
