import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="bg-white w-full text-gray-800 text-center py-4 lg:px-20 sm:px-6">
            <div className={"w-full space-x-10 flex  text-black p-10"}>
                <div className={"flex flex-col md:w-3/4 w-full"}>
                    <img src={"/logo.png"} alt={""} className={"w-64 h-48"}></img>
                </div>
                <div className={"md:w-1/4 w-full flex justify-end"}>
                    <div className={"flex flex-col justify-between"}>
                        <p>
                            CHRISTINA OHAR-PALO
                        </p>
                        <div>
                            <p>
                                P.O. Box 250534
                            </p>
                            <p>
                                Franklin, MI 48025
                            </p>
                        </div>
                        <div>
                            <p>
                                Tel/Fax: (866)567-6733
                            </p>
                            <p>
                                Direct Line: (248)736-5846
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"border-2 border-blue-950"}>
            </div>
        </footer>
    );
}

export default Footer;