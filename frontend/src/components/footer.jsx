import React from 'react'
import Social from "../components/social.jsx"
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <>
      <div className='font-roboto bg-custom-light-blue w-screen'>
        <div className='flex flex-row items-center justify-center space-x-10 p-6 font-roboto'>
          <h1 className='text-xl font-bold'>MEDPRONUNCIATION AI</h1>
          <div className='flex flex-row justify-center items-center font-bold text-md space-x-6'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/practice">Practice</Link>
          </div>
        </div>
          <Social />
      </div>
    </>
  )
}

export default footer