const ServiceItem = ({icon , title , description}) => {
    return(
        <div className="relative mt-7 md:mt-0 w-full h-[450px] md:py-0 md:h-full px-7 rounded-lg text-lightBgSection bg-darkBgSection">
            {/* iconbox */}
            <div className="flex justify-center items-center w-28 h-28 mt-6 mx-auto child:size-20 child:text-lightBgSection">
                {icon}
            </div>
            {/* title */}
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            {/* description */}
            <p className="leading-8 text-justify group-hover:text-cWhite transition-all duration-500 tracking-tighter mt-5 md:mt-2">{description}</p>
            {/* btn */}
            <a href="/#" className="absolute bottom-5 left-0 right-0 block mt-4 text-center border-2 border-lightBgSection py-2 w-36 mx-auto rounded-lg">درخواست</a>
        </div>
    )
}

export default ServiceItem