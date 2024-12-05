"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Hamburger from './Hamburger'
import NavbarResponsive from './NavbarResponsive'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import { Button } from '../button'

export const navlinks = [
    { label: "home", href: "/" },
    { label: "about", href: "/#about" },
    { label: "services", href: "/#services" },
    { label: "contact", href: "/contact" },
]

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {
                isModalOpen && (
                    <section onClick={handleCloseModal} className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
                        <div onClick={(e) => e.stopPropagation()} className='container flex justify-center items-center'>
                            <div className='w-[550px] h-[300px] bg-white rounded-2xl p-4 flex flex-col justify-center items-center'>
                                <h1 className='sm:text-4xl text-3xl font-semibold tracking-wide uppercase font-[family-name:var(--font-Outfit)] mb-8'>
                                    comming soon
                                </h1>
                                <Button onClick={handleCloseModal} variant='heroBtn' size='lg' className='bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]'>OK</Button>
                            </div>
                        </div>
                    </section>
                )
            }
            <nav className='w-full fixed top-0 inset-x-0 z-20 bg-[#010101] shadow-lg'>
                <div className='container py-4 flex lg:flex-row flex-col lg:justify-between lg:items-center'>
                    <div className={`justify-between flex items-center  lg:w-max w-full`}>
                        <Link href="/">
                            <Image src="/images/logo.svg" alt="logo" width={170} height={170} priority />
                        </Link>
                        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div className={`${isOpen ? 'hidden' : 'lg:flex hidden'} xl:gap-8 gap-5`}>
                        {
                            navlinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`text-[#9F9F9F] hover:text-[#fff] text-center font-light text-sm uppercase tracking-wide transition-colors duration-300 ${pathname === item.href && '!text-[#fff]'}`}>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </div>
                    <div className={`${isOpen ? 'hidden' : 'lg:flex hidden'} gap-3`}>
                        <Link onClick={handleOpenModal} href="#" className='text-[#1b1b1b]  tracking-wide text-2xl'>
                            <Button variant='outline'>
                                Track
                            </Button>
                        </Link>
                        <Link onClick={handleOpenModal} href="#" className='text-[#1b1b1b]  tracking-wide text-2xl'>
                            <Button variant='primary'>
                                Sign In
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
                        className={`w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-10 bg-white ${isOpen ? 'flex lg:hidden' : 'hidden'}`}>

                        <NavbarResponsive setIsOpen={setIsOpen} handleOpenModal={handleOpenModal} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar