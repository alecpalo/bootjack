import React from "react";
import Image from "next/image"


const HomePageTitle = () => {
    return (
        <div className='w-full h-screen'>
            <Image src={"/titlephoto.png"} alt={"title photo"} fill={true} className={"object-cover"}></Image>
            <div className="absolute inset-0 flex flex-col justify-center w-1/2 px-10 pb-20 space-y-5">
                <h1 className="text-white lg:text-6xl md:text-4xl text-2xl font-bold">
                    Buy land, they aren&apos;t making more of it
                </h1>
                <p className={"text-5xl font-bold italic"}>
                    Mark Twain
                </p>
            </div>
        </div>
    );
}

export default HomePageTitle;