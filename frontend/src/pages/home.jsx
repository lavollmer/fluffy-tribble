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
        <div className='flex flex-col items-center justify-center space-y-20 p-14'>
          <h1 className='font-bold text-6xl'>Speaking medical terminology doesn't have to be hard.</h1>
          {/* <h2 className='text-3xl'>AI-Led MedPronunciation teaches healthcare professionals and students to pronounce and learn medical terminology for free in a fun way.</h2> */}
          <h1 className='text-3xl'>Learn and perfect medication pronunciation with AI—fun, gamified learning for healthcare professionals and students!</h1>
          <Button to='/practice' buttonText='Start Learning Now For Free' />
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