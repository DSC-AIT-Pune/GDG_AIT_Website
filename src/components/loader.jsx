"use client"
import React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import AnimatedBackgroundShapes from "./animated-background-shapes"

function Loader({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set initial state for all animated elements to be hidden
    gsap.set([".gdg-g-red", ".gdg-d-blue", ".gdg-g-green", ".ait-pune-text"], { opacity: 0, y: 50 })
    gsap.set([".loader-shape"], { opacity: 0, scale: 0, rotate: 0 }) // Target all loader shapes

    const tl = gsap.timeline({
      onComplete: () => {
        // After the main animation sequence, fade out the entire loader container
        // This delay ensures the total loader display time is around 4.5-5 seconds
        gsap.to(".loader-container", {
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
          delay: 2.3, // Adjust this delay to fine-tune total loader duration
          onComplete: () => setIsLoading(false), // Hide the loader component
        })
      },
    })

    // Animate GDG letters
    tl.fromTo(
      ".gdg-g-red",
      { opacity: 0, y: 50, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
    )
    tl.fromTo(
      ".gdg-d-blue",
      { opacity: 0, y: 50, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "<0.1", // Starts 0.1 seconds after the previous animation begins
    )
    tl.fromTo(
      ".gdg-g-green",
      { opacity: 0, y: 50, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "<0.1",
    )

    // Animate AIT PUNE text
    tl.fromTo(
      ".ait-pune-text",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "<0.3", // Starts 0.3 seconds after the previous animation begins
    )

    // Animate abstract shapes, overlapping with text animation
    tl.to(
      ".loader-shape-red",
      { opacity: 1, scale: 1, rotate: 45, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "-=0.5",
    )
    tl.to(
      ".loader-shape-blue",
      { opacity: 1, scale: 1, rotate: -30, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "<0.1",
    )
    tl.to(
      ".loader-shape-green",
      { opacity: 1, scale: 1, rotate: 60, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "<0.1",
    )
    tl.to(
      ".loader-shape-yellow",
      { opacity: 1, scale: 1, rotate: -15, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "<0.1",
    )

    // Add subtle continuous animations to loader shapes while the loader is visible
    gsap.to(".loader-shape-red", { y: -10, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" })
    gsap.to(".loader-shape-blue", { x: 10, repeat: -1, yoyo: true, duration: 2.5, ease: "sine.inOut" })
    gsap.to(".loader-shape-green", { rotate: 5, repeat: -1, yoyo: true, duration: 3, ease: "sine.inOut" })
    gsap.to(".loader-shape-yellow", { y: 15, repeat: -1, yoyo: true, duration: 2.2, ease: "sine.inOut" })
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#EAE7D6] loader-container font-seconday">
        <AnimatedBackgroundShapes /> {/* Added the background shapes component here */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex text-6xl md:text-8xl font-bold leading-none tracking-tight">
            <motion.span className="gdg-g-red" style={{ color: "#EA4335" }}>
              G
            </motion.span>
            <motion.span className="gdg-d-blue" style={{ color: "#4285F4" }}>
              D
            </motion.span>
            <motion.span className="gdg-g-green" style={{ color: "#34A853" }}>
              G
            </motion.span>
          </div>
          <motion.div className="text-6xl md:text-8xl font-bold leading-none tracking-tight text-[#202124] ait-pune-text">
            AIT PUNE
          </motion.div>
          {/* Abstract shapes for extra animation */}
    
        </div>
      </div>
    )
  }
  return <>{children}</>
}

export default Loader