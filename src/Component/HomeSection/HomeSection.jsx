import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomeSection = ({children}) => {
    return(
        <div className="w-full h-full py-4 md:py-7 md:px-10">
            {children}
            <div className="grid md:grid-cols-2 w-[96%] h-[90%] md:mt-4 mx-auto">
                {/* contentbox */}
                <div className='flex flex-col justify-center items-center text-center md:text-right md:items-start gap-2 md:mr-5'>
                    <p className='text-xl'>سلام من <br/>
                    سجاد انجیدنی هستم</p>
                    <h3 className='text-2xl text-themColor'>برنامه نویس فرانت اند</h3>
                    <div className='flex gap-9 mt-2'>
                        <TelegramIcon className='text-themColor hover:text-customeWhite hover:cursor-pointer' style={{width : '40px' , height : '40px'}}/>
                        <InstagramIcon className='text-themColor hover:text-customeWhite hover:cursor-pointer' style={{width : '40px' , height : '40px'}}/>
                        <WhatsAppIcon className='text-themColor hover:text-customeWhite hover:cursor-pointer' style={{width : '40px' , height : '40px'}}/>
                        <LinkedInIcon className='text-themColor hover:text-customeWhite hover:cursor-pointer' style={{width : '40px' , height : '40px'}}/>
                    </div>
                    <a href='/#' className='inline text-center w-72 py-2 mt-3 border-2 rounded-lg text-themColor border-themColor hover:text-darkBgSection hover:bg-themColor'>درخواست همکاری</a>
                </div>
                {/* imagebox */}
                <div className='grid justify-center items-center'>
                    <div className='flex justify-center items-center w-96 h-9w-96 rounded-full bg-lightBgSection'>
                        <div className='w-80 h-80  rounded-full overflow-hidden bg-themColor'>
                            <img alt='me' src='/image/myPic/exampleMe.png'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection