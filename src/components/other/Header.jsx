import React from 'react'

const Header = (props) => {
  const name = props.data?.firstName || 'User'; 
  const logOutUser = ()=> {
    localStorage.setItem('loggedInUser','')
    props.changeUser('');
    // window.location.reload();
  }
  return (
    <div className='flex items-items justify-between'>
        <h1 className='text-2xl font-medium text-white'>Hello <br/> <span className='text-3xl font-semibold'>{name}</span> </h1>
        <button onClick={logOutUser} className='text-white text-lg font-medium bg-red-500 px-5 py-0 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
