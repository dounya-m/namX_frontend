import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between mx-10 my-6'>
      <h1 className='text-xl font-bold'>Nam.X</h1>
      <div>
        <ul className='flex gap-4'>
        <li className='text-gray-500 cursor-pointer hover:text-gray-700'><NavLink to=''/>Home</li>
        <li className='text-gray-500 cursor-pointer hover:text-gray-700'><NavLink to=''/>Store</li>
        <li className='text-gray-500 cursor-pointer hover:text-gray-700'><NavLink to=''/>About</li>
        <li className='text-gray-500 cursor-pointer hover:text-gray-700'><NavLink to=''/>Contact</li>
        </ul>
      </div>
      <div>
        <button className='px-2 py-1 text-white bg-blue-500 rounded-md'>login</button>
      </div>
    </div>
  )
}

export default Header