import React from 'react'
import Social from "../components/social.jsx"
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <>
      <div className=' font-roboto bg-custom-light-blue w-screen'>
        <div className='flex flex-row items-center justify-center p-6'>
          <div className='grid grid-cols-2 gap-4 p-4'>
            <div>
              <h1 className='text-2xl font-bold'>MEDPRONUNCIATION AI</h1>
            </div>
            <div className='flex flex-col items-center font-bold text-md space-y-4'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/practice">Practice</Link>
              <Link to="/feedback">Feedback</Link>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center font-roboto p-4'>
          <Social />
        </div>
      </div>
    </>
  )
}

export default footer