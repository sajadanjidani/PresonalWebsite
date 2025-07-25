const Section = ({children , bgColor}) => {
    return(
        <div className="h-auto md:h-screen text-white overflow-hidden" style={{backgroundColor : bgColor}}>
            {children}
        </div>
    )
}

export default Section