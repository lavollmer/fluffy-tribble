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
    <div className='m-10 flex flex-row justify-between items-center font-roboto'>
      <h1 className='text-2xl font-bold'>MEDPRONUNCIATION AI</h1>
      <div className='flex flex-row justify-center items-center font-bold space-x-10 text-lg'>
        <nav className='flex flex-row justify-center items-center space-x-10'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/practice">Practice</Link>
        </nav>
        <div className='cursor-pointer'>
          <RxHamburgerMenu onClick={handleSideNavClick} />
        </div>
      </div>
      {showSideNavBar == 'true' && <SideNavBar />}
    </div>
  )
}

export default header