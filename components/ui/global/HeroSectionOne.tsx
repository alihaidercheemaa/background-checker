import React from 'react'
import { Button } from '../button'
import Link from 'next/link'

interface HeroSectionOneProps {
    title: string
    description: string
    heroBg: string
}

const HeroSectionOne: React.FC<HeroSectionOneProps> = ({ title, description, heroBg }) => {
    return (
        <>
            <section className='w-full relative min-h-screen flex items-center lg:pt-[76px] lg:py-0 py-24 bg-no-repeat bg-left before:absolute before:inset-0 before:bg-black/70' style={{ backgroundImage: `url("/images/${heroBg}")` }}>
                <div className='relative z-10 container w-full h-full'>
                    <div className='lg:w-1/2 w-full mr-auto'>
                        <div className='max-w-[614px] mb-4'>
                            <h1 className={`text-white text-[43px] leading-[53px] font-bold`}>{title}</h1>
                        </div>
                        <div className='max-w-[520px] mb-6'>
                            <p className='text-white text-base font-normal'>{description}</p>
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

export default HeroSectionOne