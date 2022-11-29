import React from 'react'

function ErrorNotFound() {
  return (
    <div className='body_error '>
        <section className='flex justify-end items-center gap-6 px-[6vw] pt-[3rem]'>
            <div className='flex flex-col justify-center'>
                <h2 className='error_title'>Don't Cry</h2>
                <button className='error_button'>Back to home</button>
            </div>
            <div className='line_error'></div>
            <div>
                <p className='error_404'>it's just error 404</p>
                <p className='error_quotes'>The page your looking for is not availibale.</p>
            </div>
        </section>
    </div>
  )
}

export default ErrorNotFound