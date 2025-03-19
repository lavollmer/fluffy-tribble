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
          <h1 className='text-2xl font-bold'>MEDPRONUNCIATION AI</h1>
        </div>
        <div className='m-10 flex flex-row justify-center items-center space-x-10 text-lg'>
          <div className='flex flex-row justify-center items-center space-x-10'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/practice">Practice</Link>
          </div>
          <div className='flex flex-row items-center justify-center cursor-pointer'>
            <RxHamburgerMenu onClick={handleSideNavClick} />
          </div>
        </div>
      </div>
     <div className={`fixed top-0 right-0 h-full w-1/3 bg-custom-primary p-10 z-40 transform transition-transform duration-300 ${
          showSideNavBar ? 'translate-x-0' : 'translate-x-full'}`}>
        <SideNavBar />
     </div>
    </>
  )
}

export default header