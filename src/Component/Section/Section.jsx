const Section = ({id , children , bgColor , custome}) => {
    return(
        <div id={id} className="h-auto lg:h-screen text-white overflow-hidden" style={{backgroundColor : bgColor , height : custome}}>
            {children}
        </div>
    )
}

export default Section