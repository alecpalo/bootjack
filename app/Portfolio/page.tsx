import PropertyHero from "@/app/_components/PropertyHero";

export default function Portfolio() {
    return(
        <main className={"bg-white"}>
            <div className={"h-32"}></div>
            <div>

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