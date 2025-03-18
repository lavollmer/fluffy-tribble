import React from 'react'
import { FaRegStar } from "react-icons/fa";

const starrating = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-2xl font-bold'>Rate your MedPronuncation</h1>
                </div>
                <div className='flex flex-row space-x-2 p-4'>
                    <FaRegStar style={{ fontSize: '2em' }} />
                    <FaRegStar style={{ fontSize: '2em' }} />
                    <FaRegStar style={{ fontSize: '2em' }} />
                    <FaRegStar style={{ fontSize: '2em' }} />
                    <FaRegStar style={{ fontSize: '2em' }} />
                </div>
            </div>
        </>
    )
}

export default starrating