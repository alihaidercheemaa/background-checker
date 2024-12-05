import React from 'react'

const TimingSchedule = () => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const today = new Date().getDay();
    return (
        <>
            <section className='w-full bg-white'>
                <div className='container w-full py-20 space-y-10'>
                    <div>
                        <h1 className=' uppercase text-[#1b1b1b] text-4xl tracking-wider font-medium text-center' style={{ textShadow: "2px 2px 0 rgba(0, 0, 0, 0.2)" }}>opening hours</h1>
                    </div>
                    <div className="flex flex-col max-w-md mx-auto">
                        {days.map((day, index) => (
                            <p
                                key={index}
                                className={`uppercase tracking-wider font-medium text-base border-b p-3 ${today === index
                                    ? "text-white bg-[#6f5243]"
                                    : "text-[#5e5e5e]"
                                    }`}
                            >
                                {day}: 1:00 PM to 11:00 PM
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TimingSchedule