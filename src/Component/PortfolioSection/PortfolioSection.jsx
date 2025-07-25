const PortfolioSection = ({children}) => {
    return(
        <div className="w-[90%] h-[65%] mt-24 mx-auto grid grid-cols-3 grid-rows-2 gap-5">
            {children}
        </div>
    )
}

export default PortfolioSection