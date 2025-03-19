import React from 'react'
import Social from "../components/social.jsx"

const sidenavbar = () => {
  return (
    <div className='flex flex-col justify-start space-y-4 p-4 bg-custom-primary h-screen font-roboto'>
      <div>
        <h1 className='text-xl font-bold'>MEDPRONUNCIATION AI</h1>
      </div>
      <div>
        <ul className='text-lg font-bold'>
          <li>Home</li>
          <li>About</li>
          <li>Practice</li>
          <li>Feedback</li>
        </ul>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <Social />
      </div>
    </div>
  )
}

export default sidenavbar