import PropertyHero from "@/app/_components/PropertyHero";

export default function Portfolio() {
    return(
        <main className={"bg-white"}>
            <div className={"h-32"}></div>
            <div className={"text-gray-800 w-full text-center pb-10"}>
                <h1 className={"text-2xl"}>
                    Maybe some quote about something IDK
                </h1>
            </div>
            <div className={"w-full h-full flex flex-wrap justify-center"}>
                <PropertyHero/>
                <PropertyHero/>
                <PropertyHero/>
                <PropertyHero/>
                <PropertyHero/>
                <PropertyHero/>
                <PropertyHero/>
            </div>
        </main>
    )
}