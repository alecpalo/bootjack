import Image from "next/image";
import Link from "next/link";

const PropertyHero = () => {
    return(
        <Link href={"/Portfolio/Home1"} className={"text-gray-800 flex flex-col space-y-2 p-5 cursor-pointer"}>
            <div className={"relative group"}>
                <div className={"overflow-hidden"}>
                    <Image src={"/houses/house1.jpg"} width={300} height={300} alt={"image"}
                           className={"aspect-square group-hover:scale-110 transition duration-300"}/>
                </div>
                <div className={"absolute inset-0 z-10 group-hover:bg-white/70 bg-white/0 transition ease-in-out w-full h-full flex items-center justify-center text-center"}>
                    <h1 className={"group-hover:block hidden underline"}>
                        Learn more
                    </h1>
                </div>
            </div>
            <h1 className={"text-lg"}>
                Title of thing
            </h1>
        </Link>
    );
}

export default PropertyHero;