import { useState } from "react"
// import icon
import { HiBugAnt } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";

// import component
import Section from "../Section/Section"
import HomeSection from "../HomeSection/HomeSection"
import NavbarSection from "../NavbarSection/NavbarSection"
import TitleSection from "../TitleSection/TitleSection"
import AboutSection from "../AboutSection/AboutSection"
import SkillSection from "../SkillSection/SkillSection"
import SkillItem from "../SkillSection/SkillItem"
import ServicesSection from "../ServicesSection/ServicesSection"
import ServiceItem from "../ServicesSection/ServiceItem"
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import PortfolioItem from "../PortfolioSection/PortfolioItem";
import FormSection from "../FormSection/FormSection";
import FooterSection from "../FooterSection/FooterSection";

const HomePage = () => {

    const darkBgSection = '#1f242d'
    const lightBgSection = '#323946'

    const [skillInfo , setSkillInfo] = useState([
        {id : 1 , imageSrc : '/image/mySkills/htmlImage.svg', skillName : 'HTML', skillPersent : "90%", customeClass : 'animate-Skills90'},
        {id : 2 , imageSrc : '/image/mySkills/cssImage.svg', skillName : 'CSS', skillPersent : "80%", customeClass : 'animate-Skills80'},
        {id : 3 , imageSrc : '/image/mySkills/jsImage.svg', skillName : 'JS', skillPersent : "80%", customeClass : 'animate-Skills80'},
        {id : 4 , imageSrc : '/image/mySkills/React.png', skillName : 'React', skillPersent : "80%", customeClass : 'animate-Skills80'},
        {id : 5 , imageSrc : '/image/mySkills/tailwindImage.svg', skillName : 'Tailwind', skillPersent : "75%", customeClass : 'animate-Skills75'},
        {id : 6 , imageSrc : '/image/mySkills/bootstrap.png', skillName : 'Bootstrap', skillPersent : "70%", customeClass : 'animate-Skills70'},
    ])

    const [serviceInfo , setServiceInfo] = useState([
        {id : 1 , title : 'دیباگ سایت' , customeClass : 'animate-rtl' , description : 'آیا سایتتون با مشکل روبروه؟ ارورهای عجیب و غریب، صفحات سفید، یا سرعت پایین کلافه‌تون کرده؟ نگران نباشید! من اینجام تا مشکل سایتتون رو پیدا کنم و مثل یه جراح ماهر، خطاهای کدتون رو برطرف کنم. با دیباگ حرفه‌ای، سایتتون رو به بهترین شکل ممکن اجرا کنید و تجربه کاربری بی‌نظیری رو برای بازدیدکنندگانتون فراهم کنید. ' , icon : <HiBugAnt />},
        {id : 2 , title : 'توسعه سایت' , customeClass : 'animate-btu' , description : 'از سایت‌های فروشگاهی شیک و مدرن تا وبلاگ‌های جذاب و پرمحتوا، من هر نوع سایتی رو که تصورش رو بکنید، می‌تونم براتون طراحی و توسعه بدم. کافیه ایده‌تون رو با من در میون بذارید، و من با استفاده از آخرین تکنولوژی‌های روز دنیا، یه سایت بی‌نظیر و کاربرپسند براتون خلق می‌کنم. ' , icon : <FaCode />},
        {id : 3 , title : 'بازتوسعه سایت' , customeClass : 'animate-ltr' , description : 'یه سایت آماده دارید که دیگه قدیمی شده و نیاز به تغییر داره؟ یا می‌خواید امکانات جدیدی بهش اضافه کنید؟ من می‌تونم سایتتون رو از نو بسازم و با یه طراحی مدرن و جذاب، و امکانات پیشرفته، یه سایت کاملاً جدید و منطبق با نیازهای روزتون تحویلتون بدم. ' , icon : <FaPencilAlt />}
    ])

    const [portfolioInfo , setPortfolioInfo] = useState([
        {id : 1 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-rtl' , stutus : true},
        {id : 2 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-utb' , stutus : false},
        {id : 3 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-ltr' , stutus : false},
        {id : 4 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-rtl' , stutus : false},
        {id : 5 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-btu' , stutus : false},
        {id : 6 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-ltr' , stutus : false},
    ])

    return(
        <>
            {/* Home Section */}
            <Section id='Home' bgColor={darkBgSection}> 
                <HomeSection> 
                    <NavbarSection />
                </HomeSection>
            </Section>
            {/* About Me */}
            <Section id='AboutMe' bgColor={lightBgSection}> 
                <TitleSection Title='درباره' bgColor={darkBgSection} />
                <AboutSection />
            </Section>
            {/* Skills Section */}
            <Section id='Skills' bgColor={darkBgSection}> 
                <TitleSection Title='مهارت' bgColor={lightBgSection} />
                <SkillSection>
                    {skillInfo.map((skill) => (
                        <SkillItem key={skill.id} skillName={skill.skillName} skillPersent={skill.skillPersent} imageSrc={skill.imageSrc} customeClass={skill.customeClass}/>
                    ))}
                </SkillSection>
            </Section>
            {/* Services Section */}
            <Section id='Services' bgColor={lightBgSection}> 
                <TitleSection Title='خدمات' bgColor={darkBgSection} />
                <ServicesSection> 
                    {serviceInfo.map((service) => (
                        <ServiceItem key={service.id} title={service.title} description={service.description} icon={service.icon} customeClass={service.customeClass} defualtLoc={service.defualtLoc} />
                    ))}
                </ServicesSection>
            </Section>
            {/* Portfolio Section */}
            <Section id='Portfolio' bgColor={darkBgSection}> 
                <TitleSection Title='نمونه کارهای' bgColor={lightBgSection} />
                <PortfolioSection>
                    {portfolioInfo.map((portfolio) => (
                        <PortfolioItem key={portfolio.id} title={portfolio.title} imageSrc={portfolio.imageSrc} customeClass={portfolio.customeClass} status={portfolio.stutus}/>
                    ))}
                </PortfolioSection>
            </Section>
            {/* Contact Section */}
            <Section id='Contact' bgColor={lightBgSection} custome='auto'> 
                <TitleSection Title='ارتباط با' bgColor={darkBgSection} />
                <FormSection />
            </Section>
            {/* Footer */}
            <FooterSection />
        </>
    )
}

export default HomePage