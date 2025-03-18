import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import TTS from "../components/texttospeech.jsx"
import Button from "../components/button.jsx"


const practice = () => {
  return (
    <div className='h-screen w-screen bg-custom-primary font-roboto'>
      <Header />
      <div className='flex flex-col items-center justify-center'>
        <TTS />
      </div>
      <Footer />
    </div>
  )
}

export default practice