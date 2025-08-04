import TelegramIcon from '@mui/icons-material/Telegram';
import { FiGithub } from "react-icons/fi";

import { Link } from 'react-scroll';

const HomeSection = ({children , setSubjectForm}) => {
    return(
        <div className="w-full h-full py-4 md:py-7 md:px-10">
            {children}
            <div className="grid md:grid-cols-2 w-[96%] h-[90%] md:mt-4 mx-auto" style={{margin : 0}}>
                {/* contentbox */}
                <div className='flex flex-col justify-center items-center mt-10 md:mt-0 text-center md:text-right md:items-start gap-2 md:mr-5 animate-rtl'>
                    <p className='text-xl leading-10 md:leading-8 '>سلام من <br/>
                    سجاد انجیدنی هستم</p>
                    <h3 className='text-2xl text-themColor'>برنامه نویس فرانت اند</h3>
                    <div className='flex items-center gap-6 mt-2'>
                        <a href='https://github.com/sajadanjidani/'><FiGithub className='text-themColor hover:text-customeWhite hover:cursor-pointer child:duration-500' style={{width : '33px' , height : '33px'}}/></a>
                        <a href='https://t.me/sajadanjiidanii'><TelegramIcon className='text-themColor hover:text-customeWhite hover:cursor-pointer child:duration-500' style={{width : '40px' , height : '40px'}}/></a>
                    </div>
                    <Link onClick={() => setSubjectForm('درخواست همکاری')} className='inline text-center w-72 py-2 mt-3 border-2 cursor-pointer rounded-lg text-themColor border-themColor hover:text-darkBgSection hover:bg-themColor duration-500' to='Contact' smooth={true} duration={1600}>درخواست همکاری</Link>
                </div>
                {/* imagebox */}
                <div className='grid justify-center items-center my-16 md:pt-10 lg:pt-0 md:my-0 animate-btu'>
                    <div className='flex justify-center items-center w-96 rounded-full bg-lightBgSection'>
                        <div className='w-80 h-80  rounded-full overflow-hidden bg-themColor '>
                            <img alt='me' src='/image/myPic/exampleMe.png'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection