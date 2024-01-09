import React from 'react'

const BannerDetails = ({reverse}) => {
  return (
    <section className='bg-slate-100 dark:bg-slate-900 dark:text-white'>   
        <div className='container flex flex-col items-center justify-center py-10 md:h-[500px]'>
            <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
                {/* text container */}
                <div 
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true"
                className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8
                md:text-left ${
                    reverse ? "md:order-last" : ""
                }`}>
                    <h1 className='text-2xl md:text-4xl'>
                        We Build Apps That Get Trending On Appworld
                    </h1>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Cumque molestiae id explicabo molestias ipsam assumenda!
                    </p>
                    <div>
                        <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                            <li className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing 
                                elit. Vel, in.</li>
                            <li className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing </li>
                            <li className='font-medium'>Lorem ipsum dolor sit amet consectetur</li>
                        </ul>
                    </div>
                </div>

                {/* image container */}
                <div 
                    data-aos="fade-left"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className={reverse ? "order-1" : ""}>
                    <img 
                    src="https://images.unsplash.com/photo-1606626367155-5d23349572ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhZmV8ZW58MHx8MHx8fDA%3D" 
                    alt="Not Found"
                    className='mx-auto w-full p-4 md:max-w-[400px]' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerDetails