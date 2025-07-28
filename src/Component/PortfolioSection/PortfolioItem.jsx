import { IoIosLink } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

const PortfolioItem = ({ imageSrc, title, customeClass, status }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative w-full h-52 md:h-32 lg:h-full rounded-xl bg-lightBgSection cursor-pointer overflow-hidden group font-danaRegular ${
        isVisible ? customeClass : "opacity-0"
      }`}
    >
      {status ? (
        <>
          <img
            alt="protfolioImage"
            src={imageSrc}
            className="absolute w-full h-full top-0 right-0"
          />
          <div className="hidden group-hover:grid justify-center items-center relative w-full h-full z-50 child:duration-500">
            <h3 className="self-end text-3xl font-bold">{title}</h3>
            <IoIosLink className="self-start mx-auto size-10" />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <span
            dir="ltr"
            className="z-50 group-hover:text-darkBgSection transition-all duration-500"
          >
            comming soon . . .
          </span>
        </div>
      )}
      <div className="hidden group-hover:block absolute top-0 right-0 group-hover:z-40 w-full h-full bg-gradient-to-b from-themColor via-blue-500 to-endliner transition-all duration-1000"></div>
    </motion.div>
  );
};

export default PortfolioItem;
