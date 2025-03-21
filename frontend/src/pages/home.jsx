import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import mainImage from "../assets/mainimage.jpg"
import Button from "../components/button.jsx"
import Features from "../components/features.jsx"
import About from "../components/about.jsx"
import FAQ from "../components/faq.jsx"
import Why from "../components/why.jsx"
import SignUp from "../components/signup.jsx"
import Who from "../components/who.jsx"

const home = () => {
  return (
    <div className='h-screen w-screen bg-custom-primary'>
      <Header />
      <div className='grid grid-cols-2 gap-2 font-roboto'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h1 className='font-bold text-4xl'>Speaking medical terminology doesn't have to be hard.</h1>
          <h2>AI-Led MedPronunciation works to teach healthcare professionals to pronounce medical terminology.</h2>
          <Button to='/practice' buttonText='Start Learning Now' />
        </div>
        <div className='flex flex-col items-center justify-center p-4'>
          <img src={mainImage} alt="mainImage" className='items-center rounded-lg' />
        </div>
      </div>
      <div>
        <Why />
      </div>
      <div>
        <Who />
      </div>
      <div>
        <Features />
      </div>
      <div className='flex flex-col items-center justify-center p-6'>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default home