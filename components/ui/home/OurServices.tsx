import Image from 'next/image'
import React from 'react'

const OurServices = () => {
    return (
        <section id='services' className='w-full h-full flex items-center bg-[#fff] py-20'>
            <div className='container'>
                <div className='sm:mb-12 mb-8'>
                    <div className='text-center mb-2'>
                        <h1 className={`text-midNight text-[43px] leading-[53px] font-bold `}>Our Services</h1>
                    </div>
                    <div className='max-w-[780px] mx-auto text-center'>
                        <p className='text-[#525252] text-base font-normal'>We provide customized ocean and air freight solutions to meet your unique shipping needs. Our services ensure timely delivery and cost efficiency, helping you streamline your global logistics.</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 max-w-[1100px] mx-auto'>
                    <div className='bg-[#ECEDF1] py-9 px-8 rounded-2xl'>
                        <div className='relative mx-auto mb-2 w-[58px] h-[58px]'>
                            <Image src="/images/icons/contractLogistics.svg" alt="contractLogistics" fill />
                        </div>
                        <h1 className='text-midNight text-xl font-bold  text-center mb-3'>Contract Logistics</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#525252] text-[16px] leading-[26px] font-normal text-center'>Our contract logistics services provide end-to-end management of your supply chain, tailored to meet your business unique demands. Leveraging advanced warehouse management systems, predictive analytics, and automated solutions, we handle everything from inventory control and order fulfillment to distribution and returns. With our tech-driven approach, we streamline processes, reduce costs, and optimize your logistics operations to support scalable growth and improve overall efficiency.</p>
                        </div>
                    </div>
                    <div className='bg-[#ECEDF1] py-9 px-8 rounded-2xl'>
                        <div className='relative mx-auto mb-2 w-[58px] h-[58px]'>
                            <Image src="/images/icons/oceanAndAirFreight.png" alt="oceanAndAirFreight" fill />
                        </div>
                        <h1 className='text-midNight text-xl font-bold  text-center mb-3'>Ocean and Air Freight</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#525252] text-[16px] leading-[26px] font-normal text-center'>Our ocean and air freight solutions offer seamless global shipping, tailored to your specific needs. Using advanced route optimization and real-time tracking technology, we ensure efficient, timely, and cost-effective deliveries, whether by sea or air. From handling customs clearance to managing complex logistics requirements, our team combines industry expertise with digital tools to provide reliable, transparent freight solutions that keep your supply chain moving smoothly across borders.</p>
                        </div>
                    </div>
                    <div className='bg-[#ECEDF1] py-9 px-8 rounded-2xl'>
                        <div className='relative mx-auto mb-2 w-[58px] h-[58px]'>
                            <Image src="/images/icons/warehousingAndStorage.svg" alt="warehousingAndStorage" fill />
                        </div>
                        <h1 className='text-midNight text-xl font-bold  text-center mb-3'>Warehousing and Storage</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#525252] text-[16px] leading-[26px] font-normal text-center'>Our extensive warehousing and storage facilities, covering 100,000 square feet in Karachi and 50,000 square feet each in Lahore and Islamabad, are designed to support your business logistics needs. Equipped with advanced inventory management systems and automated storage solutions, our facilities offer secure, efficient handling and storage of your goods. With real-time visibility and optimized space management, we provide reliable, scalable warehousing that adapts to your operational demands.</p>
                        </div>
                    </div>
                    <div className='bg-[#ECEDF1] py-9 px-6 rounded-2xl'>
                        <div className='relative mx-auto mb-2 w-[58px] h-[58px]'>
                            <Image src="/images/icons/consultingServices.png" alt="consultingServices" fill />
                        </div>
                        <h1 className='text-midNight text-xl font-bold  text-center mb-3'>Consulting Services</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#525252] text-[16px] leading-[26px] font-normal text-center'>Our consulting services are designed to optimize your supply chain through data-driven insights and innovative logistics strategies. Leveraging advanced analytics, industry expertise, and the latest technology, we help you streamline operations, reduce costs, and improve efficiency. From process evaluation to customized solutions, our team partners with you to solve complex logistics challenges, empowering your business to adapt and thrive in a dynamic global market.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices