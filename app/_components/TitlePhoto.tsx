type Props = {
    image: string,
    text: string,
}


const TitlePhoto = ({image, text}: Props) => {
    return(
        <>
            <div className={"h-24"}></div>
            <div className={"w-full h-64 relative"}>
                <img src={image} alt={""} className={"object-cover w-full h-64"}/>
                <div className={"inset-0 bg-gray-800/40 absolute h-full"}></div>
                <div className={"inset-0 w-full h-full flex absolute items-center justify-center"}>
                    <h1 className={"text-4xl text-white"}>
                        {text}
                    </h1>
                </div>
            </div>
        </>
    );
}

export default TitlePhoto;