import React from 'react'
import { Button } from '../button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
  return (
    <>
      <section className='w-full min-h-screen flex items-center lg:pt-[76px] lg:py-0 py-24 bg-[#010101]'>
        <div className='container w-full h-full flex lg:flex-row flex-col justify-center items-center gap-10'>
          <div className='lg:w-1/2 w-full'>
            <div className='max-w-[614px] mb-4'>
              <h1 className={`text-white text-[43px] leading-[53px] font-bold font-[family-name:var(--font-Outfit)]`}>Seamless Global Freight Solutions to Elevate Your Business</h1>
            </div>
            <div className='max-w-[650px] mb-6'>
              <p className='text-white text-base font-normal'>Streamline Your Supply Chain with Our Comprehensive Freight Solutions.
                Our services are designed to deliver efficient, cost-effective global shipping tailored to meet your business needs.</p>
            </div>
            <Link href='/#quote'>
              <Button variant='heroBtn' size='lg'>Get a Quote</Button>
            </Link>
          </div>
          <div className='lg:w-1/2 w-full'>
            <Image src="/images/heroSectionGlob.svg" alt="heroSectionGlob" className='ml-auto' width={590} height={590} />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection