import React from 'react'
import Group from '../assets/group.jpg'

const who = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-10 p-10 font-roboto'>
            <h1 className='font-bold text-4xl '>Who is this for?</h1>
            <div className='grid grid-cols-2 bg-custom-primary font-roboto'>
                <div>
                    <img src={Group} alt
                        ='group of people' className='w-96 h-96 mx-auto' />
                </div>
                <div className='flex flex-col justify-center items-center space-y-10 p-10 text-2xl'>
                    <p>This is for <strong>anyone</strong> who wants to improve their pronunciation of medical terms.</p>
                    <p className='font-bold'>This includes:</p>
                    <ul className='list-disc'>
                        <li>Healthcare students (Nursing, Medicine, Pharmacy, etc.) </li>
                        <li>Healthcare professionals</li>
                        <li>Non-native English speakers working in healthcare settings</li>
                        <li>Anyone interested in medical terminology</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default who