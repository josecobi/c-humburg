// app/portfolio/page.tsx
import PageTemplate from '@/components/PageTemplate'
import ClientMasonryGallery from '@/components/Gallery/ClientMasonryGallery'
import React from 'react'
import { imagesBodyFace } from '@/data/galleryImages'
import bodyFaceHero from '/public/images/pagesHero/bodyface.jpg'



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
        eyebrow: 'Portfolio',
        title: <>Selected Works — Face & Body Paint</>,
        subtitle:
          'A selection of recent projects and commissions.',
        ctaLabel: 'Book a session',
        ctaHref: '/contact',
        image: bodyFaceHero.src
      }}
      showGallery={true}
      galleryProps={{ items: imagesBodyFace }}
    >
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Explore My Work
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
          Each project is an expression of transformation through color, texture, and
          emotion. Browse the galleries below to see my most recent creations, and
          feel free to reach out if you&apos;d like to collaborate.
        </p>
      </section>


      {/* If you want to render the actual MasonryGallery directly inside content */}
      {/* <div className="mt-8">
        <ClientMasonryGallery images={imagesPortHighlight} />
      </div> */}
    </PageTemplate>
  )
}
