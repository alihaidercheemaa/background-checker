import GoogleMap from '@/components/ui/contact/GoogleMap'
import HeroSection from '@/components/ui/contact/HeroSection'
import OfficeAddress from '@/components/ui/contact/OfficeAddress'
import React from 'react'

const page = () => {
    return (
        <>
            <HeroSection />
            <OfficeAddress />
            <GoogleMap />
        </>
    )
}

export default page