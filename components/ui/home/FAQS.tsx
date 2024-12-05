import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const links = [
    {
        id: 1,
        question: "What types of logistics services do you offer?",
        answer:
            "We provide comprehensive logistics solutions, including ocean and air freight, real-time tracking, customs clearance, and secure transportation, all powered by advanced technology to ensure efficiency and reliability.",
    },
    {
        id: 2,
        question: "How can I track my shipments in real-time?",
        answer:
            "Our state-of-the-art tracking system offers live updates on your shipments. You can monitor progress through our digital platform, providing full visibility and control over your logistics operations.",
    },
    {
        id: 3,
        question: "How do you ensure the security of my goods during transportation?",
        answer:
            "We use advanced security protocols, including real-time monitoring and data analytics, to ensure the safety of your shipments from origin to destination, minimizing risks and enhancing transparency.",
    },
    {
        id: 4,
        question: "Can I get updates on my shipments 24/7?",
        answer:
            "Yes, our dedicated support team is available 24/7 to provide you with real-time updates and proactive assistance, ensuring seamless communication and quick resolutions.",
    },
    {
        id: 5,
        question: "How do you handle delays and disruptions in the supply chain?",
        answer:
            "We use predictive analytics and real-time data to identify potential delays before they happen, allowing us to implement solutions swiftly and minimize disruptions in your supply chain.",
    }
];

const FAQs = () => {
    return (
        <section className="w-full h-full py-20 bg-[#F8F9FB]">
            <div className="container w-full">
                <div className='mb-12'>
                    <div className='text-center mb-2'>
                        <h1 className={`text-[#1A1A1A] sm:text-[46px] text-[38px] sm:leading-[55px] leading-[42px] font-bold font-[family-name:var(--font-Outfit)]`}>Question & Answer</h1>
                    </div>
                    <div className='max-w-[780px] mx-auto text-center'>
                        <p className='text-[#525252] text-base font-normal'>Find answers to common questions about our logistics services, shipping processes, and how Aria Global can support your business needs.</p>
                    </div>
                </div>
                <div className='max-w-[950px] mx-auto'>
                    <Accordion type="single" collapsible className="w-full space-y-5">
                        {links.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${item.id}`}
                                className="bg-[#fff] border border-[#fff] shadow-lg rounded-xl"
                            >
                                <AccordionTrigger className="text-[#1A1A1A] hover:no-underline sm:text-lg text-sm font-semibold sm:px-5 px-3 py-5 text-start">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#1A1A1A] sm:text-base text-sm font-normal sm:px-5 px-3">
                                    <div className="max-w-5xl">{item.answer}</div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
