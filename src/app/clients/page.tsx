import React from 'react'
import clients from '@/config/clients.json'
import ClientHeader from "@/components/Client/ClientHeader"
import ClientBlock from "@/components/Client/ClientBlock"
import Header from "@/components/Header/Header"
import ClientFooter from "@/components/Client/ClientFooter"

export default function Clients() {
  return (
    <>
      <Header />
      <div className="mx-8">
        <ClientHeader />
        <ClientBlock data={clients}/ >
        <ClientFooter />
      </div>
    </>
  )
}
