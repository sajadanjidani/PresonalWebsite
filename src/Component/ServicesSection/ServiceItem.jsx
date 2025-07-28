import { motion } from "framer-motion";
import { useState } from "react";

const ServiceItem = ({icon , title , description , defualtLoc , customeClass}) => {
    const [isVisible, setIsVisible] = useState(false);
    
    return(
        <motion.div
        onViewportEnter={() => setIsVisible(true)}
        viewport={{ once: true, amount: 0.3 }}
        className={`relative mt-7 lg:mt-0 w-full h-[500px] lg:h-full lg:py-0  px-7 rounded-lg text-lightBgSection bg-darkBgSection child:duration-500 cursor-pointer group ${
        isVisible ? customeClass : 'opacity-0' 
      }`}
    >
        {/* iconbox */}
        <div className="flex justify-center items-center w-28 h-28 mt-6 mx-auto child:size-20 child:text-lightBgSection group-hover:child:text-themColor child:duration-500">
            {icon}
        </div>
        {/* title */}
        <h1 className="text-2xl font-bold text-center group-hover:text-themColor">{title}</h1>
        {/* description */}
        <p className="leading-8 text-justify group-hover:text-customeWhite transition-all tracking-tighter mt-5 lg:mt-2">{description}</p>
            {/* btn */}
        <a href="/#" className="absolute bottom-5 left-0 right-0 block mt-4 text-center border-2 border-lightBgSection py-2 w-36 mx-auto rounded-lg group-hover:border-customeWhite group-hover:text-customeWhite hover:bg-lightBgSection">درخواست</a>
    </motion.div>
    )
}

export default ServiceItem