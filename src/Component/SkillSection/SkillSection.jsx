const SkillSection = ({children}) => {
    return(
        <div className="grid md:grid-cols-2 md:grid-rows-3 md:gap-20 w-[90%] h-[60%] mt-10 md:mt-20 mx-auto">
            {children}
        </div>
    )
}

export default SkillSection