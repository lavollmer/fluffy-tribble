import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import TTS from "../components/texttospeech.jsx"
import Button from "../components/button.jsx"


const practice = () => {
  return (
    <div className='h-screen w-screen bg-custom-primary'>
      <Header />
        <TTS />
      <Footer />
    </div>
  )
}

export default practice