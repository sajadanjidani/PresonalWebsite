import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import { portfolioInfos } from './../../data'
// import icon
import { IoIosArrowBack } from "react-icons/io";
// import Component
import Section from "../Section/Section"
import WatchPortfolio from "../WatchPortfolio/WatchPortfolio";

const PortfolioPage = () => {

    const param = useParams()
    const [portfolio , setPortfolio] = useState(portfolioInfos)
    const index = param.portfolioId - 1

    return(
        <>
            <Section bgColor='#323946'>
                <div className="flex justify-between items-center w-[96%] h-16 rounded-lg mt-5 py-5 px-10 mx-auto bg-darkBgSection">
                    <h1 className="text-2xl font-bold hover:cursor-pointer text-lightBgSection hover:text-themColor duration-500">TC</h1>
                    <span className="hidden lg:block text-themColor hover:text-customeWhite text-sm cursor-pointer duration-500"><Link to='/'>برگشت به خانه</Link></span>
                    <Link to='/' className="block lg:hidden text-lightBgSection hover:text-themColor cursor-pointer duration-500"><IoIosArrowBack className="size-7"/></Link>
                </div>
                <div className="grid items-center justify-items-center grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-2 w-full h-full py-10 lg:py-20">
                    <WatchPortfolio videoAddress={portfolio[index].LP} size='سایز لپتاپ و مانیتور' imageAddress={portfolio[index].imageSrc} />
                    <WatchPortfolio videoAddress={portfolio[index].TB} size='سایز تبلت' imageAddress={portfolio[index].imageSrc} />
                    <WatchPortfolio videoAddress={portfolio[index].MB} size='سایز موبایل' imageAddress={portfolio[index].imageSrc} />
                </div>
            </Section>
        </>
    )
}

export default PortfolioPage