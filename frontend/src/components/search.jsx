import React from 'react'

const search = () => {
    return (
        <div>
            <form className='flex items-center'>
                <label for="search" className='sr-only'>Search</label>
                <div className='relative w-full'>
                    <input type="text" id="search" name="search" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-bright-orange block w-full pl-10 p-2.5' placeholder='Search medication names, classes, etc' required />
                </div>
                <button type='submit' className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-md text-white bg-custom-rose rounded-lg border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</button>
            </form>
        </div>
    )
}

export default search