import React from 'react'
import AboutImg from "../assets/about.jpg"


const about = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center font-roboto bg-custom-primary'>
        <div className='flex flex-col items-center justify-center space-y-4 pb-0'>
          <h1 className='font-bold text-4xl'>About the Founder and Software Developer</h1>
          <h2 className='font-bold text-2xl'>AI-Led MedPronunciation</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
          <div className='flex flex-col items-center justify-center'>
            <img src={AboutImg} alt="AboutImg" className='flex items-center pl-40 pr-40' />
          </div>
          <div className='flex flex-col items-center justify-center space-y-4 text-lg p-10'>
            <p><strong>MedPronunciation AI</strong> was developed by a software engineer with a background in healthcare and pharmacy, aiming to assist healthcare professionals in mastering the correct pronunciation of medical terminology.</p>
            <p>The developer, with hands-on experience in the healthcare industry, recognized the challenges healthcare professionals face when pronouncing medication names and medical jargon. At the time, the only option available was to search for pronunciation through Google, but no comprehensive online resource existed specifically for this purpose. While books on pronunciation were available, learning through audio and interactive tools is far more effective for mastering medical terminology.</p>
            <p>In the healthcare industry, clear and confident communication is critical, especially when discussing medical terms with patients and colleagues. MedPronunciation AI helps healthcare professionals enhance their pronunciation skills, ensuring they speak with precision and professionalism in all medical settings.</p>
            <p><strong>MedPronunciation AI</strong> is an innovative web application powered by artificial intelligence (AI) designed to help healthcare workers easily learn how to pronounce complex medical terms and medication names accurately.</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default about