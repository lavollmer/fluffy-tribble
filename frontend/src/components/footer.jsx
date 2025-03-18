import React from 'react'

const footer = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center font-roboto'>
        <div className='grid grid-cols-2 gap-4 p-4'>
          <div>
            <h1 className='text-2xl font-bold'>MEDPRONUNCIATION</h1>
          </div>
          <div className='flex flex-row items-center font-bold justify-evenly'>
            <h1>ABOUT</h1>
            <h1>PRACTICE</h1>
            <h1>FEEDBACK</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center font-roboto'>
        <div>&copy;{new Date().getFullYear()} Laura Dev</div>
      </div>
    </>
  )
}

export default footer