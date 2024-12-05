import React from 'react'
import { navlinks } from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../button';

interface HamburgerProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpenModal: () => void;
}

const NavbarResponsive: React.FC<HamburgerProps> = ({ setIsOpen, handleOpenModal }) => {
    const pathname = usePathname()
    return (
        <>
            <div className='bg-[#010101] w-full h-full'>
                <div className='container w-full h-full pb-4 flex flex-col justify-start items-start pt-[120px]'>
                    {
                        navlinks.map((item, index) => (
                            <Link
                                onClick={() => setIsOpen(false)}
                                key={index}
                                href={item.href}
                                className={`w-full text-center text-[#9F9F9F] hover:text-[#fff] font-light text-sm uppercase border-b border-[#fff] py-3 tracking-wide transition-colors duration-300 ${pathname === item.href && '!text-[#fff]'}`}>

                                {item.label}
                            </Link>
                        ))
                    }

                    <div className='flex gap-3 py-8 w-full justify-center'>
                        <Link onClick={handleOpenModal} href="#" className='text-[#1b1b1b]  tracking-wide text-2xl'>
                            <Button variant='outline'>
                                Track
                            </Button>
                        </Link>
                        <Link onClick={handleOpenModal} href="#" className='text-[#1b1b1b] tracking-wide text-2xl'>
                            <Button variant='primary'>
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarResponsive
