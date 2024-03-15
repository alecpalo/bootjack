import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

type Props = {
    clickNext: any;
    clickPrev: any;
    activeIdx: number;
}
const Description = ({clickNext, clickPrev, activeIdx}: Props) => {
    const desc = [{
        id: 1,
        title: "House1",
        desc: "This is a basic description of a house. A house has a roof, walls, windows and a door. It is a place that people can sleep and live."
    },{
        id: 2,
        title: "House2",
        desc: "This is a basic description of a house. A house has a roof, walls, windows and a door. It is a place that people can sleep and live."
    },{
        id: 3,
        title: "House3",
        desc: "This is a basic description of a house. A house has a roof, walls, windows and a door. It is a place that people can sleep and live."
    },{
        id: 4,
        title: "House4",
        desc: "This is a basic description of a house. A house has a roof, walls, windows and a door. It is a place that people can sleep and live."
    }]
    return(
        <div className={"grid place-items-start w-full bg-stone-200 relative rounded-tr-3xl rounded-br-3xl"}>
            {desc.map((elem, idx) => (
                <div key={idx} className={activeIdx === idx ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out` : "hidden"}>
                    <div className={"py-16 text-5xl font-extrabold text-black"}>
                        {elem.title}
                    </div>
                    <div className={"leading-relaxed font-medium text-base tracking-wide h-40 italic text-gray-600"}>
                        {elem.desc}
                    </div>
                    <button className={"bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10"}>
                        Learn More
                    </button>
                    <div className={"absolute bottom-1 w-full flex justify-center items-center"}>
                        <div onClick={clickPrev} className={"absolute bottom-2 right-10 cursor-pointer"}>
                            <FaChevronCircleLeft size={30} color={"gray"}/>
                        </div>
                        <div onClick={clickNext} className={"absolute bottom-2 right-2 cursor-pointer"}>
                            <FaChevronCircleRight size={30} color={"gray"}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Description;