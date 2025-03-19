import React from 'react'
import AboutImg from "../assets/about.jpg"


const about = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <h1 className='font-bold'>About the Developer</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
            <img src={AboutImg} alt="AboutImg" />
          </div>
          <div>
            <p>Info</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default about