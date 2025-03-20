import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";

const social = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <div>&copy;{new Date().getFullYear()} Laura Dev</div>
      <div className='flex flex-row items-center justify-center space-x-4'>
        <a href="https://github.com/lavollmer" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://lauradeveloper.com/" target="_blank" rel="noreferrer">
          <BsFilePerson />
        </a>
      </div>
    </div>
  )
}

export default social