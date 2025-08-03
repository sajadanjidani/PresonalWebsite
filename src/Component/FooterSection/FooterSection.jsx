import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-scroll';

const FooterSection = () => {
    return(
        <div className="grid justify-center w-full md:h-80 py-10 mx-auto bg-darkBgSection">
            <div className='mx-auto'>
                <p className='text-center text-4xl font-bold text-lightBgSection hover:text-themColor cursor-pointer duration-500'>TC</p>
                <ul className='grid grid-cols-3 grid-rows-2 md:flex mt-5 md:mt-10 gap-5 md:gap-10 text-customeWhite child-hover:text-themColor cursor-pointer child:text-center child:duration-500'>
                    <li><Link to='Home' smooth={true} duration={1600}>خانه</Link></li>
                    <li><Link to='AboutMe' smooth={true} duration={1400}>درباره من</Link></li>
                    <li><Link to='Skills' smooth={true} duration={1200}>مهارت</Link></li>
                    <li><Link to='Services' smooth={true} duration={1000}>خدمات</Link></li>
                    <li><Link to='Portfolio' smooth={true} duration={800}>نمونه کار</Link></li>
                    <li><Link to='Contact' smooth={true} duration={500}>ارتباط</Link></li>
                </ul>
                <ul className='flex mt-10 gap-10 justify-center'>
                    <li><TelegramIcon className='text-themColor hover:text-customeWhite cursor-pointer child:duration-500' style={{width : '40px', height : '40px'}}/></li>
                    <li><InstagramIcon className='text-themColor hover:text-customeWhite cursor-pointer child:duration-500' style={{width : '40px', height : '40px'}}/></li>
                    <li><WhatsAppIcon className='text-themColor hover:text-customeWhite cursor-pointer child:duration-500' style={{width : '40px', height : '40px'}}/></li>
                    <li><LinkedInIcon className='text-themColor hover:text-customeWhite cursor-pointer child:duration-500' style={{width : '40px', height : '40px'}}/></li>
                </ul>
                <ul className='grid md:flex mt-10 justify-center gap-5 md:gap-10 child:text-customeWhite child-hover:text-themColor'>
                    <li dir='ltr' className='flex gap-1 cursor-pointer child:duration-500'><FiPhone /> +98 993 689 3100</li>
                    <li className='flex gap-1 cursor-pointer rtl md:ltr child:duration-500'><MdOutlineMail />SajadAnjiidanii@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterSection