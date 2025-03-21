import React from 'react'
import Social from "../components/social.jsx"
import { Link } from 'react-router-dom'
import { FaWindowClose } from "react-icons/fa";
import { useState } from 'react'

const sidenavbar = ({ showSideNavBar, handleSideNavClick }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-1/4 bg-custom-primary p-10 z-40 transform transition-transform duration-300 ${showSideNavBar ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className='flex flex-col justify-start space-y-10 p-4 bg-custom-primary h-screen font-roboto'>
          <div className='flex flex-row justify-end'>
            <FaWindowClose className='text-xl cursor-pointer' onClick={handleSideNavClick} />
          </div>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-xl font-bold'>MEDPRONUNCIATION AI</h1>
          </div>
          <div className='flex flex-col justify-start left-0 font-bold text-lg cursor-pointer space-y-4'>

                      <div className='text-custom-bright-orange hover:underline'>
                        <Link to="/signup">Sign Up Free</Link>
                      </div>
        
            <div className='hover:text-custom-bright-orange hover:underline'>
              <Link to="/login">Login</Link>
            </div>
            <div className='hover:text-custom-bright-orange hover:underline'>
              <Link to="/practice">Practice</Link>
            </div>
            <div className='hover:text-custom-bright-orange hover:underline'>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className='hover:text-custom-bright-orange hover:underline'>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <Social />
          </div>
        </div>
      </div>
    </>
  )
}

export default sidenavbar