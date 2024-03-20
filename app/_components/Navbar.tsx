"use client";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {useEffect, useState} from "react";
import Image from "next/image";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkStyle = "ml-10 text-xl font-bold";
    const underlineStyle = "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800";

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <nav className={`absolute z-20 w-full transition duration-400 ease-in-out transform h-24 bg-white text-gray-800`}>
            <div className={"flex justify-between items-center h-full w-full px-4 2xl:px-16"}>
                <div className={""}>
                    <Link href={"/"}>
                        <Image src={"/logo.png"} alt={"Logo"} width={100} height={100}></Image>
                    </Link>
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
                        <Link href={"/About"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                About
                                <span className={underlineStyle}></span>
                            </li>
                        </Link>
                        <Link href={"/Contact"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                Contact
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
                        <Link href={"/"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Home
                            </li>
                        </Link>
                        <Link href={"/Portfolio"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Portfolio
                            </li>
                        </Link>
                        <Link href={"/Design"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Design
                            </li>
                        </Link>
                        <Link href={"/About"} onClick={handleNav}>
                            <li className={linkStyle}>
                                About
                            </li>
                        </Link>
                        <Link href={"/Contact"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
