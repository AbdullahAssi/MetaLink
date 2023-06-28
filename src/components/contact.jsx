import React from 'react'

function Contact() {
    return (
        <div className='flex flex-col justify-center items-center h-[50vh] xl:h-[50vh] p-8 sm:p-0 mb-[-20px] xl:mb-[-100px]'>
            <p className='text-5xl font-semibold text-white text-center py-4'>Get In Touch</p>
            <p className='text-[15px] max-w-[500px] text-center pb-6 sm:text-3xl'>We are a huge marketplace dedicated to connecting great artists of all Metalink with their fans and unique token collectors!</p>
            <button className='p-4 bg-[#4d1fad] rounded-lg text-white text-[17px]'>Contact Now</button>
        </div>
    )
}

export default Contact