import React from 'react'
import Social from "../components/social.jsx"
import { Link } from 'react-router-dom'
import Newsletter from "../components/newsletter.jsx"

const footer = () => {
  return (
    <>
      <div className='font-roboto bg-custom-light-blue w-screen'>
        <div>
          <Newsletter />
        </div>
        <div className='flex flex-row items-center justify-center space-x-10 p-6 font-roboto'>
          <h1 className='text-xl font-bold hover:text-white'>
            <Link to='/'>MEDPRONUNCIATION AI
            </Link></h1>
          <div className='flex flex-row items-center justify-center font-bold text-md space-x-2'>
            <h2>New to MedPronunciation AI? </h2>
            <div className='hover:text-white'>
              <Link to="/signup">Sign Up Free</Link>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center font-bold text-md space-x-6'>
            <div className='hover:text-white'>
              <Link to="/login">Login</Link>
            </div><div className='hover:text-white'>
              <Link to="/practice">Practice</Link>
            </div><div className='hover:text-white'>
              <Link to="/contact">Contact Us</Link>
            </div><div className='hover:text-white'>
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
        <Social />
      </div>
    </>
  )
}

export default footer