'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setIsDark(dark)
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    document.documentElement.setAttribute('data-theme', newDark ? 'dark' : 'light')
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  return (
    <button
      className="theme-toggle"
      id="themeToggle"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      <i className="fas fa-moon"></i>
      <i className="fas fa-sun"></i>
    </button>
  )
}
