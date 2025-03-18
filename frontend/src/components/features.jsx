import React from 'react'
import TextCard from './textcard.jsx'

const features = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>FEATURES</h1>
            <div className='flex flex-row items-center justify-center p-6'>
                
                <TextCard title="Med" text="Hello" hashtag="learn" />
                <TextCard title="Med" text="Hello" hashtag="learn" />
                <TextCard title="Med" text="Hello" hashtag="learn" />
            </div>
        </div>
    )
}

export default features