import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div>
        <ul className='flex'>
        <li><NavLink to=''/>Home</li>
        <li><NavLink to=''/>Store</li>
        <li><NavLink to=''/>About</li>
        <li><NavLink to=''/>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header