import React from 'react'
import Image from 'next/image'
import NavBar from './Nav/NavBar'

export default function Header() {
  return (
    <section className='flex justify-between items-center px-[22px] py-[12px]'>
      <Image src={"/logo.png"} alt="logo" width={87} height={87} />
      <NavBar />
    </section>
  )
}
