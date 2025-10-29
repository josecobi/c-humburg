// components/SEO.tsx
import Head from 'next/head'

type Props = {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function SEO({ title, description, image, url }: Props) {
  const siteTitle = title ? `${title} | Claudia Humburg` : 'Claudia Humburg'
  const desc = description ?? 'Portfolio and work by Claudia Humburg'
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={desc} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
    </Head>
  )
}
