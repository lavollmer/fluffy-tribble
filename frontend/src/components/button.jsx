import React from 'react'
import { Link } from 'react-router-dom'

const button = ({ buttonText, to }) => {
  return (
    <div className='bg-black text-custom-primary px-8 py-2 rounded text-md hover:bg-custom-light-blue hover:cursor-pointer'>
      <Link to={to}>{buttonText}</Link>
    </div>
  )
}

export default button