import React from 'react'

const button = ({buttonText}) => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='bg-black text-custom-primary px-8 py-2 rounded text-md hover:bg-custom-light-blue hover:cursor-pointer'>{buttonText}</div>
    </div>
  )
}

export default button