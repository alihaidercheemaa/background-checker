import React from 'react'
import { Button } from '../button'
// import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
  return (
    <>
      <section className='w-full relative min-h-screen flex items-center lg:pt-[76px] lg:py-0 py-24 bg-no-repeat bg-left before:absolute before:inset-0 before:bg-black/70' style={{ backgroundImage: 'url("/images/heroBG.jpg")' }}>
        <div className='relative z-10 container w-full h-full'>
          <div className='lg:w-1/2 w-full mr-auto'>
            <div className='max-w-[614px] mb-4'>
              <h1 className={`text-white text-[43px] leading-[53px] font-bold`}>Comprehensive Criminal Background Screening Services for Safety</h1>
            </div>
            <div className='max-w-[520px] mb-6'>
              <p className='text-white text-base font-normal'>At Background Checker, We Ensure Thorough Criminal Background Checks for Employment with Rapid Turnaround at Local and Federal Levels, Giving You Confidence in Your Hires.</p>
            </div>
            <Link href='/#quote'>
              <Button variant="primary" size='lg' className='relative'>
                <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-primary-100"></span>
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection