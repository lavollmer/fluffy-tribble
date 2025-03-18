import React from 'react'

const button = ({buttonText}) => {
  return (
    <div className='flex flex-row items-center justify-center px-6 py-4 rounded-full'>
      <div className='bg-black text-custom-primary'>{buttonText}</div>
    </div>
  )
}

export default button