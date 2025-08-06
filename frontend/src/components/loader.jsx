// src/components/loader.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import AnimatedBackgroundShapes from "./animated-background-shapes";
import { useLoaderContext } from "./LoaderContext";

function Loader({ children }) {
  const { hasLoadedOnce, setHasLoadedOnce } = useLoaderContext();
  const [isLoading, setIsLoading] = useState(!hasLoadedOnce);

  useEffect(() => {
    if (hasLoadedOnce) return;

    gsap.set([".gdg-g-red", ".gdg-d-blue", ".gdg-g-green", ".ait-pune-text"], { opacity: 0, y: 50 });
    gsap.set([".loader-shape"], { opacity: 0, scale: 0, rotate: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loader-container", {
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
          delay: 2.3,
          onComplete: () => {
            setIsLoading(false);
            setHasLoadedOnce(true);
          },
        });
      },
    });

    tl.fromTo(".gdg-g-red", { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" })
      .fromTo(".gdg-d-blue", { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "<0.1")
      .fromTo(".gdg-g-green", { opacity: 0, y: 50, scale: 0.5 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "<0.1")
      .fromTo(".ait-pune-text", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "<0.3");

    tl.to(".loader-shape-red", { opacity: 1, scale: 1, rotate: 45, duration: 0.8, ease: "elastic.out(1, 0.5)" }, "-=0.5")
      .to(".loader-shape-blue", { opacity: 1, scale: 1, rotate: -30, duration: 0.8, ease: "elastic.out(1, 0.5)" }, "<0.1")
      .to(".loader-shape-green", { opacity: 1, scale: 1, rotate: 60, duration: 0.8, ease: "elastic.out(1, 0.5)" }, "<0.1")
      .to(".loader-shape-yellow", { opacity: 1, scale: 1, rotate: -15, duration: 0.8, ease: "elastic.out(1, 0.5)" }, "<0.1");

    gsap.to(".loader-shape-red", { y: -10, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });
    gsap.to(".loader-shape-blue", { x: 10, repeat: -1, yoyo: true, duration: 2.5, ease: "sine.inOut" });
    gsap.to(".loader-shape-green", { rotate: 5, repeat: -1, yoyo: true, duration: 3, ease: "sine.inOut" });
    gsap.to(".loader-shape-yellow", { y: 15, repeat: -1, yoyo: true, duration: 2.2, ease: "sine.inOut" });

  }, [hasLoadedOnce, setHasLoadedOnce]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#EAE7D6] loader-container font-seconday">
        <AnimatedBackgroundShapes />
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex text-6xl md:text-8xl font-bold leading-none tracking-tight">
            <motion.span className="gdg-g-red" style={{ color: "#EA4335" }}>G</motion.span>
            <motion.span className="gdg-d-blue" style={{ color: "#4285F4" }}>D</motion.span>
            <motion.span className="gdg-g-green" style={{ color: "#34A853" }}>G</motion.span>
          </div>
          <motion.div className="text-6xl md:text-8xl font-bold leading-none tracking-tight text-[#202124] ait-pune-text">
            AIT PUNE
          </motion.div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default Loader;
