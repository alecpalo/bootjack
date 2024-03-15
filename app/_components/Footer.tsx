import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return(
        <footer className="bg-gray-800 w-full text-gray-500 py-10 lg:px-10 sm:px-6">
            <div className={"flex flex-col w-full justify-start space-y-4"}>
                <h1 className={"text-xl text-gray-200 font-bold"}>
                    Bootjack Ventures
                </h1>
                <div className={"text-lg"}>
                    <p>
                        P.O. Box 250534
                    </p>
                    <p>
                        Franklin, MI 48025
                    </p>
                </div>
                <div className={"flex space-x-5"}>
                    <FaFacebook size={35} href={""} className={"cursor-pointer hover:scale-105 duration-300 transition ease-in-out"}/>
                    <FaLinkedin size={35} href={""} className={"cursor-pointer hover:scale-105 duration-300 transition ease-in-out"}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;