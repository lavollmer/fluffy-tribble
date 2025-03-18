import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import TTS from "../components/texttospeech.jsx"
import StarRating from "../components/starrating.jsx"


const practice = () => {
  return (
    <div className='h-screen w-screen bg-custom-primary font-roboto'>
      <Header />
      <div className='flex flex-col items-center justify-center'>
        <TTS />
      </div>
      <div>
        <StarRating />
      </div>
      <Footer />
    </div>
  )
}

export default practice