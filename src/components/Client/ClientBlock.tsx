import React from 'react'
import Image from 'next/image'
import { 
  ClientsData, 
  AutomotiveCustomer, 
  NonAutoCustomer, 
  ClientType,
  isAutomotiveCustomer, 
  isNonAutoCustomer 
} from '@/types/clients'

interface ClientBlockProps {
  data: ClientsData;
}

export default function ClientBlock({ data }: ClientBlockProps) {
  return (
    <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6">
      {data.map((customer, customerIndex) => (
        <div key={customerIndex} className="space-y-6 sm:space-y-8">
          {/* Category Title */}
          <div className="text-center space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {customer.category}
            </h2>
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Handle Automotive Customers */}
          {isAutomotiveCustomer(customer) && (
            <div className="space-y-8 sm:space-y-12">
              {customer.types.map((type, typeIndex) => (
                <div key={typeIndex} className="space-y-4 sm:space-y-6">
                  <div className="text-center space-y-2 px-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-button-foreground">
                      {type.title}
                    </h3>
                    <div className="w-12 sm:w-16 h-0.5 bg-secondary mx-auto rounded-full opacity-60"></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 px-4 sm:px-6">
                    {type.clients.map((client, clientIndex) => (
                      <div key={clientIndex} className="flex flex-col items-center space-y-2 sm:space-y-3 group">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:bg-muted">
                          <Image
                            src={client.src}
                            alt={client.name}
                            width={96}
                            height={96}
                            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <span className="text-xs sm:text-sm text-button-foreground text-center font-medium group-hover:text-primary transition-colors duration-300 px-1">
                          {client.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Handle Non-Auto Customers */}
          {isNonAutoCustomer(customer) && (
            <div className="space-y-4 sm:space-y-6">
              {customer.types.title && (
                <div className="text-center space-y-2 px-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-button-foreground">
                    {customer.types.title}
                  </h3>
                  <div className="w-12 sm:w-16 h-0.5 bg-secondary mx-auto rounded-full opacity-60"></div>
                </div>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 px-4 sm:px-6">
                {customer.types.clients.map((client, clientIndex) => (
                  <div key={clientIndex} className="flex flex-col items-center space-y-2 sm:space-y-3 group">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:bg-muted">
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={96}
                        height={96}
                        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-button-foreground text-center font-medium group-hover:text-primary transition-colors duration-300 px-1">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
  