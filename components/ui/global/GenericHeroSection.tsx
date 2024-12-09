import React from 'react'

interface GenericHeroSection {
    title: string
}


const GenericHeroSection: React.FC<GenericHeroSection> = ({title}) => {
    return (
        <>
            <section className='relative w-full flex items-center pt-32 pb-16 bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black/50' style={{backgroundImage: "url('/images/contactBG.jpg')"}}>
                <div className='container z-10 w-full flex lg:flex-row flex-col justify-center items-center gap-10'>
                    <div className='lg:w-1/2 w-full mx-auto'>
                        <div className='max-w-[614px] text-center'>
                            <h1 className={`text-white text-[48px] leading-[56px] font-bold normal-case`}>{title}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GenericHeroSection