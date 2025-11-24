import React from 'react'

const Header = () => {
  return (
    <div className='flex items-items justify-between'>
        <h1 className='text-2xl font-medium text-white'>Hello <br/> <span className='text-3xl font-semibold'>Arpit</span> </h1>
        <button className='text-white text-lg font-medium bg-red-500 px-5 py-0 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
