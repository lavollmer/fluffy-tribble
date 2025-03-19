import React from 'react'

const sidenavbar = () => {
  return (
    <div className='flex flex-col bg-custom-bright-orange w-1/4 h-screen font-roboto'>
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