const ServicesSection = ({children}) => {
    return(
        <div className="grid md:mt-5 md:gap-5 md:grid-rows-2 md:grid-cols-2 lg:flex lg:gap-10 lg:w-[94%] h-[80%] mt-0 lg:mt-6 pt-1 pb-5 px-5 lg:px-10 mx-auto md:last:child:mt-[10px] md:last:child:mr-[180px] lg:last:child:mt-0 lg:last:child:mr-0">
            {children}
        </div>
    )
}

export default ServicesSection