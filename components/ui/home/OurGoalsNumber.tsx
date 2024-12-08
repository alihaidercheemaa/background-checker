import Image from 'next/image'
import React from 'react'

const OurGoalsNumber = () => {
    return (
        <section className='w-full h-full bg-[#fff] py-20'>
            <div className='container'>
                <div className='sm:mb-12 mb-8'>
                    <div className='text-center mb-2'>
                        <h1 className={`text-midNight sm:text-[46px] text-[38px] sm:leading-[55px] leading-[42px] font-bold `}>Our Goals in Numbers</h1>
                    </div>
                    <div className='max-w-[780px] mx-auto text-center'>
                        <p className='text-[#525252] text-base font-normal'>Our goals are backed by measurable results, highlighting our dedication to excellence in logistics. From efficiency improvements to customer satisfaction and consistent growth, each number represents our commitment to delivering exceptional service and innovation in the industry.</p>
                    </div>
                </div>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='bg-[#ECEDF1] py-9 px-8 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mx-auto mb-6 w-[58px] h-[42px]'>
                            <Image src="/images/icons/peoples.svg" alt="peoples" fill />
                        </div>
                        <h1 className='text-midNight text-6xl font-semibold  text-center mb-1'>20+</h1>
                        <p className='text-[#525252] text-[16px] leading-[26px] font-normal text-center'>Hardworking People</p>
                    </div>
                    <div className='bg-[#ECEDF1] py-9 px-8 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mx-auto mb-6 w-[58px] h-[42px]'>
                            <Image src="/images/icons/countries.svg" alt="countries" fill />
                        </div>
                        <h1 className='text-midNight text-6xl font-semibold  text-center mb-1'>5+</h1>
                        <p className='text-[#525252] text-[16px] leading-[26px] font-normal text-center'>Vendors</p>
                    </div>
                    <div className='bg-[#ECEDF1] py-9 px-8 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mx-auto mb-6 w-[58px] h-[42px]'>
                            <Image src="/images/icons/office.svg" alt="office" fill />
                        </div>
                        <h1 className='text-midNight text-6xl font-semibold  text-center mb-1'>8+</h1>
                        <p className='text-[#525252] text-[16px] leading-[26px] font-normal text-center'>Sectors</p>
                    </div>
                    <div className='bg-[#ECEDF1] py-9 px-8 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mx-auto mb-6 w-[58px] h-[42px]'>
                            <Image src="/images/icons/happy.svg" alt="happy" fill />
                        </div>
                        <h1 className='text-midNight text-6xl font-semibold  text-center mb-1'>2K</h1>
                        <p className='text-[#525252] text-[16px] leading-[26px] font-normal text-center'>Happy Customers</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default OurGoalsNumber