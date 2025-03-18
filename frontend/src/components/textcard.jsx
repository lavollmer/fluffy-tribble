import React from 'react'

const textcard = ({ text, title, hashtagOne, hashtagTwo, hashtagThree }) => {
    return (
        <>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                {/* <img className='w-full'></img> */}
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>
                        <h1>{title}</h1>
                    </div>
                    <p className='text-gray-700 text-base'>{text}</p>
                </div>
                <div>
                    <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{hashtagOne}</p>
                    <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{hashtagTwo}</p>
                    <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{hashtagThree}</p>
                </div>
            </div>
        </>
    )
}

export default textcard