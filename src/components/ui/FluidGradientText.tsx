"use client"

import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

export type FluidGradientTextProps = {
  /** Text content rendered inside the SVG. */
  text: string
  /**
   * SVG viewBox width used to scale the gradient and text layout.
   * @default 1900
   * */
  svgViewBoxWidth?: number
  /**
   * SVG viewBox height used as the base text size.
   * @default 300
   * */
  svgViewBoxHeight?: number
}

export function FluidGradientText({
  text,
  svgViewBoxWidth = 1900,
  svgViewBoxHeight = 300,
}: FluidGradientTextProps) {
  // Normalized mouse coordinate in [0, 1]
  const mouseFraction = useMotionValue(0.5)
  // Hover intensity: 0 when cursor is outside, 1 when hovered
  const hoverIntensityRaw = useMotionValue(0)
  const hoverIntensity = useSpring(hoverIntensityRaw, {
    stiffness: 180,
    damping: 24,
  })

  // Fluid spring with organic liquid inertia & subtle wave overshoot
  const fluidSpring = useSpring(mouseFraction, {
    stiffness: 90,
    damping: 15,
    mass: 0.7,
  })

  // Wave width in SVG coordinates (creates a wide, surging crest of light)
  const waveHalfWidth = 650

  // The center of the wave in SVG coordinates
  const waveCenter = useTransform(fluidSpring, [0, 1], [0, svgViewBoxWidth])

  // Leading and trailing boundaries of the water wave
  const waveX1 = useTransform(waveCenter, (center) => center - waveHalfWidth)
  const waveX2 = useTransform(waveCenter, (center) => center + waveHalfWidth)

  // Dynamic opacities modulated by hoverIntensity
  const opacityPeak = useTransform(hoverIntensity, (v) => v * 1.0)
  const opacityMid = useTransform(hoverIntensity, (v) => v * 0.38)
  const opacityEdge = useTransform(hoverIntensity, (v) => v * 0.08)

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const containerRect = event.currentTarget.getBoundingClientRect()
    const fraction = (event.clientX - containerRect.left) / containerRect.width
    mouseFraction.set(fraction)
    hoverIntensityRaw.set(1)
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const containerRect = event.currentTarget.getBoundingClientRect()
    mouseFraction.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
    hoverIntensityRaw.set(1)
  }

  const handleMouseLeave = () => {
    hoverIntensityRaw.set(0)
  }

  return (
    <div
      className="relative size-full overflow-hidden after:absolute after:bottom-0 after:h-px after:w-full after:bg-current/20"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="size-full translate-y-[25%] select-none"
        viewBox={`0 0 ${svgViewBoxWidth} ${svgViewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="2.5"
          fill="url(#fluid_gradient_text_linear)"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: svgViewBoxHeight,
            fontWeight: "900",
            letterSpacing: "0.04em",
            paintOrder: "stroke fill",
          }}
        >
          {text}
        </text>
        <defs>
          <motion.linearGradient
            id="fluid_gradient_text_linear"
            x1={waveX1}
            y1="0"
            x2={waveX2}
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            {/* Fluid water wave illumination profile, only visible on cursor hover */}
            <motion.stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <motion.stop offset="25%" stopColor="currentColor" stopOpacity={opacityEdge} />
            <motion.stop offset="40%" stopColor="currentColor" stopOpacity={opacityMid} />
            <motion.stop offset="50%" stopColor="currentColor" stopOpacity={opacityPeak} />
            <motion.stop offset="60%" stopColor="currentColor" stopOpacity={opacityMid} />
            <motion.stop offset="75%" stopColor="currentColor" stopOpacity={opacityEdge} />
            <motion.stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default FluidGradientText
