// components/PageTemplate.tsx
import React from 'react'
import SEO from './SEO'
import Hero from './Hero'
import CTA from './CTA'
import ClientMasonryGallery from './Gallery/ClientMasonryGallery'

type PageTemplateProps = {
  seo?: {
    title?: string
    description?: string
    image?: string
    url?: string
  }
  hero?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    ctaLabel?: string
    ctaHref?: string
    image?: string
  }
  showGallery?: boolean
  galleryProps?: any
  children?: React.ReactNode
}

export default function PageTemplate({
  seo,
  hero,
  showGallery = false,
  galleryProps,
  children,
}: PageTemplateProps) {
  return (
    <>
      <SEO {...seo} />
      {hero && <Hero {...hero} />}
      <div className="container mx-auto px-6 lg:px-8 py-8">
        {/* main content area */}
        <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>
        
      </div>

      {/* Masonry gallery placeholder area (you said you already have component) */}
      {showGallery && (
        <section className="container mx-auto px-6 lg:px-8 pb-10">
          <h2 className="sr-only">Gallery</h2>
          <div className="mt-6">
            {/* Replace the import path below with your actual MasonryGallery component path */}
            <ClientMasonryGallery images={galleryProps?.items} />
            
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
