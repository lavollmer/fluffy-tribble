import React from 'react'

const who = () => {
    return (
        <div className='flex flex-col space-y-10 p-4 bg-custom-primary font-roboto'>
            <div className='flex flex-row justify-center items-center'>
                <h1 className='font-bold text-3xl '>Who is this for?</h1>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 text-lg'>
                <div>
                    <p>This is for <strong>anyone</strong> who wants to improve their pronunciation of medical terms.</p>
                </div>
                <div className='mt-4'>
                    <p className='font-bold'>This includes:</p>
                    <ul>
                        <li>Healthcare students (Nursing, Medicine, Pharmacy, etc.) </li>
                        <li>Healthcare Residents</li>
                        <li>Healthcare professionals</li>
                        <li>Non-native English speakers working in healthcare settings</li>
                        <li>Anyone interested in medical terminulogy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default who