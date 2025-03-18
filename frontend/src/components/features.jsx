import React from 'react'
import TextCard from './textcard.jsx'

const features = () => {
    return (
        <div className='flex flex-col items-center justify-center p-6 pt-10 font-roboto'>
            <h1 className='text-2xl font-bold'>FEATURES</h1>
            <div className='flex flex-row items-center justify-center p-6 space-x-10'>
                <TextCard title="Accurate Pronunciation of Medical Terms" text="Our platform offers healthcare professionals a comprehensive guide to correctly pronounce complex medical terminology. With phonetic breakdowns, audio guides, and easy-to-follow examples, you'll master the pronunciation of anatomical terms, disease names, and medical procedures. Whether you're in nursing, pharmacy, or medicine, our resources ensure you're confident and precise in your communications." hashtagOne="MedicalPronunciation " />
                <TextCard title="AI-Led Medication Name Pronunciation" text="Healthcare professionals can trust our expert-led audio library to perfect their medication name pronunciation. We cover the most commonly prescribed medications, including brand names, generic terms, and dosage instructions. Access clear, professional recordings, and increase your fluency in communicating medication information to patients and colleagues." hashtag="learn" />
                <TextCard title="Interactive Learning Tools for Healthcare Experts" text="Our interactive learning tools are designed to make mastering medical terminology fun and effective. With quizzes, voice recognition technology, and customizable learning tracks, you’ll stay engaged while building your pronunciation skills. Improve retention and pronunciation accuracy, ensuring that you communicate confidently in real-world healthcare settings." hashtag="learn" />
            </div>
        </div>
    )
}

export default features