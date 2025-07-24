const NavbarSection = () => {
    return(
        <div className="flex items-center justify-between h-14 px-7 rounded-lg bg-lightBgSection">
            <span className="text-2xl font-bold text-darkBgSection hover:cursor-pointer hover:text-themColor">TC</span>
            <ul className="flex gap-10 font-danaMedium text-customeWhite child-hover:cursor-pointer child-hover:text-themColor">
                <li>خانه</li>
                <li>درباره من</li>
                <li>مهارت</li>
                <li>خدمات</li>
                <li>نمونه کار</li>
                <li>ارتباط</li>
            </ul>
            <button className="text-themColor hover:text-customeWhite">درخواست همکاری</button>
        </div>
    )
}

export default NavbarSection