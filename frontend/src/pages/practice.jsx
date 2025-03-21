import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import TTS from "../components/texttospeech.jsx"
import StarRating from "../components/starrating.jsx"
import Search from "../components/search.jsx"


const practice = () => {
  return (
    <div className='flex flex-col bg-custom-primary font-roboto space-y-4'> 
      <Header />
      <div className='flex flex-col justify-center items-center space-y-4'>
        <h1 className='font-bold text-4xl text-black'>Practice</h1>
        <p className='text-lg text-custom-grey'>Practice your pronunciation and listening skills</p>
        <Search />
      </div>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <p className='text-lg text-custom-grey'>Type in the medication name you wish to pronounce</p>
        <TTS />
      </div>
      <div>
        <StarRating />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default practice