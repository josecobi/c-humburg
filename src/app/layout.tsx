// app/layout.tsx
import '@/styles/tailwind.css'
import { Providers } from '@/app/providers'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'

export const metadata = {
  title: 'Artist Portfolio',
  description: 'Portfolio site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col">
            {/* Header is client; it handles theme toggle and scroll behavior */}
            <Header />

            {/* Main page area */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer (server or client depending on your implementation) */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}


// import { type Metadata } from 'next'

// import { Providers } from '@/app/providers'
// import { Layout } from '@/components/Layout'

// import '@/styles/tailwind.css'

// export const metadata: Metadata = {
//   title: {
//     template: '%s - Claudia Humburg',
//     default:
//       'Claudia Humburg - Make Up Artist, Head of..., founder...',
//   },
//   description:
//     "I'm Claudia, a Make Up Artist and entrepreneur based in Baltimore. I'm the ...",
//   alternates: {
//     types: {
//       'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
//     },
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="h-full antialiased" suppressHydrationWarning>
//       <body className="flex h-full bg-zinc-50 dark:bg-black">
//         <Providers>
//           <div className="flex w-full">
//             <Layout>{children}</Layout>
//           </div>
//         </Providers>
//       </body>
//     </html>
//   )
// }
