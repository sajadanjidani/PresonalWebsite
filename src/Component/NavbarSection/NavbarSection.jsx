import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const NavbarSection = () => {

    const [menuStatus , setMenuStatus] = useState(false)

    const toggleMenu = () => {
        setMenuStatus(prveStatus => !prveStatus)
        console.log(menuStatus)
    }

    return(
        <div className="flex items-center justify-between h-14 px-7 rounded-lg bg-lightBgSection">
            <span className="text-2xl font-bold text-darkBgSection hover:cursor-pointer hover:text-themColor">TC</span>
            <ul className="hidden md:flex md:gap-9 lg:gap-12 font-danaMedium text-customeWhite child-hover:cursor-pointer child-hover:text-themColor">
                <li>خانه</li>
                <li>درباره من</li>
                <li>مهارت</li>
                <li>خدمات</li>
                <li>نمونه کار</li>
                <li>ارتباط</li>
            </ul>
            <button className="hidden md:block text-themColor hover:text-customeWhite">درخواست همکاری</button>
            <button onClick={() => toggleMenu()} className='md:hidden hover:text-themColor'><MenuIcon /></button>

            {/* menu mobile */}
            {menuStatus ? (
                <div className='absolute w-full h-full top-0 right-0'>
                    <div className='absolute w-3/5 h-full top-0 right-0 py-8 px-7 bg-darkBgSection'>
                        <ul className="grid gap-5 text-customeWhite child-hover:cursor-pointer child-hover:text-themColor child:text-lg">
                            <li>خانه</li>
                            <li>مهارت</li>
                            <li>ارتباط</li>
                            <li>خدمات</li>
                            <li>نمونه کار</li>
                            <li>درباره من</li>
                        </ul>
                    </div>
                    <div onClick={() => toggleMenu()} className='absolute w-2/5 h-full top-0 left-0 opacity-80 bg-lightBgSection'></div>
                </div>
            ) : ''}
        </div>
    )
}

export default NavbarSection