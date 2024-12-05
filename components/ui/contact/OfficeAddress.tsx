import Image from 'next/image'
import React from 'react'

const OfficeAddress = () => {
    return (
        <>
            <section className='w-full pt-20'>
                <div className='container'>
                    <div className='flex flex-col'>
                        <div className='mb-7'>
                            <h1 className={`text-[#1A1A1A] text-[48px] leading-[56px] font-bold font-[family-name:var(--font-Outfit)]`}>Main Office</h1>
                        </div>
                        <div>
                            <h6 className='text-[#1A1A1A] text-2xl font-semibold mb-5'>U.S.A</h6>
                            <div className='flex items-start gap-3 mb-4'>
                                <div className='w-7 h-7 relative flex-shrink-0'>
                                    <Image src="/images/icons/location.svg" alt="location" fill className='object-contain' />
                                </div>
                                <p className='text-[#525252] text-base font-normal'>4 Lily Court, Monroe, NJ 08831, USA</p>
                            </div>
                            <div className='flex items-start gap-3 mb-4'>
                                <div className='w-7 h-7 relative flex-shrink-0'>
                                    <Image src="/images/icons/email.svg" alt="email" fill className='object-contain' />
                                </div>
                                <p className='text-[#525252] text-base font-normal'>ask@aria.global</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='w-7 h-7 relative flex-shrink-0'>
                                    <Image src="/images/icons/phone.svg" alt="phone" fill className='object-contain' />
                                </div>
                                <p className='text-[#525252] text-base font-normal'>+1 6467729041</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full py-20'>
                <div className='container'>
                    <div className='flex flex-col'>
                        <div className='mb-7'>
                            <h1 className={`text-[#1A1A1A] text-[48px] leading-[56px] font-bold font-[family-name:var(--font-Outfit)]`}>Regional Office</h1>
                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                            <div>
                                <h6 className='text-[#1A1A1A] text-2xl font-semibold mb-5'>Pakistan</h6>
                                <div className='flex items-start gap-3 mb-4'>
                                    <div className='w-7 h-7 relative flex-shrink-0'>
                                        <Image src="/images/icons/location.svg" alt="location" fill className='object-contain' />
                                    </div>
                                    <p className='text-[#525252] text-base font-normal'>Block 6, P.E.C.H.S, Karachi, Pakistan</p>
                                </div>
                                <div className='flex items-start gap-3 mb-4'>
                                    <div className='w-7 h-7 relative flex-shrink-0'>
                                        <Image src="/images/icons/email.svg" alt="email" fill className='object-contain' />
                                    </div>
                                    <p className='text-[#525252] text-base font-normal'>ask@aria.global</p>
                                </div>
                            </div>
                            <div>
                                <h6 className='text-[#1A1A1A] text-2xl font-semibold mb-5'>Bangladesh</h6>
                                <div className='flex items-start gap-3 mb-4'>
                                    <div className='w-7 h-7 relative flex-shrink-0'>
                                        <Image src="/images/icons/location.svg" alt="location" fill className='object-contain' />
                                    </div>
                                    <p className='text-[#525252] text-base font-normal'>6th Floor, 206/A Tejgaon Industrial Area Dhaka - 1208, Bangladesh</p>
                                </div>
                                <div className='flex items-start gap-3 mb-4'>
                                    <div className='w-7 h-7 relative flex-shrink-0'>
                                        <Image src="/images/icons/email.svg" alt="email" fill className='object-contain' />
                                    </div>
                                    <p className='text-[#525252] text-base font-normal'>ask@aria.global</p>
                                </div>
                            </div>
                            <div>
                                <h6 className='text-[#1A1A1A] text-2xl font-semibold mb-5'>India</h6>
                                <div className='flex items-start gap-3 mb-4'>
                                    <div className='w-7 h-7 relative flex-shrink-0'>
                                        <Image src="/images/icons/location.svg" alt="location" fill className='object-contain' />
                                    </div>
                                    <div>
                                        <p className='text-[#525252] text-base font-normal mb-3'>1: 219B Rishi Aurobindo Sarani Kolkata -
                                            700161 West Bengal, India</p>
                                        <p className='text-[#525252] text-base font-normal mb-3'>2: Plot No 72, Ground Floor, Sai Enclave,
                                            Sector 23, Dwarka, New Delhi - 110077</p>
                                        <p className='text-[#525252] text-base font-normal'>3: 603, Arenja Chambers II, 6th Floor,
                                            Sector 15, Near Bhoomi Mall, CBD-
                                            Belapur, Navi Mumbai</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-3 mb-4'>
                                    <div className='w-7 h-7 relative flex-shrink-0'>
                                        <Image src="/images/icons/email.svg" alt="email" fill className='object-contain' />
                                    </div>
                                    <p className='text-[#525252] text-base font-normal'>ask@aria.global</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default OfficeAddress