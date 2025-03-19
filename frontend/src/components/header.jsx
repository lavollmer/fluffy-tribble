import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div className='m-10 flex flex-row justify-between items-center font-roboto'>
      <h1 className='text-2xl font-bold'>MEDPRONUNCIATION AI</h1>
      <div className='flex flex-row justify-center items-center font-bold space-x-10 text-lg'>
        <nav className='flex flex-row justify-center items-center space-x-10'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/practice">Practice</Link>
        </nav>
        <RxHamburgerMenu />
      </div>
    </div>
  )
}

export default header