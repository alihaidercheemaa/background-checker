import React from 'react'
import Image from 'next/image'

interface HeroSectionTwoProps {
    title: string
    description: string
    heroImg: string
    heroBg: string
}

const HeroSectionTwo: React.FC<HeroSectionTwoProps> = ({ title, description, heroImg, heroBg }) => {
    return (
        <>
            <section className='relative w-full flex items-center pt-32 pb-16 bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black/50' style={{ backgroundImage: `url('/images/${heroBg}')` }}>
                <div className='container z-10 w-full flex lg:flex-row flex-col justify-center items-center gap-10'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='max-w-[614px] mb-4'>
                            <h1 className={`text-white text-[48px] leading-[56px] font-bold `}>{title}</h1>
                        </div>
                        <div className='max-w-[575px]'>
                            <p className='text-white text-base font-normal'>{description}</p>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <Image src={`/images/${heroImg}`} alt="blogging" className='ml-auto' width={400} height={400} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSectionTwo