import HomePageTitle from "@/app/_components/HomePageTitle";
import Slider from "@/app/_components/Slider/Slider";
import Image from "next/image";

export default function Home() {
    return (
      <main>
          <HomePageTitle/>
          <div className={"bg-white text-gray-800 text-center w-full text-5xl font-extrabold py-10"}>
              - Featured Properties -
          </div>
          <div className={"bg-white py-10 flex justify-center mx-auto"}>
            <Slider/>
          </div>
      </main>
  );
}