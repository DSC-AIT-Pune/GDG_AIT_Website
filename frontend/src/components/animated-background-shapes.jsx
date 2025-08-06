"use client"
import { useEffect } from "react"
import gsap from "gsap"

export default function AnimatedBackgroundShapes() {
  useEffect(() => {
    // Initial state for shapes (hidden)
    gsap.set(".bg-shape", { opacity: 0, scale: 0 })

    // Animate shapes in after a delay that aligns with the loader's AIT PUNE text appearing
    // AIT PUNE starts around 1.1s into the loader animation.
    // We'll start these background shapes at 1.2s to overlap nicely.
    gsap.to(".bg-shape", {
      opacity: 0.2, // Make them subtle
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2, // Stagger their appearance
      delay: 1.2, // This crucial delay makes them appear while the loader is still active
    })

    // Continuous animations for shapes
    gsap.to(".bg-shape-1", {
      y: "random(-50, 50)",
      x: "random(-50, 50)",
      rotate: "random(0, 360)",
      repeat: -1,
      yoyo: true,
      duration: "random(8, 15)",
      ease: "sine.inOut",
    })
    gsap.to(".bg-shape-2", {
      y: "random(-40, 40)",
      x: "random(-40, 40)",
      rotate: "random(0, 360)",
      repeat: -1,
      yoyo: true,
      duration: "random(10, 18)",
      ease: "sine.inOut",
    })
    gsap.to(".bg-shape-3", {
      y: "random(-60, 60)",
      x: "random(-60, 60)",
      rotate: "random(0, 360)",
      repeat: -1,
      yoyo: true,
      duration: "random(12, 20)",
      ease: "sine.inOut",
    })
    gsap.to(".bg-shape-4", {
      y: "random(-30, 30)",
      x: "random(-30, 30)",
      rotate: "random(0, 360)",
      repeat: -1,
      yoyo: true,
      duration: "random(9, 16)",
      ease: "sine.inOut",
    })
    gsap.to(".bg-shape-5", {
      y: "random(-70, 70)",
      x: "random(-70, 70)",
      rotate: "random(0, 360)",
      repeat: -1,
      yoyo: true,
      duration: "random(11, 19)",
      ease: "sine.inOut",
    })
  }, [])

  return (
    // These shapes are fixed and will be visible behind the loader and then the content
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Red Circle */}
      <div
        className="absolute rounded-full bg-shape bg-shape-1"
        style={{
          top: "15%",
          left: "10%",
          width: "100px",
          height: "100px",
          backgroundColor: "#EA4335",
        }}
      />
      {/* Blue Square */}
      <div
        className="absolute bg-shape bg-shape-2"
        style={{
          bottom: "20%",
          right: "10%",
          width: "120px",
          height: "120px",
          backgroundColor: "#4285F4",
        }}
      />
      {/* Green Triangle */}
      <div
        className="absolute bg-shape bg-shape-3"
        style={{
          top: "30%",
          right: "5%",
          width: 0,
          height: 0,
          borderLeft: "70px solid transparent",
          borderRight: "70px solid transparent",
          borderBottom: "140px solid #34A853",
        }}
      />
      {/* Yellow Rectangle */}
      <div
        className="absolute rounded-lg bg-shape bg-shape-4"
        style={{
          bottom: "5%",
          left: "25%",
          width: "150px",
          height: "80px",
          backgroundColor: "#FBBC05",
        }}
      />
      {/* Another Blue Circle */}
      <div
        className="absolute rounded-full bg-shape bg-shape-5"
        style={{
          top: "50%",
          left: "5%",
          width: "80px",
          height: "80px",
          backgroundColor: "#4285F4",
        }}
      />
    </div>
  )
}
