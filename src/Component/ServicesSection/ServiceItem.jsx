const ServiceItem = (icon , title , description) => {
    return(
        <div className="w-full h-full px-7 rounded-lg text-customeWhite bg-darkBgSection">
            {/* iconbox */}
            <div className="w-28 h-28 mt-6 mx-auto bg-red-600">
                {icon}
            </div>
            {/* title */}
            <h1 className="mt-3 text-center">{title}</h1>
            {/* description */}
            <p className="leading-8 text-justify group-hover:text-cWhite transition-all duration-500 tracking-tighter">{description}</p>
            {/* btn */}
            <a href="/#" className="block mt-4 text-center border-2 py-2 w-36 mx-auto rounded-lg hover:border-themColor hover:text-themColor">درخواست</a>
        </div>
    )
}

export default ServiceItem