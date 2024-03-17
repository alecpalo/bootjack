import TitlePhoto from "@/app/_components/TitlePhoto";

export default function Contact() {
    return(
        <main className={"bg-white min-h-screen "}>
            <TitlePhoto image={"/titlephoto.png"} text={"Contact Us"}/>
            <div className={"text-gray-800 h-full w-full flex justify-center"}>
                <div className={"lg:w-3/4 px-10 w-full lg:px-0 flex-col justify-start py-10 space-y-3"}>
                    <h1 className={"text-2xl"}>
                        Contact Info
                    </h1>
                    <p>
                        Basic Contact Info with stuff
                    </p>
                    <p>
                        Address with PO box and stuff
                    </p>
                </div>
            </div>
        </main>
    );
}