import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";


const FooterSection = () => {
    return(
        <div className="grid justify-center w-full md:h-80 py-10 mx-auto bg-darkBgSection">
            <div className='mx-auto'>
                <p className='text-center text-4xl font-bold text-lightBgSection hover:text-themColor cursor-pointer duration-500'>TC</p>
                <ul className='grid grid-cols-3 grid-rows-2 md:flex mt-5 md:mt-10 gap-5 md:gap-10 text-customeWhite child-hover:text-themColor cursor-pointer child:text-center child:duration-500'>
                    <li>خانه</li>
                    <li>درباره من</li>
                    <li>مهارت</li>
                    <li>خدمات</li>
                    <li>نمونه کار</li>
                    <li>ارتباط</li>
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