import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa";

const starrating = ({totalStars = 5}) => {
    // tracks the current rating - intial 0
    const [star, setStar] = useState(0);
    // tracks the current hover - intial 0
    const [hover, setHover] = useState(0);

    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-2xl font-bold'>Rate your MedPronuncation</h1>
                </div>
                <div className='flex flex-row space-x-2 p-4'>
                    <FaRegStar style={{ color: 'text-gray-400', fontSize: '2em' }} />
                    <FaRegStar style={{ fontSize: '2em' }} />
                    <FaRegStar style={{ fontSize: '2em' }} />
                    <FaRegStar style={{ fontSize: '2em' }} />
                    <FaRegStar style={{ fontSize: '2em' }} />
                </div>
                <div>
                    <h1>Based on XX reviews</h1>
                </div>
                <button className='bg-custom-primary text-white font-bold p-4 rounded-lg'>Submit</button>
            </div>
        </>
    )
}

export default starrating