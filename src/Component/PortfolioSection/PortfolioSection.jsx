const PortfolioSection = ({children}) => {
    return(
        <div className="w-[90%] h-[65%] py-10 md:py-0 mt-5 md:mt-24 mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2 gap-5">
            {children}
        </div>
    )
}

export default PortfolioSection