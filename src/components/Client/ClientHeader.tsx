import React from 'react'
import ClientSeparator from './ClientSeparator'

export default function ClientHeader() {
  return (
    <>
      <div className="text-center space-y-4 sm:space-y-6 py-10 px-4 sm:px-6">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Leading Brands
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-button-foreground max-w-3xl mx-auto leading-relaxed">
          We&apos;ve had the privilege of collaborating with incredible customers—building strong, long-lasting partnerships beyond just business.
        </p>
      </div>
      <ClientSeparator />
    </>
  )
}
