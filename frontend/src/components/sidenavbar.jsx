import React from 'react'
import Social from "../components/social.jsx"
import { Link } from 'react-router-dom'

const sidenavbar = () => {
  return (
    <div className='flex flex-col justify-start space-y-10 p-4 bg-custom-primary h-screen font-roboto'>
      <div>
        <h1 className='text-lg font-bold'>MEDPRONUNCIATION AI</h1>
      </div>
      <div className='flex flex-col justify-start left-0 font-bold text-md cursor-pointer space-y-4'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <Social />
      </div>
    </div>
  )
}

export default sidenavbar