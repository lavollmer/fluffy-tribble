import React from 'react'
import { TbPercentage80 } from "react-icons/tb";
import { RiNumbersLine } from "react-icons/ri";
import { TbPercentage60 } from "react-icons/tb";

const why = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center space-y-4 bg-custom-lighter-blue font-roboto'>
                <h1 className='font-bold text-4xl text-black pt-10'>Why MedPronunciation AI?</h1>
                <div className='flex flex-row items-center justify-center p-6'>
                <div className='flex flex-col items-center justify-center p-6'>
                    <TbPercentage80 className='text-8xl' />
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <h1 className='font-bold text-5xl text-custom-bright-orange'>80%</h1>
                        <h1>of serious medical errors involve miscommunication during handoffs between healthcare providers</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center p-6'>
                    <RiNumbersLine className='text-8xl' />
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <h1 className='font-bold text-5xl text-custom-bright-orange'>1,500</h1>
                        <h1>look-alike/sound-alike drug names labeled by the Institute for Safe Medication Practices (ISMP)</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center p-6'>
                    <TbPercentage60 className='text-8xl' />
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <h1 className='font-bold text-5xl text-custom-bright-orange'>60%+</h1>
                        <h1>of medical students struggle with medical terminology, often due to pronunciation difficulties</h1>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default why