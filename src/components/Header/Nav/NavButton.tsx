"use client"

import React from 'react'
import { motion } from "motion/react"

interface NavButtonProps {
  name: string;
}

export default function NavButton({ name }: NavButtonProps) {
  return (
    <motion.button
      initial={{
        backgroundColor: "var(--color-button-muted)",
        color: "var(--color-button-foreground)"
      }}
      whileHover={{
        backgroundColor: "var(--color-button-foreground)",
        color: "var(--color-button-muted)"
      }}
      className='flex items-center justify-center rounded-full px-[22px] py-2'
    >
      { name }
    </motion.button>
  )
}
  