import React from 'react'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom'
import SideNavBar from "./sidenavbar"

const header = () => {
  const [showSideNavBar, setShowSideNavBar] = useState(false)

  const handleSideNavClick = () => {
    setShowSideNavBar(!showSideNavBar)
  }

  return (
    <>
      <div className='flex flex-row justify-between font-roboto font-bold'>
        <div className='flex flex-row justify-center items-center m-10'>
          <h1 className='text-3xl font-bold cursor-pointer hover:text-custom-bright-orange'>
            <Link to="/">MEDPRONUNCIATION AI</Link>
          </h1>
        </div>
        <div className='flex flex-row items-center justify-center text-xl m-10 space-x-10'>
          <h2 className='text-xl'>New to MedPronunciation AI? </h2>
          <div className='text-custom-bright-orange'>
            <Link to="/signup">Sign Up Free</Link>
          </div>
        </div>
        <div className='m-10 flex flex-row justify-center items-center space-x-10 text-xl'>
          <div className='flex flex-row justify-center items-center space-x-10'>
            <div className='hover:text-custom-bright-orange'>
              <Link to="/login">Login</Link>
            </div>
            <div className='hover:text-custom-bright-orange'>
              <Link to="/practice">Practice</Link>
            </div>
            <div className='hover:text-custom-bright-orange'>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className='hover:text-custom-bright-orange'>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center cursor-pointer'>
            <RxHamburgerMenu onClick={handleSideNavClick} />
          </div>
        </div>
      </div>
      <SideNavBar showSideNavBar={showSideNavBar} handleSideNavClick={handleSideNavClick} />
    </>
  )
}

export default header