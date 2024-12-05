import React from 'react'
import { Button } from '../button'
import Link from 'next/link'
import Image from 'next/image'

const TransportationRange = () => {
    return (
        <section id="about" className='w-full h-full bg-[#F8F9FB] lg:py-40 pt-20 lg:relative static'>
            <div className='container flex lg:flex-row flex-col lg:justify-between lg:items-center justify-center items-start gap-10 lg:mb-72 mb-20'>
                <div className='lg:w-1/2 w-full'>
                    <div className='max-w-[575px] mb-4'>
                        <h1 className={`text-[#1A1A1A] sm:text-[46px] text-[38px] sm:leading-[55px] leading-[42px] font-bold font-[family-name:var(--font-Outfit)]`}>Comprehensive Transportation Solutions with Advanced Technology</h1>
                    </div>
                    <div className='max-w-[600px] mb-6'>
                        <p className='text-[#525252] text-base font-normal'>Our full-service transportation solutions cover every aspect of logistics—from freight forwarding and customs clearance to last-mile delivery—ensuring each shipment is managed with precision and expertise. Leveraging advanced tracking and real-time visibility tools, we keep you informed at every stage, empowering you with full control over your supply chain. With a strong commitment to customer satisfaction, we deliver flexible, tech-driven solutions that seamlessly adapt to your business&#39;s evolving needs.</p>
                    </div>
                    <Link href='/#quote'>
                        <Button variant='heroBtn' size='lg' className='bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]'>Get a Quote</Button>
                    </Link>
                </div>
                <div className='lg:absolute lg:right-0 lg:w-auto w-full flex justify-center items-center'>
                    <div className='rounded-l-2xl lg:rounded-r-none rounded-r-2xl overflow-hidden relative xxl:w-[655px] xl:w-[550px] lg:w-[470px] w-full md:h-[550px] h-[450px]'>
                        <Image src='/images/airplaneFreight.svg' alt='airplaneFreight' fill className='object-cover' />
                    </div>
                </div>
            </div>

            <div className='container flex lg:flex-row flex-col lg:justify-between lg:items-center justify-center items-start gap-10'>
                <div className='lg:absolute lg:left-0 lg:w-auto w-full flex justify-center items-center order-2 lg:order-1'>
                    <div className='rounded-r-2xl lg:rounded-l-none rounded-l-2xl overflow-hidden relative xxl:w-[655px] xl:w-[550px] lg:w-[470px] w-full md:h-[550px] h-[450px]'>
                        <Image src='/images/cargoShipment.svg' alt='cargoShipment' fill className='object-cover' />
                    </div>
                </div>
                <div className='lg:w-1/2 w-full ml-auto'>
                    <div className='max-w-[575px] mb-4'>
                        <h1 className={`text-[#1A1A1A] sm:text-[46px] text-[38px] sm:leading-[55px] leading-[42px] font-bold font-[family-name:var(--font-Outfit)]`}>Aria Global: Delivering Reliable, Tech-Driven Logistics Solutions</h1>
                    </div>
                    <div className='max-w-[600px] mb-6'>
                        <p className='text-[#525252] text-base font-normal'>Aria Global is dedicated to meeting your logistics and transportation needs with unmatched precision and reliability. Our experienced team, powered by advanced technology, ensures timely deliveries and smooth operations at every step. With a focus on customer satisfaction, we provide tailored solutions that optimize efficiency and support your business&#39;s growth.</p>
                    </div>
                    <div>
                        <div className='flex items-start gap-3 mb-4'>
                            <div className='w-7 h-7 relative flex-shrink-0'>
                                <Image src="/images/icons/dollar.svg" alt="dollar" fill className='object-contain' />
                            </div>
                            <p className='text-[#1A1A1A] text-base font-semibold font-[family-name:var(--font-Outfit)]'>Cost Optimization: Strategic solutions to reduce expenses and maximize value</p>
                        </div>
                        <div className='flex items-start gap-3 mb-4'>
                            <div className='w-7 h-7 relative flex-shrink-0'>
                                <Image src="/images/icons/clock.svg" alt="clock" fill className='object-contain' />
                            </div>
                            <p className='text-[#1A1A1A] text-base font-semibold font-[family-name:var(--font-Outfit)]'>Reduced Transit Time: Streamlined processes for faster, more efficient deliveries</p>
                        </div>
                        <div className='flex items-start gap-3 mb-4'>
                            <div className='w-7 h-7 relative flex-shrink-0'>
                                <Image src="/images/icons/monitor.svg" alt="monitor" fill className='object-contain' />
                            </div>
                            <p className='text-[#1A1A1A] text-base font-semibold font-[family-name:var(--font-Outfit)]'>Real-Time Monitoring: Advanced tracking technology for full shipment visibility</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransportationRange