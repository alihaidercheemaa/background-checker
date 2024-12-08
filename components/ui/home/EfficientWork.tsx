"use client";
import React from "react";
import Image from "next/image";

const EfficientWork = () => {
    return (
        <section className="bg-[#000610] w-full">
            <div className="container py-20">
                <div className="flex flex-col mb-8">
                    <div className="mb-3">
                        <h1 className={`text-[#fff] sm:text-[46px] text-[42px] sm:leading-[55px] leading-[48px] font-bold `}>Efficient Working Process</h1>
                    </div>
                    <div className="max-w-[720px]">
                        <p className="text-[#F4EBEB] text-base font-normal">
                            Our working process is powered by advanced technology to deliver efficient, reliable, and customized logistics solutions. From initial consultation to final delivery, each step is optimized with data-driven insights and automation, providing you with transparency, precision, and adaptability to meet your unique business needs.
                        </p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='bg-[#191F27] py-8 px-6 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mb-4 w-[60px] h-[60px]'>
                            <Image src="/images/icons/coordinationAndExecution.svg" alt="coordinationAndExecution" fill />
                        </div>
                        <h1 className='text-[#fff] text-xl font-bold  mb-3'>Coordination & Execution</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#F4EBEB] text-sm leading-[24px] font-normal'>We leverage advanced technology to ensure seamless coordination and flawless execution of logistics operations. Every step is optimized with data-driven strategies and automation, delivering reliable, efficient results that keep your business moving forward..</p>
                        </div>
                    </div>
                    <div className='bg-[#191F27] py-8 px-6 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mb-4 w-[58px] h-[58px]'>
                            <Image src="/images/icons/planningAndStrategy.svg" alt="planningAndStrategy" fill />
                        </div>
                        <h1 className='text-[#fff] text-xl font-bold  mb-3'>Planning and Strategy</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#F4EBEB] text-sm leading-[24px] font-normal'>Our approach to planning and strategy is built on advanced analytics and digital tools, enabling us to design logistics solutions that are both adaptable and highly efficient. By harnessing real-time data and predictive insights, we anticipate challenges, streamline operations, and create strategies that align with your long-term business goals. With a focus on precision and innovation, we empower your supply chain to respond effectively to a dynamic global market.</p>
                        </div>
                    </div>
                    <div className='bg-[#191F27] py-8 px-6 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mb-4 w-[58px] h-[58px]'>
                            <Image src="/images/icons/secureTransportation.svg" alt="secureTransportation" fill />
                        </div>
                        <h1 className='text-[#fff] text-xl font-bold  mb-3'>Secure Transportation</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#F4EBEB] text-sm leading-[24px] font-normal'>Our secure transportation solutions prioritize the safety of your shipments at every stage. Using advanced security technology, real-time tracking, and rigorous handling protocols, we safeguard your cargo against risks from origin to destination. Our team leverages data analytics to proactively identify potential security threats, ensuring that your goods are protected and delivered reliably. With a focus on transparency and trust, we make security an integral part of your logistics experience.</p>
                        </div>
                    </div>
                    <div className='bg-[#191F27] py-8 px-6 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mb-4 w-[58px] h-[58px]'>
                            <Image src="/images/icons/realTimeMonitoring.svg" alt="realTimeMonitoring" fill />
                        </div>
                        <h1 className='text-[#fff] text-xl font-bold  mb-3'>Real-Time Monitoring</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#F4EBEB] text-sm leading-[24px] font-normal'>Our advanced real-time monitoring system provides continuous visibility into every stage of your logistics process. Using cutting-edge tracking technology, we deliver live updates and insights, enabling you to track shipments, anticipate delays, and make data-informed decisions instantly. This proactive approach minimizes risks, enhances transparency, and empowers you with full control over your supply chain, ensuring seamless and reliable operations.</p>
                        </div>
                    </div>
                    <div className='bg-[#191F27] py-8 px-6 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mb-4 w-[58px] h-[58px]'>
                            <Image src="/images/icons/globalNetwork.svg" alt="globalNetwork" fill />
                        </div>
                        <h1 className='text-[#fff] text-xl font-bold  mb-3'>Global Network</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#F4EBEB] text-sm leading-[24px] font-normal'>Our extensive global network connects your business to key markets worldwide, supported by strategically located hubs and partnerships across continents. Leveraging digital platforms and cutting-edge logistics technology, we ensure seamless coordination across borders, optimizing routes and transit times to meet your delivery goals. Our network provides you with the flexibility and scalability to expand your reach, with reliable service and real-time visibility into your international supply chain.</p>
                        </div>
                    </div>
                    <div className='bg-[#191F27] py-8 px-6 lg:rounded-2xl md:rounded-xl rounded-lg'>
                        <div className='relative mb-4 w-[58px] h-[58px]'>
                            <Image src="/images/icons/24HourSupport.svg" alt="24HourSupport" fill />
                        </div>
                        <h1 className='text-[#fff] text-xl font-bold  mb-3'>24-Hour Support</h1>
                        <div className='max-w-[515px] mx-auto'>
                            <p className='text-[#F4EBEB] text-sm leading-[24px] font-normal'>Our dedicated 24-hour support team is always available to assist with your logistics needs, ensuring uninterrupted service no matter the time zone. Utilizing advanced customer support technology and real-time tracking tools, we provide quick resolutions, accurate updates, and proactive solutions to keep your shipments on track. With our round-the-clock support, you gain peace of mind and reliable assistance, empowering your business to operate seamlessly across the globe.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EfficientWork;
