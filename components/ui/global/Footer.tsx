import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-full bg-gradient-to-r from-[#01336F] to-primary-100 bg-no-repeat bg-cover'>
                <div className='container py-20'>
                    <div className='flex lg:flex-row flex-col justify-between items-start lg:gap-20 gap-14'>
                        <div className='xl:max-w-[300px] lg:max-w-[215px] max-w-[300px]'>
                            <div className='md:mb-6 mb-4'>
                                {/* <Link href="/">
                                    <Image src="/images/logo.svg" alt="logo" width={170} height={170} priority />
                                </Link> */}
                                 <Link href="/">
                            {/* <Image src="/images/logo.svg" alt="logo" width={170} height={170} priority /> */}
                            <h1 className={`text-primary-100 text-[43px] leading-[53px] font-bold`}>Logo</h1>
                        </Link>
                            </div>
                            <div className='md:mb-4 mb-3'>
                                <h6 className='text-white text-base font-normal'>
                                We provide comprehensive criminal background screening services for safety, compliance, and security, offering fast turnaround and reliable insights for informed decision-making.
                                </h6>
                            </div>
                            <div className='flex flex-row md:gap-4 gap-3'>
                                <Link href="#">
                                    <div className='w-[22px] h-[22px] relative'>
                                        <Image src="/images/icons/facebook.svg" alt="facebook" fill />
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div className='w-[22px] h-[22px] relative'>
                                        <Image src="/images/icons/instagram.svg" alt="instagram" fill loading='lazy' />
                                    </div>
                                </Link>
                                <Link href="#">
                                    <div className='w-[22px] h-[22px] relative'>
                                        <Image src="/images/icons/twitter.svg" alt="twitter" fill loading='lazy' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col xxl:gap-32 lg:gap-10 md:gap-5 gap-10'>
                            <div className='max-w-[300px]'>
                                <div className='md:mb-6 mb-4'>
                                    <h6 className='text-[#fff] text-lg font-medium uppercase'>
                                        <span className='xxl:inline-block lg:hidden'>quick</span> links
                                    </h6>
                                </div>
                                <div className='flex flex-col md:gap-4 gap-3'>
                                    <Link href="/" className='footlinks'>Home</Link>
                                    <Link href="#" className='footlinks'>Services</Link>
                                    <Link href="#" className='footlinks'>Industries</Link>
                                    <Link href="#" className='footlinks'>Pricing</Link>
                                    <Link href="#" className='footlinks'>Contact</Link>
                                </div>
                            </div>
                            <div className='max-w-[300px]'>
                                <div className="md:mb-6 mb-4">
                                    <h6 className='text-[#fff] text-lg font-medium uppercase'>
                                        information
                                    </h6>
                                </div>
                                <div className='flex flex-col md:gap-4 gap-3'>
                                    <h6 className='footlinks !normal-case'>info@background.checker</h6>
                                    <h6 className='footlinks'>4 Lily Court, Monroe, NJ 08831, USA</h6>
                                    <h6 className='footlinks'>+1 1234567891</h6>
                                </div>
                            </div>
                            <div className='max-w-[300px]'>
                                <div className='md:mb-6 mb-4'>
                                    <h6 className='text-[#fff] text-lg font-medium uppercase'>
                                        newsletter
                                    </h6>
                                </div>
                                <div className='md:mb-6 mb-4'>
                                    <p className='footlinks !normal-case'>
                                    Join our newsletter community to receive regular updates on the topics that interest you and your business.
                                    </p>
                                </div>
                                <div className='flex flex-row justify-between items-center gap-3 border-b border-[#fff] pb-[6px]'>
                                    <input type="email" placeholder='enter your email' className='w-full h-10 bg-transparent focus:outline-none text-[#fff] text-base font-normal pr-4 py-1 capitalize placeholder:capitalize placeholder:text-[#fff] placeholder:text-base placeholder:font-normal' />
                                    <button type='button' className='cursor-pointer w-5 h-5 relative'>
                                        <Image src="/images/icons/submitArrow.svg" alt="submitArrow" fill loading='lazy' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container w-full border-t border-white'>
                    <div className='flex flex-row justify-center items-center py-5'>
                        <h6 className='text-white text-base font-normal'>
                            Copyright © {new Date().getFullYear()} Background Checker. All rights reserved
                        </h6>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer