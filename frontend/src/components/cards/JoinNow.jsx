"use client"
import { useRef } from "react"
import gsap from "gsap"
import { ChevronRight } from "lucide-react" // Import ChevronRight icon

function EventBtn({ label }) {
  const textRef = useRef(null)
  const arrowCircleRef = useRef(null) // Ref for the yellow circle container
  const buttonRef = useRef(null) // Ref for the main button container

  const handleMouseEnter = () => {
    const tl = gsap.timeline()

    // Option 1: Fixed distance (simpler approach)
    // const arrowTargetX = -40 // Move 40px to the left

    // Option 2: Percentage-based distance (recommended)
    const buttonWidth = buttonRef.current.offsetWidth
    const arrowTargetX = -(buttonWidth * 0.57) // Move 40% of button width to the left

    // Option 3: Distance with padding consideration
    // const buttonWidth = buttonRef.current.offsetWidth
    // const arrowWidth = arrowCircleRef.current.offsetWidth
    // const padding = 16 // Account for button padding
    // const arrowTargetX = -(buttonWidth - arrowWidth - padding * 2)

    // Animate text forward (to the right) - reduced distance
    tl.to(textRef.current, { x: 15, duration: 0.5, ease: "power2.out" }, 0)
    // Animate arrow circle to the left with adjusted distance
    tl.to(arrowCircleRef.current, { x: arrowTargetX, duration: 0.5, ease: "power2.out" }, 0)
  }

  const handleMouseLeave = () => {
    const tl = gsap.timeline()
    // Reset text position
    tl.to(textRef.current, { x: 0, duration: 0.5, ease: "power2.out" }, 0)
    // Reset arrow circle position
    tl.to(arrowCircleRef.current, { x: 0, duration: 0.5, ease: "power2.out" }, 0)
  }

  return (
    <div className="flex-shrink-0 ml-4">
      <button
        ref={buttonRef}
        className="flex items-center gap-2 bg-white border-2 border-black rounded-full px-7 py-2 hover:bg-gray-50 transition-colors group overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span ref={textRef} className="text-black text-nowrap font-medium text-lg md:text-xl">
          {label}
        </span>
        <div
          ref={arrowCircleRef}
          className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors flex-shrink-0"
        >
          <ChevronRight className="w-4 h-4 text-black" /> {/* Lucide icon */}
        </div>
      </button>
    </div>
  )
}

export default EventBtn