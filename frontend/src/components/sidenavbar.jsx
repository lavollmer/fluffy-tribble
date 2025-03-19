import React from 'react'

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
    </div>
  )
}

export default sidenavbar