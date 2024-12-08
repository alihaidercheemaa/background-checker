"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Hamburger from './Hamburger'
import NavbarResponsive from './NavbarResponsive'
import { motion, AnimatePresence } from "framer-motion";
// import Image from 'next/image'
import { Button } from '../button'

export const navlinks = [
    { label: "home", href: "/" },
    { label: "about", href: "#" },
    { label: "services", href: "#" },
    { label: "industries", href: "#" },
    { label: "blogs", href: "/blogs" },
    { label: "pricing", href: "#" },
    { label: "contact", href: "/contact" },
]

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>

            <nav className={`${scroll ? 'bg-white shadow-lg' : 'bg-transparent'} ${isOpen && 'shadow-lg'} w-full fixed top-0 inset-x-0 z-30`}>
                <div className='container py-4 flex lg:flex-row flex-col lg:justify-between lg:items-center'>
                    <div className={`justify-between flex items-center  lg:w-max w-full`}>
                        <Link href="/">
                            {/* <Image src="/images/logo.svg" alt="logo" width={170} height={170} priority /> */}
                            <h1 className={`text-primary-100 text-[43px] leading-[53px] font-bold`}>Logo</h1>
                        </Link>
                        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div className={`${isOpen ? 'hidden' : 'lg:flex hidden'} gap-4`}>
                        {
                            navlinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`navlinks ${pathname === item.href && '!text-primary-100 !font-normal'} ${scroll ? 'text-midNight !font-normal' : 'text-white'}
                                    `}>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </div>
                    <div className={`${isOpen ? 'hidden' : 'lg:flex hidden'} gap-3 `}>
                        <Link href="#">
                            <Button variant={scroll ? 'secondary' : 'outline'}>
                                Login
                            </Button>
                        </Link>
                        <Link href="#">
                            <Button variant='primary'>
                                Sign up
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '0' }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className={`w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-20 bg-white ${isOpen ? 'flex lg:hidden' : 'hidden'}`}>

                        <NavbarResponsive setIsOpen={setIsOpen} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar