"use client";
import { motion } from "framer-motion";
import React from "react";

interface HamburgerProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const lineVariants = {
        closed: { strokeDasharray: "12 63", strokeDashoffset: 0, rotate: 0 },
        open: { strokeDasharray: "20 300", strokeDashoffset: -32.42 },
    };

    const svgVariants = {
        closed: { rotate: 0 },
        open: { rotate: -45 },
    };

    return (
        <label className="cursor-pointer lg:hidden block z-20">
            <input
                type="checkbox"
                checked={isOpen}
                onChange={toggleMenu}
                className="hidden"
            />
            <motion.svg
                viewBox="0 0 32 32"
                className="size-[36px] sm:size-[48px]"
                variants={svgVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <motion.path
                    className="line"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={lineVariants}
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.path
                    className="line"
                    d="M7 16 27 16"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </motion.svg>
        </label>
    );
};

export default Hamburger;
