const SkillItem = ({imageSrc , skillName , skillPersent}) => {
    return(
        <div className="flex gap-5">
            {/* imagebox */}
            <div className="w-28 h-28 border-2 border-white rounded-full overflow-hidden">
                <img alt="logoSkill" src={imageSrc} className="w-full h-full" />
            </div>
            {/* title and persent */}
            <div className="grid w-[80%] py-9">
                <span className="mr-3">{skillName}</span>
                <div className="relative flex items-center w-full h-4 rounded-full overflow-hidden bg-lightBgSection">
                    <div className="h-full bg-themColor" style={{width : skillPersent}}></div>
                    <span className="absolute left-2 text-xs">{skillPersent}</span>
                </div>
            </div>
        </div>
    )
} 

export default SkillItem