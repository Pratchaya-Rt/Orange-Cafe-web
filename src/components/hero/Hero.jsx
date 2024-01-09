import React from 'react'

const Hero = () => {
  return (
    <div className='h-[650px] md:h-[500px] bg-orange-50 dark:bg-[#2D3250] pt-20'>
        <section className='container flex flex-col items-center justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 dark:text-white'>
                {/* hero text container */}

                <div 
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true"
                className='flex flex-col items-center gap-4 text-center md:items-start md:text-left '>
                    <h1 className='text-4xl'>
                        Chocoholic, Coffee addicts, anything that’s delicious.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Laborum iste vel at,possimus officiis vero facere natus 
                        ratione?   
                    </p>
                    <div className='space-x-4'>
                        <button className='btn-primary mt-10'>Get Started</button>
                        
                        
                    </div>  
                </div>
                {/* hero Image container */}
                <div 
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-once="true"
                className='mx-auto max-w-xs p-4'>
                    <img src="https://i.pinimg.com/564x/b8/4d/0b/b84d0b0a6b6e1f4b4caf91ace95200c9.jpg" alt="Not Found" className='' />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero