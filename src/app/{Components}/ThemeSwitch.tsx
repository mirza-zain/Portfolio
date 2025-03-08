'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

interface ThemeSwitchProps {
  className?: string
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
      className={className}
    />
  )

  if (resolvedTheme === 'dark') {
    return <i className={`ri-sun-fill text-2xl text-gray-800 dark:text-gray-200 ${className}`} onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <i className={`ri-moon-fill text-2xl text-gray-800 dark:text-gray-200 ${className}`} onClick={() => setTheme('dark')} />
  }

  return null
}