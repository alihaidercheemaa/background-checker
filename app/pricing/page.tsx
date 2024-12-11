import HeroSectionTwo from '@/components/ui/global/HeroSectionTwo'
import Pricing from '@/components/ui/pricing/Pricing'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Pricing | Stay Updated with the Latest from Background Checker",
    description:
        "Discover the latest news, insights, and updates from Background Checker. Read our blog to stay informed about technology trends and company innovations.",
    metadataBase: new URL("http://localhost:3000/blogs"),
};

const page = () => {
    return (
        <>
            <HeroSectionTwo description='Contact us today to discover how our customized background check solutions enhance your hiring process and ensure a safer workplace.' heroBg='contactBG.jpg' heroImg='pricingImg.svg' title='Pricing' />
            <Pricing />
        </>
    )
}

export default page