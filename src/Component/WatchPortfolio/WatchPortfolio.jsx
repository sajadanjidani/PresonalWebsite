import { FaEye } from "react-icons/fa";


const WatchPortfolio = ({videoAddress , size , imageAddress}) => {
    return(
        <a href={`${videoAddress}`}>
            <div className="grid w-full">
                <span className="block text-center mb-5">{size}</span>
                <div className="w-[90%] lg:w-96 h-48 lg:h-52 mx-auto rounded-lg brightness-90 hover:brightness-100 cursor-pointer overflow-hidden bg-darkBgSection relative group">
                    <img src={imageAddress}/>
                    <div className="hidden group-hover:block absolute top-0 right-0 group-hover:z-40 w-full h-full bg-gradient-to-b from-themColor via-blue-500 to-endliner transition-all duration-1000">
                        <div className="hidden group-hover:grid justify-center items-center relative w-full h-full z-50 child:duration-500">
                            <h3 className="self-end text-3xl font-bold">Watch</h3>
                            <FaEye className="self-start mx-auto size-10" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default WatchPortfolio