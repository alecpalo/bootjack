import TitlePhoto from "@/app/_components/TitlePhoto";
import Slider from "@/app/_components/Slider/Slider";


export default function Home() {
    return (
      <main>
          <TitlePhoto/>
          <div className={"bg-white text-gray-800 w-full flex justify-center py-10"}>
              <div className={"w-3/4 text-left"}>
                  <h1 className={"text-4xl font-extrabold"}>
                      Who are we?
                  </h1>
                  <p className={"text-lg"}>
                      Description of what Bootjack Ventures is, blah blah blah
                  </p>
              </div>
          </div>
          <div className={"bg-white text-gray-800 text-center w-full text-5xl font-extrabold py-10"}>
              - Featured Properties -
          </div>
          <div className={"bg-white py-10 flex justify-center mx-auto"}>
            <Slider/>
          </div>
      </main>
  );
}