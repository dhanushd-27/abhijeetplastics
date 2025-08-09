import React from 'react'

export default function ClientSeparator() {
  return (
    <div className="flex justify-center items-center py-4 sm:py-6">
      <div className="flex items-center space-x-4">
        <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-secondary opacity-40"></div>
        <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
        <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-secondary opacity-40"></div>
      </div>
    </div>
  )
}
