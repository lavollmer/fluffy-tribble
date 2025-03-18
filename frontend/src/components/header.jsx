import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const header = () => {
  return (
    <div className='m-10 flex flex-row justify-between items-center font-roboto'>
      <h1 className='text-2xl font-bold'>MEDPRONUNCIATION AI</h1>
      <div className='flex flex-row justify-center items-center font-bold space-x-10 text-lg'>
        <h2>About</h2>
        <h2>Practice</h2>
        <RxHamburgerMenu />
      </div>
    </div>
  )
}

export default header