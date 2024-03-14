'use client';

import { Carousel } from 'flowbite-react';
import Image from "next/image";

export default function CustomCarousel() {
    return (
        <Carousel>
            <div className={"w-full h-full"}>
                <Image src="/houses/house1.jpg" alt="..." fill={true} className={"object-cover"}/>
            </div>

            <img src="/houses/house2.jpeg" alt="..." className={"object-cover"}/>
            <img src="/houses/house3.jpg" alt="..." className={"object-cover"}/>
            <img src="/houses/house4.jpg" alt="..." className={"object-cover"}/>
        </Carousel>
    );
}