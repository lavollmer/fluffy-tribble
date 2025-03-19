import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";

const social = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <div>&copy;{new Date().getFullYear()} Laura Dev</div>
      <div className='flex flex-row items-center justify-center space-x-4'>
        <FaGithub />
        <BsFilePerson />
      </div>
    </div>
  )
}

export default social