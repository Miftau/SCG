"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

// Component for individual animated circles on the map
const AnimatedCircle = ({ circle, index }) => {
  const controls = useAnimation()

  // Define animation variants for pulse and flash
  const circleVariants = {
    pulse: {
      opacity: [circle.initialOpacity, circle.initialOpacity * 0.5, circle.initialOpacity],
      scale: [1, 1.05, 1],
      transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
    },
    flash: {
      opacity: [1, 0.2, 1],
      scale: [1, 1.2, 1],
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  // Function to start the continuous pulse animation
  const startPulse = () => {
    controls.start("pulse")
  }

  // Handle click to trigger flash animation
  const handleFlash = async () => {
    await controls.stop() // Stop current animation (pulse)
    await controls.start("flash") // Play flash animation
    startPulse() // Restart pulse animation after flash completes
  }

  useEffect(() => {
    // Start the pulse animation after the initial 'whileInView' animation
    // and a slight delay to ensure the fade-in is visible first.
    const timer = setTimeout(
      () => {
        startPulse()
      },
      circle.delay * 1000 + 500,
    ) // Delay pulse slightly after fade-in

    return () => clearTimeout(timer)
  }, [controls, circle.delay]) // Dependencies for useEffect

  return (
    <motion.div
      className={`absolute ${circle.top} ${circle.left} ${circle.size} bg-blue-500 rounded-full cursor-pointer`}
      initial={{ opacity: 0, y: 20 }} // Initial state before entering view
      whileInView={{
        opacity: circle.initialOpacity,
        y: 0,
        transition: { duration: 0.5, delay: circle.delay },
      }} // Animation when component enters view
      variants={circleVariants} // Define the animation variants
      animate={controls} // Use controls to manage imperative animations
      onClick={handleFlash} // Attach click handler
    />
  )
}

const ServerLocation = () => {
  const locations = [
    { name: "أمريكا", flag: "/images/flag/Amreci.png", response: "20ms", color: "#46CC3F" },
    { name: "المانيا", flag: "/images/flag/Germen.png", response: "35ms", color: "#46CC3F" },
    { name: "تركيا", flag: "/images/flag/turkey.png", response: "50ms", color: "#46CC3F" },
    { name: "ايطاليا", flag: "/images/flag/Italy.png", response: "70ms", color: "#46CC3F" },
    { name: "كوريا", flag: "/images/flag/Kore.png", response: "70ms", color: "#46CC3F" },
    { name: "الامارات", flag: "/images/flag/Dubai.png", response: "70ms", color: "#46CC3F" },
    { name: "بيرطانيا", flag: "/images/flag/England.png", response: "70ms", color: "#46CC3F" },
    { name: "السعودية", flag: "/images/flag/Sud.png", response: "70ms", color: "#46CC3F" },
    { name: "السعودية", flag: "/images/flag/Sud.png", response: "70ms", color: "#46CC3F" },
    { name: "فنلند", flag: "/images/flag/Finland.png", response: "70ms", color: "#46CC3F" },
    { name: "السودان", flag: "/images/flag/Suda.png", response: "70ms", color: "#46CC3F" },
  ]

  // Data for the animated circles on the map
  const circleData = [
    { top: "top-[20%]", left: "left-[30%]", size: "w-4 h-4", initialOpacity: 1, delay: 0.1 },
    { top: "top-[45%]", left: "left-[60%]", size: "w-5 h-5", initialOpacity: 0.75, delay: 0.2 },
    { top: "top-[70%]", left: "left-[40%]", size: "w-3 h-3", initialOpacity: 0.5, delay: 0.3 },
    { top: "top-[30%]", left: "left-[75%]", size: "w-6 h-6", initialOpacity: 1, delay: 0.4 },
    { top: "top-[60%]", left: "left-[20%]", size: "w-4 h-4", initialOpacity: 0.6, delay: 0.5 },
    { top: "top-[10%]", left: "left-[50%]", size: "w-3 h-3", initialOpacity: 0.4, delay: 0.6 },
    { top: "top-[80%]", left: "left-[55%]", size: "w-5 h-5", initialOpacity: 0.8, delay: 0.7 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-center text-4xl font-bold">أماكن سيرفراتنا</p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="mt-12 flex justify-center items-center mx-auto relative"
      >
        <img
          src="/images/Group4.png"
          alt="World map showing server locations"
          width={1000}
          height={1000}
        />
        {/* Render animated circles based on circleData */}
        {circleData.map((circle, index) => (
          <AnimatedCircle key={index} circle={circle} index={index} />
        ))}
      </motion.div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12 text-end">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut", delay: index * 0.05 }, // Staggered fade-in for location cards
            }}
            className="flex flex-col items-center sm:flex-row sm:justify-around bg-white rounded-md shadow-md p-2 hover:shadow-xl justify-between transition hover:scale-105 text-center sm:text-start"
          >
            <div>
              <img
                src={location.flag }
                alt={`${location.name} Flag`} // Descriptive alt text [^1]
                width={80}
                height={80}
                className="undefined relative before:absolute before:w-16 before:h-2 before:bg-black before:bottom-0 before:left-0 "
              />
            </div>
            <div>
              <h1 className="mb-6 text-xl !mb-2 font-semibold">{location.name}</h1>
              <p className="text-sm text-green-500">              
                  {location.response}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ServerLocation
