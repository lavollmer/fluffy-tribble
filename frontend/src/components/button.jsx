import React from 'react'
import { Link } from 'react-router-dom'

const button = ({ buttonText, to }) => {
  return (
    <div className='bg-black text-custom-primary px-16 py-4 rounded-md shadow-lg text-xl hover:bg-custom-bright-orange hover:cursor-pointer'>
      <Link to={to}>{buttonText}</Link>
    </div>
  )
}

export default button