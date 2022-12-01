import React from 'react'
import {Link} from 'react-router-dom'

function ErrorNotFound() {
  return (
    <div className='body_error '>
        <section className='flex justify-end items-center gap-6 px-[6vw] pt-[6rem]'>
            <div className='flex flex-col justify-center'>
                <h2 className='error_title'>Don't Cry</h2>
                <button className='error_button bg-blue-700 p-[0.5rem] rounded-xl hover:bg-blue-600'><Link to='/'>Back to home</Link> </button>
            </div>
            <div className='line_error'></div>
            <div>
                <p className='error_404'>it's just error 404</p>
                <p className='error_quotes'>The page your looking for is not availibale.</p>
            </div>
        </section>
        <section className='flex justify-center'>
        <h3 className='text-center md:text-[20rem] font-semibold  drop-shadow-2xl animate-bounce  h-10'>4</h3>
        <h3 className='text-center md:text-[20rem] font-semibold  drop-shadow-2xl animate-bounce h-24'>0</h3>
        <h3 className='text-center md:text-[20rem] font-semibold  drop-shadow-2xl animate-bounce h-10'>4</h3>
        </section>
    </div>
  )
}

export default ErrorNotFound