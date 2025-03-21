import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import mainImage from "../assets/mainimage.jpg"
import Button from "../components/button.jsx"
import Features from "../components/features.jsx"
import About from "../components/about.jsx"
import FAQ from "../components/faq.jsx"

const home = () => {
  return (
    <div className='h-screen w-screen bg-custom-primary'>
      <Header />
      <div className='grid grid-cols-2 font-roboto'>
        <div className='flex flex-col items-center justify-center p-6'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <h1 className='font-bold text-4xl'>Saying a medication name doesn't have to be hard.</h1>
            <h2>AI-Led MedPronuncation works to teach healthcare professionals to pronounce medical terminology.</h2>
          </div>
          <div className="pt-6">
            <Button to='/practice' buttonText='Start Today' />
          </div>
        </div>
        <div className='flex flex-col p-4'>
          <img src={mainImage} alt="mainImage" />
        </div>
      </div>
      <div>
        <Features />
      </div>
      <div className='flex flex-row items-center justify-center'>
        <About />
      </div>
      <div>
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default home