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
        question: "What is Background Checker?",
        answer:
            "Background Checker is a leading provider of comprehensive background check solutions for businesses across all industries. We specialize in offering fast, accurate, and reliable screening services to help you make informed hiring decisions.",
    },
    {
        id: 2,
        question: "How fast is the turnaround time for background checks?",
        answer:
            "One of the key benefits of using Background Checker is our quick turnaround times. We strive to deliver results within 24 to 48 hours, ensuring that you can make informed hiring decisions quickly.",
    },
    {
        id: 3,
        question: "Can Background Checker provide services for industries not listed on your website?",
        answer:
            "Yes! While we specialize in several industries such as healthcare, finance, and retail, we are not limited to any particular sector. We offer customized background check solutions for companies in any industry.",
    },
    {
        id: 4,
        question: "How do I get started with Background Checker?",
        answer:
            "Getting started is easy! You can either schedule a demo or contact our sales team to learn more about how our background screening solutions can benefit your business. We are happy to guide you through the process and answer any questions you may have.",
    },
    {
        id: 5,
        question: "What makes Background Checker different from other background check companies?",
        answer:
            "At Background Checker, we offer quick turnaround times, an in-house support team, and customized solutions for any industry. Unlike many background check companies that focus on a single sector, we provide services for businesses of all kinds, ensuring accurate and timely results every time.",
    },
    {
        id: 6,
        question: "How can I schedule a demo?",
        answer:
            "To schedule a demo or learn more about our services, simply visit our Get Started page, or contact our sales team directly to arrange a personalized demonstration of our background screening solutions.",
    }
];

const FAQs = () => {
    return (
        <section className="w-full h-full py-20 bg-[#F8F9FB]">
            <div className="container w-full">
                <div className='mb-12'>
                    <div className='text-center mb-2'>
                        <h1 className={`text-midNight sm:text-[46px] text-[38px] sm:leading-[55px] leading-[42px] font-bold `}>Question & Answer</h1>
                    </div>
                    <div className='max-w-[780px] mx-auto text-center'>
                        <p className='text-[#525252] text-base font-normal'>Find answers to common questions about our services and solutions.</p>
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
                                <AccordionTrigger className="text-midNight hover:no-underline sm:text-lg text-sm font-medium sm:px-5 px-3 py-5 text-start">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-midNight sm:text-base text-sm font-normal sm:px-5 px-3">
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
