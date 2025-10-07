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
    <div className="fixed top-1/4 left-0 flex flex-col space-y-3 z-50 pointer-events-auto">
      {/* IMDb Tab */}
      <a
        href="https://www.imdb.com/name/nm3732309/"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex items-center px-1 py-0 justify-center rounded-r-full shadow-lg transform transition-transform
          hover:translate-x-[4px]
          ${isDark ? 'bg-yellow-400 text-black' : 'bg-yellow-500 text-black'}
        `}
        aria-label="View IMDb profile"
      >
        <Image src={imdb} alt="IMDb" className="h-6 w-6 md:h-12 md:w-16" />
        {/* <span className="ml-2 font-semibold hidden md:inline">IMDb</span> */}
      </a>

      {/* Official Site Tab */}
      <a
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
      </a>
    </div>
  )
}
