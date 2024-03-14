import Image from "next/image";
import Navbar from "./_components/nav";
import Footer from "./_components/footer";
import CustomCarousel from "./_components/Carousel"

export default function Home() {
  return (
      <>
          <Navbar/>
          <main>
              <div className={"w-screen h-screen py-10 items-center justify-center flex"}>
                  <Image src={"/titlephoto.png"} alt={""} fill={true} className={"object-cover"}></Image>
                  <div className={"w-full h-full z-10 flex flex-col justify-center space-y-5 pl-5 shadow-2xl"}>
                      <h1 className={"text-6xl font-bold"}>
                          THIS IS A GOOD
                      </h1>
                      <p className={"text-2xl"}>
                          QUOTE THAT YOU WANT TO USE
                      </p>
                  </div>
              </div>
              <div className="relative w-full h-full">
                  <Image src="/OurBoats.JPG" alt="temp" fill={true} className={"object-cover"}/>
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute top-8 left-10 py-3">
                      <h2 className="md:text-4xl text-2xl font-bold text-white"> Our Purpose </h2>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center lg:px-80 md:px-20 px-2">
                      <p className="text-center md:text-2xl text-white">
                          Michigan Electric Boat was established for the purpose of advancing sustainable technology and
                          promoting its capabilities. Our members come from all walks of life, but we all share one
                          important purpose:
                      </p>
                      <p className="text-center md:text-2xl text-white pt-5">
                          As the next generation of engineers, we challenge ourselves to implement sustainable
                          technologies and revolutionize the boating experience.
                      </p>
                  </div>
              </div>
              <div className={"bg-white w-full h-full"}>
                  <CustomCarousel/>
              </div>
          </main>
          <Footer/>
      </>
  );
}
