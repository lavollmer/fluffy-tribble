import React from 'react'
import Button from '../components/button.jsx'

const signup = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-4 font-roboto'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h1 className='font-italic text-2xl'>Ready to become an expert on medical terminology?</h1>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <form>
                    <div>
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