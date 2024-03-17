import Image from "next/image";
import TitlePhoto from "@/app/_components/TitlePhoto";

export default function About() {
    return(
        <main className={"bg-white text-gray-800"}>
            <TitlePhoto image={"/titlephoto.png"} text={"About Us"}/>
            <div className={"w-full flex justify-center py-10"}>
                <div className={"lg:w-3/4 w-full text-left flex flex-col lg:flex-row px-5 lg:h-96 h-full lg:space-x-10"}>
                    <div className={"lg:w-2/3 w-full space-y-5 flex flex-col justify-center items-center"}>
                        <h1 className={"text-4xl font-bold w-full flex justify-start"}>
                            Who are we?
                        </h1>
                        <p className={"text-lg"}>
                            We are this thing, we do this because of this reason. I need to add a lot of text here so
                            that this can look somewhat decent. I dont know what to put there but this will be something
                            for sure. I odnt know what to put here, blah blah blah blah blah. Ths is s something
                        </p>
                        <p className={"text-lg"}>
                            We are this thing, we do this because of this reason. I need to add a lot of text here so
                            that this can look somewhat decent. I dont know what to put there but this will be something
                            for sure. I odnt know what to put here, blah blah blah blah blah. Ths is s something
                        </p>
                    </div>
                    <div className={"w-1/3 h-full relative"}>
                        <Image src={"/titlephoto.png"} fill={true} alt={"image"} className={"rounded-xl"}/>
                    </div>
                </div>
            </div>
            <div className={"flex w-full justify-center py-10"}>
                <div className={"flex-col w-1/2 justify-center space-y-5 py-10 px-20 shadow-2xl rounded-2xl"}>
                    <h1 className={"text-5xl"}>
                        The coldest winter I ever spent was a summer in San Fransisco
                    </h1>
                    <p className={"text-4xl italic"}>
                        Mark Twain
                    </p>
                </div>
            </div>
            <div className={"w-full flex justify-center py-10"}>
                <div
                    className={"lg:w-3/4 w-full text-left flex flex-col lg:flex-row px-5 lg:h-96 h-full lg:space-x-10"}>
                    <div className={"w-1/3 h-full relative"}>
                        <Image src={"/titlephoto.png"} fill={true} alt={"image"} className={"rounded-xl"}/>
                    </div>
                    <div className={"lg:w-2/3 w-full space-y-5 flex flex-col justify-center items-center"}>
                        <h1 className={"text-4xl font-bold w-full flex justify-start"}>
                            Our Philosophy
                        </h1>
                        <p className={"text-lg"}>
                            We are this thing, we do this because of this reason. I need to add a lot of text here so
                            that this can look somewhat decent. I dont know what to put there but this will be something
                            for sure. I odnt know what to put here, blah blah blah blah blah. Ths is s something
                        </p>
                        <p className={"text-lg"}>
                            We are this thing, we do this because of this reason. I need to add a lot of text here so
                            that this can look somewhat decent. I dont know what to put there but this will be something
                            for sure. I odnt know what to put here, blah blah blah blah blah. Ths is s something
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}