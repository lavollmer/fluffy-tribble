import React from 'react'
import TextCard from './textcard.jsx'

const features = () => {
    return (
        <div className='flex flex-col items-center justify-center p-6 pt-10 font-roboto'>
            <h1 className='text-4xl font-bold'>Features</h1>
            <div className='flex flex-row items-center justify-center p-6 space-x-10'>
                <TextCard title="Accurate Pronunciation of Medical Terms" text="Our platform offers healthcare professionals a comprehensive guide to correctly pronounce complex medical terminology. Whether you're in nursing, pharmacy, or medicine, our resources ensure you're confident in communciation." hashtagOne="MedicalPronunciation " hashtagTwo="Nursing" hashtagThree="Medicine" />
                <TextCard title="AI-Led Medication Name Pronunciation" text="Healthcare professionals can trust our website to perfect their medication name pronunciation. We cover the most commonly prescribed medications, including brand names, generic terms, and dosage instructions." hashtagOne="Learning" hashtagTwo="Practice" hashtagThree="MedicationNames" />
                <TextCard title="Interactive Learning Tools for Healthcare Experts" text="Our interactive learning tools are designed to make mastering medical terminology fun and effective. With quizzes, voice recognition technology, and customizable learning tracks, you’ll stay engaged while building your pronunciation skills." hashtagOne="learn" hashtagTwo="Nursing" hashtagThree="Medicine" />
            </div>
        </div>
    )
}

export default features