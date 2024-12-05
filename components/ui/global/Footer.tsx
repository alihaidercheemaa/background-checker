import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-full bg-[#000] bg-no-repeat bg-cover' style={{ backgroundImage: "url('/images/footerBG.svg')" }}  >
                <div className='container py-20'>
                    <div className='flex lg:flex-row flex-col justify-between items-start lg:gap-20 gap-14'>
                        <div className='xl:max-w-[300px] lg:max-w-[215px] max-w-[300px]'>
                            <div className='md:mb-8 mb-4'>
                                <Link href="/">
                                    <Image src="/images/logo.svg" alt="logo" width={170} height={170} priority />
                                </Link>
                            </div>
                            <div className='mb-5'>
                                <h6 className='text-[#F4EBEB] text-sm font-light'>
                                    We understand that logistics is complex and ever-changing. With cutting-edge technology and data-driven insights, we streamline operations and adapt swiftly to industry shifts, ensuring reliable, flexible solutions for your business.
                                </h6>
                            </div>
                            <div className='flex flex-row gap-4'>
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
                                <div className='md:mb-8 mb-4'>
                                    <h6 className='text-[#fff] text-lg font-medium uppercase'>
                                        <span className='xxl:inline-block lg:hidden'>quick</span> menu
                                    </h6>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <Link href="/" className='text-[#F4EBEB] text-sm font-light'>Home</Link>
                                    <Link href="/#about" className='text-[#F4EBEB] text-sm font-light'>About</Link>
                                    <Link href="/#services" className='text-[#F4EBEB] text-sm font-light'>Services</Link>
                                    <Link href="#" className='text-[#F4EBEB] text-sm font-light'>Track</Link>
                                    <Link href="/contact" className='text-[#F4EBEB] text-sm font-light'>Contact</Link>
                                </div>
                            </div>
                            <div className='max-w-[300px]'>
                                <div className="md:mb-8 mb-4">
                                    <h6 className='text-[#fff] text-lg font-medium uppercase'>
                                        information
                                    </h6>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h6 className='text-[#F4EBEB] text-sm font-light'>ask@aria.global</h6>
                                    <h6 className='text-[#F4EBEB] text-sm font-light'>4 Lily Court, Monroe, NJ 08831, USA</h6>
                                    <h6 className='text-[#F4EBEB] text-sm font-light'>+1 6467729041</h6>
                                </div>
                            </div>
                            <div className='max-w-[300px]'>
                                <div className='md:mb-8 mb-4'>
                                    <h6 className='text-[#fff] text-lg font-medium uppercase'>
                                        newsletter
                                    </h6>
                                </div>
                                <div className='mb-6'>
                                    <p className='text-[#F4EBEB] text-sm font-light'>
                                        Join our newsletter community to receive regular updates on the topics that
                                    </p>
                                </div>
                                <div className='flex flex-row justify-between items-center gap-3 border-b border-[#5E5E5E] pb-[6px]'>
                                    <input type="email" placeholder='enter your email' className='w-full h-10 bg-transparent focus:outline-none text-[#fff]/80 text-sm font-semibold pr-4 py-1 uppercase placeholder:uppercase placeholder:text-[#fff]/80 placeholder:text-sm placeholder:font-semibold' />
                                    <button type='button' className='cursor-pointer w-5 h-5 relative'>
                                        <Image src="/images/icons/submitArrow.svg" alt="submitArrow" fill loading='lazy' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container w-full border-t border-[#5E5E5E]'>
                    <div className='flex flex-row justify-center items-center py-5'>
                        <h6 className='text-[#F4EBEB] text-sm font-light'>
                            Copyright © 2024 Aria Global. All rights reserved
                        </h6>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer