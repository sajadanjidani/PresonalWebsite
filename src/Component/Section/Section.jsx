const Section = ({children , bgColor}) => {
    return(
        <div className="h-auto lg:h-screen text-white overflow-hidden" style={{backgroundColor : bgColor}}>
            {children}
        </div>
    )
}

export default Section