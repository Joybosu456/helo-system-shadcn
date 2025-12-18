"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const strokeWidthMap = {
  thick: 4,
  medium: 3,
  thin: 2,
}

function Loader({
  className,
  size = "medium",
  color = "foreground",
  arcLength = "3/4",
  ...props
}) {
  const strokeWidth = strokeWidthMap[size]
  
  const radius = 20
  const circumference = 2 * Math.PI * radius
  
  let arcLengthValue, gapLength, startOffset
  
  if (arcLength === "3/4") {
    arcLengthValue = (270 / 360) * circumference
    gapLength = circumference - arcLengthValue
    startOffset = -90
  } else {
    arcLengthValue = (90 / 360) * circumference
    gapLength = circumference - arcLengthValue
    startOffset = 0
  }

  return (
    <svg
      className={cn("animate-spin", className)}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="22"
        cy="22"
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        className={cn(
          color === "blue" && "text-blue-500",
          color === "foreground" && "text-foreground"
        )}
        strokeDasharray={`${arcLengthValue} ${gapLength}`}
        strokeDashoffset={0}
        transform={`rotate(${startOffset} 22 22)`}
      />
    </svg>
  )
}

export { Loader }

