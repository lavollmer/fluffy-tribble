import React from 'react'

const login = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-8 font-roboto p-20'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-italic text-2xl font-bold'>Ready to become an expert on medical terminology?</h1>
                <p className='text-lg'>Sign up to get started for free!</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 bg-custom-lighter-blue p-4 rounded-lg shadow-lg p-10'>
                <h2 className='font-bold text-xl'>SIGN UP FREE</h2>
                <form className='flex flex-col justify-center items-center mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
                    <div className='flex flex-col items-center justify-center space-y-4 bg-grey-100 p-4 rounded-lg'>
                        <label for='name'className='font-bold text-lg'>Full Name</label>
                        <input type='text' id='name' placeholder='Full name' className='border-2 border-black rounded-lg bg-gray-100 px-4 py-2' />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4 bg-grey-100 p-4 rounded-lg '>
                        <label for='email' className='font-bold text-lg'>Email</label>
                        <input type='email' id='email' placeholder='Enter your email' className='border-2 border-black rounded-lg bg-gray-100 px-4 py-2' />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4 bg-grey-100 p-4 rounded-lg '>
                        <label for='password' className='font-bold text-lg'>Password</label>
                        <input type='password' id='password' placeholder='Enter your password' className='border-2 border-black rounded-lg bg-gray-100 px-4 py-2' />
                    </div>
                    {/* <div className='flex flex-col items-center justify-center space-y-4 bg-grey-100 p-4 rounded-lg '>
                        <label for='password'>Profession</label>
                        <input type='text' id='profession' placeholder='Enter your profession' className='border-2 border-black rounded-lg bg-gray-100 px-4 py-2' />
                    </div> */}
                    <div>
                        <button type="submit" className='bg-black text-custom-primary px-8 py-2 rounded-lg shadow-lg text-md hover:bg-grey-700 hover:cursor-pointer'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login