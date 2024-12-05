import React from 'react'
import Image from 'next/image'


const HeroSection = () => {
    return (
        <>
            <section className='w-full flex items-center pt-32 pb-16 bg-[#010101]'>
                <div className='container w-full flex lg:flex-row flex-col justify-center items-center gap-10'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='max-w-[614px] mb-4'>
                            <h1 className={`text-white text-[48px] leading-[56px] font-bold font-[family-name:var(--font-Outfit)]`}>Contact Us</h1>
                        </div>
                        <div className='max-w-[575px]'>
                            <p className='text-white text-base font-normal'>Get in touch with us today to learn how our tailored logistics solutions can streamline your global transportation needs.</p>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <Image src="/images/heroSectionMailGlob.svg" alt="heroSectionMailGlob" className='ml-auto' width={400} height={400} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection