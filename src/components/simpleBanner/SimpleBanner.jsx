import React from 'react'

const SimpleBanner = () => {
  return (
    <>
        <div className='bg-secondary'>
            <div data-aos = 'fade-up' className='container py-8 md:py-12'>
                <div className='grid grid-cols-1 gap-6 items-center md:grid-cols-3 md:gap-8'>
                    <div className='px-2'>
                        <iframe 
                    className='aspect-video w-full'
                    src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8" 
                    frameborder="0"
                    allow='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                    </div>
                    
                    <div className='flex flex-col items-center gap-4 text-center text-white dark:text-white md:col-span-2 md:items-start md:text-left'>
                        <h1 className='text-3xl font-bold'>
                            Market your next project
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium, esse hic tenetur optio est sit assumenda 
                            odio officia rerum fuga deserunt eligendi. Cupiditate,
                            minima! Ea soluta facere dignissimos fuga tempore?</p>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default SimpleBanner