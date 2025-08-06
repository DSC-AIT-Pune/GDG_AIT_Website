"use client"
import { useRef } from "react" // Import useRef
import gsap from "gsap" // Import gsap

function Primarybtn({ label }) {
  const textRef = useRef(null)
  const arrowRef = useRef(null)
  const buttonRef = useRef(null) // Ref for the main button container

  const handleMouseEnter = () => {
    const tl = gsap.timeline()

    // Calculate the distance for the arrow to move to the left edge of the button
    // This ensures it moves to the "exact opposite side" dynamically
    const buttonWidth = buttonRef.current.offsetWidth
    const arrowWidth = arrowRef.current.offsetWidth
    // The arrow is initially at right:0. To move its left edge to the button's left edge,
    // it needs to translate by -(buttonWidth - arrowWidth)
    const arrowTargetX = -(buttonWidth - arrowWidth)

    // Animate text forward (to the right)
    tl.to(textRef.current, { x: 20, duration: 0.5, ease: "power2.out" }, 0)
    // Animate arrow to the left
    tl.to(arrowRef.current, { x: arrowTargetX, duration: 0.5, ease: "power2.out" }, 0)
  }

  const handleMouseLeave = () => {
    const tl = gsap.timeline()
    // Reset text position
    tl.to(textRef.current, { x: 0, duration: 0.5, ease: "power2.out" }, 0)
    // Reset arrow position
    tl.to(arrowRef.current, { x: 0, duration: 0.5, ease: "power2.out" }, 0)
  }

  return (
    <div
      ref={buttonRef} // Attach ref to the main button div
      className="flex justify-center items-center rounded-full w-fit min-w-[200px] md:min-w-[250px] relative h-fit bg-white border-[0.0513rem] border-black border-solid overflow-hidden" // Added min-width classes
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mr-4 ml-1 h-auto flex justify-start my-1.5 px-8 md:px-10 items-center"> {/* Increased horizontal padding */}
        <p
          ref={textRef} // Attach ref to the text
          className="text-[0.8rem] py-1.5 pr-6 md:pr-8 text-center font-bold md:text-[1.2rem] translate-y-[0.5px]" // Increased right padding
        >
          {label}
        </p>
      </div>
      <div
        ref={arrowRef} // Attach ref to the arrow container
        className="absolute flex border-l-[0.0513rem] border-black border-solid justify-center items-center right-0 top-1/2 transform -translate-y-[50%] rounded-full h-full aspect-square bg-[#FBFF5A] z-5"
      >
        <svg
          className="w-5 h-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
        >
          <path
            d="M6.42563 3.68537C6.5634 3.5476 6.5634 3.32423 6.42563 3.18646L4.18056 0.941388C4.04279 0.80362 3.81942 0.80362 3.68165 0.941388C3.54388 1.07916 3.54388 1.30252 3.68165 1.44029L5.67727 3.43591L3.68165 5.43153C3.54388 5.5693 3.54388 5.79267 3.68165 5.93044C3.81942 6.06821 4.04279 6.06821 4.18056 5.93044L6.42563 3.68537ZM0.877441 3.43591V3.78869H4.2878V3.43591V3.08313H0.877441V3.43591ZM4.2878 3.43591V3.78869H6.17618V3.43591V3.08313H4.2878V3.43591Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  )
}

export default Primarybtn