import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const header = () => {
  return (
    <div className='m-10 flex flex-row justify-between items-center'>
      <h1 className='font-roboto text-2xl font-bold'>MEDPRONUNCIATION</h1>
      <div className='flex flex-row justify-center items-center space-x-10 text-lg'>
        <h2>About</h2>
        <h2>Practice</h2>
        <RxHamburgerMenu />
      </div>
    </div>
  )
}

export default header