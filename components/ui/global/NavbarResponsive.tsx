import React from 'react'
import { navlinks } from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../button';

interface HamburgerProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarResponsive: React.FC<HamburgerProps> = ({ setIsOpen }) => {
    const pathname = usePathname()
    return (
        <>
            <div className='bg-white w-full h-full'>
                <div className='container w-full h-full pb-4 flex flex-col justify-start items-start pt-[100px]'>
                    {
                        navlinks.map((item, index) => (
                            <Link
                                onClick={() => setIsOpen(false)}
                                key={index}
                                href={item.href}
                                className={`resp-navlinks ${pathname === item.href && '!text-primary-100'}`}>

                                {item.label}
                            </Link>
                        ))
                    }

                    <div className='flex gap-3 py-8 w-full justify-center'>
                    <Link href="#">
                            <Button variant='secondary'>
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
            </div>
        </>
    )
}

export default NavbarResponsive
