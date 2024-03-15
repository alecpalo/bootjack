"use client";
import Description from "@/app/_components/Slider/Description";
import react, {useEffect, useState} from 'react';
import Image from "next/image";

const Slider = () => {
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        "/houses/house1.jpg",
        "/houses/house2.jpeg",
        "/houses/house3.jpg",
        "/houses/house4.jpg",
    ]
    const clickNext = () => {
        activeImage === 3 ? setActiveImage(0) : setActiveImage(activeImage + 1)
    };

    const clickPrev = () => {
        activeImage === 0 ? setActiveImage(3) : setActiveImage(activeImage - 1)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage, clickNext]);

    return(
        <div className={"flex justify-center w-3/4 h-full mx-auto m-w-5xl shadow-2xl rounded-2xl"}>
            <div className={"w-full flex justify-center items-center gap-4 transition-transform h-[80vh] ease-in-out duration-500 rounded-2xl bg-stone-200"}>
                {images.map((image, idx) => (
                    <div key={idx} className={`${idx === activeImage ? "block w-full object-cover transition-all h-[80vh] duration-500 ease-in-out" : "hidden"}`}>
                        <Image src={image} alt={"image"} width={800} height={400} className={"rounded-lg w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"}/>
                    </div>
                ))}
                <Description clickNext={clickNext} clickPrev={clickPrev} activeIdx={activeImage}/>
            </div>
        </div>
    );
}

export default Slider;