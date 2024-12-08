import React from 'react'
import { Button } from '../button'
import Link from 'next/link'
import Image from 'next/image'

const TransportationRange = () => {
    return (
        <section className='w-full h-full bg-[#F8F9FB] lg:py-40 pt-20 lg:relative static'>
            <div className='container flex lg:flex-row flex-col lg:justify-between lg:items-center justify-center items-start gap-10 lg:mb-72 mb-20'>
                <div className='lg:w-1/2 w-full'>
                    <div className='max-w-[575px] mb-4'>
                        <h1 className={`text-midNight sm:text-[46px] text-[38px] sm:leading-[55px] leading-[42px] font-bold `}>Making workplaces safer, secure, and trustworthy for everyone.</h1>
                    </div>
                    <div className='max-w-[600px] mb-6'>
                        <p className='text-[#525252] text-base font-normal'>Background checks are crucial to protecting the financial viability of your company and the safety of your employees. By hiring a candidate with a clandestine criminal record, you assume a level of risk that could jeopardize your organization. While not every crime is enough to discount an applicant from consideration, conducting a criminal background check gives you the information you need to make an informed hiring decision.</p>
                    </div>
                    <Link href='/#quote'>
                        <Button  size='lg' variant="primary">Get a Quote</Button>
                    </Link>
                </div>
                <div className='lg:absolute lg:right-0 lg:w-auto w-full flex justify-center items-center'>
                    <div className='rounded-l-2xl lg:rounded-r-none rounded-r-2xl overflow-hidden relative xxl:w-[655px] xl:w-[550px] lg:w-[470px] w-full md:h-[550px] h-[450px]'>
                        <Image src='/images/example.jpg' alt='example' fill className='object-cover' />
                    </div>
                </div>
            </div>

            <div className='container flex lg:flex-row flex-col lg:justify-between lg:items-center justify-center items-start gap-10'>
                <div className='lg:absolute lg:left-0 lg:w-auto w-full flex justify-center items-center order-2 lg:order-1'>
                    <div className='rounded-r-2xl lg:rounded-l-none rounded-l-2xl overflow-hidden relative xxl:w-[655px] xl:w-[550px] lg:w-[470px] w-full md:h-[550px] h-[450px]'>
                        <Image src='/images/example2.jpg' alt='cargoShipment' fill className='object-cover' />
                    </div>
                </div>
                <div className='lg:w-1/2 w-full ml-auto'>
                    <div className='max-w-[575px] mb-4'>
                        <h1 className={`text-midNight sm:text-[46px] text-[38px] sm:leading-[55px] leading-[42px] font-bold `}>Types of Criminal Background Checks and Screening Services</h1>
                    </div>
                    <div className='max-w-[600px] mb-6'>
                        <p className='text-[#525252] text-base font-normal'>To ensure you have a complete and accurate understanding of a candidate’s criminal history, its essential to perform multiple types of background checks. Each of these checks serves a unique purpose, and many of them overlap to provide a comprehensive view. At [Your Company Name], we offer a wide range of criminal background checks, designed to give you the most thorough insights into your candidates past. These checks help identify potential risks and safeguard your workplace by verifying criminal records, court filings, and more.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransportationRange