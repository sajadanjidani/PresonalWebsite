const FormSection = () => {
    return(
        <div className="w-[95%] md:w-[85%] h-[80%] my-4 mx-auto">
            <form className="w-full h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-3 md:gap-4 w-full h-auto md:h-36">
                    <input type="text" className="h-16 bg-darkBgSection rounded-lg px-5"  placeholder="نام"/>
                    <input type="text" className="h-16 bg-darkBgSection rounded-lg px-5"  placeholder="نام خانوادگی"/>
                    <input type="text" className="h-16 bg-darkBgSection rounded-lg px-5"  placeholder="موضوع"/>
                    <input type="text" className="h-16 bg-darkBgSection rounded-lg px-5"  placeholder="شماره همراه"/>
                </div>
                <input type="text" className="w-full h-16 mt-3 bg-darkBgSection rounded-lg px-5" placeholder="ایمیل"/>
                <textarea className="w-full h-56 mt-3 resize-none bg-darkBgSection rounded-lg p-5" placeholder="پیام"/> <br/>
                <input type="submit" value="ارسال" className="w-full h-14 text-customeWhite mt-1 rounded-lg bg-darkBgSection hover:text-themColor hover:cursor-pointer"/>
            </form>
        </div>
    )
}

export default FormSection