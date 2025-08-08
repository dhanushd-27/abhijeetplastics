import React from 'react'
import nav from '@/config/nav.json'
import NavButton from './NavButton'

export default function NavBar() {
  return (
    <div className='flex gap-[22px]'>
      {nav.map((item) => (
        <NavButton key={item.name} name={item.name} />
      ))}
    </div>
  )
}
