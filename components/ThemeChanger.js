import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useState, useEffect } from 'react'

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  // needed for rehydration mismatch between server/client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <button
      className="flex items-center w-7 h-7 bg-gray-900 p-2 cursor-pointer rounded hover:bg-gray-800 text-white dark:bg-periwinkle"
      aria-label={`toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <BsSun /> : <BsMoon />}
    </button>
  )
}
