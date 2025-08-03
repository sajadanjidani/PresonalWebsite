import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-scroll';

const NavbarSection = () => {

    const [menuStatus , setMenuStatus] = useState(false)

    const toggleMenu = () => {
        setMenuStatus(prveStatus => !prveStatus)
        console.log(menuStatus)
    }

    return(
        <div className="flex items-center justify-between w-[94%] mx-auto md:w-full h-14 px-7 rounded-lg bg-lightBgSection animate-utb">
            <span className="text-2xl font-bold text-darkBgSection hover:cursor-pointer hover:text-themColor duration-500">TC</span>
            <ul className="hidden md:flex md:gap-9 lg:gap-12 font-danaMedium text-customeWhite child-hover:cursor-pointer child-hover:text-themColor child:duration-500">
                <li><Link to='Home' smooth={true} duration={500}>خانه</Link></li>
                <li><Link to='AboutMe' smooth={true} duration={800}>درباره من</Link></li>
                <li><Link to='Skills' smooth={true} duration={1000}>مهارت</Link></li>
                <li><Link to='Services' smooth={true} duration={1200}>خدمات</Link></li>
                <li><Link to='Portfolio' smooth={true} duration={1400}>نمونه کار</Link></li>
                <li><Link to='Contact' smooth={true} duration={1600}>ارتباط</Link></li>
            </ul>
            <button className="hidden md:block text-themColor hover:text-customeWhite duration-500">درخواست همکاری</button>
            <button onClick={() => toggleMenu()} className='md:hidden hover:text-themColor'><MenuIcon /></button>

            {/* menu mobile */}
            {menuStatus ? (
                <div className='fixed w-full h-full top-0 right-0 z-50'>
                    <div className='absolute w-3/5 h-full top-0 right-0 py-8 px-7 bg-darkBgSection'>
                        <ul className="grid gap-5 text-customeWhite child-hover:cursor-pointer child-hover:text-themColor child:text-lg child:duration-500">
                            <li><Link to='Home' smooth={true} duration={500}>خانه</Link></li>
                            <li><Link to='Skills' smooth={true} duration={1000}>مهارت</Link></li>
                            <li><Link to='Contact' smooth={true} duration={1600}>ارتباط</Link></li>
                            <li><Link to='Services' smooth={true} duration={1200}>خدمات</Link></li>
                            <li><Link to='Portfolio' smooth={true} duration={1400}>نمونه کار</Link></li>
                            <li><Link to='AboutMe' smooth={true} duration={800}>درباره من</Link></li>
                        </ul>
                    </div>
                    <div onClick={() => toggleMenu()} className='absolute w-2/5 h-full top-0 left-0 opacity-80 bg-lightBgSection'></div>
                </div>
            ) : ''}
        </div>
    )
}

export default NavbarSection