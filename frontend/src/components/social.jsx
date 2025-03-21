import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";

const social = () => {
  return (
    <div className='flex flex-row items-center justify-center space-x-4 pb-4'>
      <div>&copy;{new Date().getFullYear()} Laura Dev</div>
      <a href="https://github.com/lavollmer" target="_blank" rel="noreferrer">
        <FaGithub className='text-xl'/>
      </a>
      <a href="https://lauradeveloper.com/" target="_blank" rel="noreferrer">
        <BsFilePerson className='text-xl' />
      </a>
    </div>
  )
}

export default social