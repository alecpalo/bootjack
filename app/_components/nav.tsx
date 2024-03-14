"use client";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {useEffect, useState} from "react";
import Image from "next/image";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [header, setHeader] = useState(false);

    const linkStyle = "ml-10 text-xl font-bold text-white";
    const underlineStyle = "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white";

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        if(window.scrollY >= 50) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    return(
        <nav className={`fixed z-20 w-full transition duration-400 ease-in-out transform h-24 text-white ${header ? 'bg-blue-950' : 'bg-white/0'}`}>
            <div className={"flex justify-between items-center h-full w-full px-4 2xl:px-16"}>
                <div className={""}>
                    <Image src={"/logo.png"} alt={"Logo"} width={100} height={200}></Image>
                </div>
                <div className={"hidden md:flex pr-10"}>
                    <ul className={"hidden sm:flex"}>
                        <Link href={"/"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                Home
                                <span className={underlineStyle}></span>
                            </li>
                        </Link>
                        <Link href={"/Portfolio"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                Portfolio
                                <span className={underlineStyle}></span>
                            </li>
                        </Link>
                        <Link href={"/Design"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                Design
                                <span className={underlineStyle}></span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className={"md:hidden cursor-pointer pl-24"}>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={menuOpen
                ? "fixed left-0 top-0 w-[65%] md:hidden h-screen padding-10 ease-in-out duration-500 bg-slate-400"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500 h-full "}
            >
                <div className={"flex w-full items-center justify-end"}>
                    <div onClick={handleNav} className={"cursor-pointer p-10"}>
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className={"flex-col py-4"}>
                    <ul className={""}>
                        <Link href={"/Home"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Home
                            </li>
                        </Link>
                        <Link href={"/OurTeams"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Portfolio
                            </li>
                        </Link>
                        <Link href={"/OurBoats"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Design
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
