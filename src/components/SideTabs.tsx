'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import imdb from '@/images/logos/IMDB-logo.svg'
import { useTheme } from 'next-themes'

export function SideTabs() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Avoid hydration mismatch for theme

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="hidden fixed top-1/4 left-0 md:flex flex-col space-y-3 z-50 pointer-events-auto">
      {/* IMDb Tab */}
      <a
        href="https://www.imdb.com/name/nm0401726/?ref_=ext_shr_lnk"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="View IMDb profile"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-r-full opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
        <Image
          src={imdb}
          alt="IMDb"
          className="h-6 w-6 md:h-12 md:w-16 transform transition-all group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] rounded-r-full relative"
        />
      </a>

      {/* Official Site Tab */}
      {/* <a
        href="https://artbyclaudiahumburg.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex items-center px-2 py-1 rounded-r-full shadow-lg transform transition-transform
          hover:translate-x-[4px]
          ${isDark ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'}
        `}
        aria-label="Official Website"
      >
        <span className="mr-2 font-semibold hidden md:inline">Art by Claudia</span>
      </a> */}
    </div>
  )
}
