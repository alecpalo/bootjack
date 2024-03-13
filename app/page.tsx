import Image from "next/image";
import Navbar from "./_components/nav";
import Footer from "./_components/footer";

export default function Home() {
  return (
      <>
        <Navbar/>
        <main>
            <div className={"w-screen h-screen py-10 items-center justify-center flex"}>
                <Image src={"/bg1.png"} alt={""} fill={true}className={"object-cover"}></Image>
                <div className={"w-full h-full z-10 flex flex-col justify-center space-y-5 pl-5 shadow-2xl"}>
                    <h1 className={"text-6xl font-bold"}>
                        THIS IS A GOOD
                    </h1>
                    <p className={"text-2xl"}>
                        QUOTE THAT YOU WANT TO YOSUE
                    </p>
                </div>

            </div>
            <div>
                <p>
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                </p>
            </div>
            <p className={"py-72"}>
                test
            </p>
        </main>
        <Footer/>
      </>
  );
}
