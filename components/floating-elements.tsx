"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-5 h-5 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Animated lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-shimmer" />
      <div
        className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-shimmer"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
