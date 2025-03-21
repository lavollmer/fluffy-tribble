import React from 'react'
import Button from '../components/button.jsx'

const signup = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-4 font-roboto p-20'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h1 className='font-italic text-2xl'>Ready to become an expert on medical terminology?</h1>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 border-2 border-black p-4 rounded-lg shadow-lg'>
                <h2 className='font-bold text-xl'>Sign Up</h2>
                <form className='flex flex-col justify-center items-center md:flex-row md:space-x-4 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
                    <div className='flex flex-col items-center justify-center space-y-4 bg-grey-100 p-4 rounded-lg shadow-lg'>
                        <label for='name'>Name</label>
                        <input type='text' id='name' placeholder='Enter your name' />
                    </div>
                    <div>
                        <label for='email'>Email</label>
                        <input type='email' id='email' placeholder='Enter your email' />
                    </div>
                    <div>
                        <label for='password'>Password</label>
                        <input type='password' id='password' placeholder='Enter your password' />
                    </div>
                    <div>
                        <button type="submit" className='bg-black text-custom-primary px-8 py-2 rounded-lg shadow-lg text-md hover:bg-custom-light-blue hover:cursor-pointer'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default signup