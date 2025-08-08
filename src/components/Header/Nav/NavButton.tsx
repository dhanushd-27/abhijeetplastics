"use client"

import React from 'react'
import { motion } from "motion/react"

interface NavButtonProps {
  name: string;
}

export default function NavButton({ name }: NavButtonProps) {
  return (
    <button
      className='relative flex items-center justify-center rounded-full px-[22px] py-2 overflow-hidden group'
    >
      <span className="absolute inset-0 rounded-full bg-[var(--button-muted)] group-hover:bg-[var(--button-foreground)] transition-all duration-200"></span>
      <span className="relative z-10 text-[var(--button-foreground)] group-hover:text-[var(--button-muted)] transition-all duration-200">
        {name}
      </span>
    </button>
  )
}