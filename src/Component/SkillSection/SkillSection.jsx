const SkillSection = ({children}) => {
    return(
        <div className="grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-20 w-[90%] h-[60%] mt-10 md:pr-16 lg:mt-20 mx-auto">
            {children}
        </div>
    )
}

export default SkillSection