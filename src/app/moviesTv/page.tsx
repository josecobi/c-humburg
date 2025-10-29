// app/portfolio/page.tsx
import PageTemplate from '@/components/PageTemplate'
import ClientMasonryGallery from '@/components/Gallery/ClientMasonryGallery'
import React from 'react'
import { imagesMoviesTv } from '@/data/galleryImages'
import moviesTvHero from '/public/images/pagesHero/moviestv.jpg'


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
        title: <>Movies & TV </>,
        subtitle:
          'A selection of recent projects and commissions.',
        ctaLabel: 'Book a session',
        ctaHref: '/contact',
        image: moviesTvHero.src
      }}
      showGallery={true}
      galleryProps={{ items: imagesMoviesTv }}
    >
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Explore My Work
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
          Each production tells its own visual story — from character design and makeup continuity to
          the creative use of color, light, and texture. Explore the gallery below to see my work across
          film and television, and feel free to get in touch for future collaborations.
        </p>
      </section>


      {/* If you want to render the actual MasonryGallery directly inside content */}
      {/* <div className="mt-8">
        <ClientMasonryGallery images={imagesPortHighlight} />
      </div> */}
    </PageTemplate>
  )
}
