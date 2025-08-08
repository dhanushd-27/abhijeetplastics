"use client"

import React, { useState } from 'react'
import { motion } from "motion/react"

interface NavButtonProps {
  name: string;
}

export default function NavButton({ name }: NavButtonProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <button
      onMouseEnter={() => setHoveredItem(name)}
      onMouseLeave={() => setHoveredItem(null)}
      className='flex items-center justify-center rounded-full px-[22px] py-2'
    >
      {hoveredItem === name && (
      <motion.div
        className="absolute inset-0 bg-button-foreground rounded-full"
        layoutId="magic-pill"
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: hoveredItem === name ? 30 : 60, // slower on leave
        }}
      />
      )}
      { name }
    </button>
  )
}
  