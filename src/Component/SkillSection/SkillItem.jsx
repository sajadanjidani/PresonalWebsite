import { motion } from "framer-motion";

const SkillItem = ({imageSrc , skillName , skillPersent , customeClass}) => {
    return(
        <>
            <div className='flex gap-3 md:gap-5'>
                {/* imagebox */}
                <div className="w-20 md:w-24 h-20 md:h-24 border-2 border-white rounded-full overflow-hidden">
                    <img alt="logoSkill" src={imageSrc} className="w-full h-full" />
                </div>
                {/* title and persent */}
                <div className="grid w-[75%] md:w-[75%] py-9">
                    <span className="mr-3">{skillName}</span>
                    <div className="relative flex items-center w-full h-4 rounded-full overflow-hidden bg-lightBgSection">
                    <motion.div
                        className={`h-full bg-themColor ${customeClass}`}
                        style={{ width: skillPersent }}
                        initial={{ width: 0 }}
                        whileInView={{ width: skillPersent }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        >
                        <div className={`h-full bg-themColor ${customeClass}`} style={{width : 0}}></div>
                        </motion.div>
                        <span className="absolute left-2 text-xs">{skillPersent}</span>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default SkillItem