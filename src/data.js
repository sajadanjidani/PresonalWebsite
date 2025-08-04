// import icon
import { HiBugAnt } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";

const skillInfos = [
    {id : 1 , imageSrc : '/image/mySkills/htmlImage.svg', skillName : 'HTML', skillPersent : "90%", customeClass : 'animate-Skills90'},
    {id : 2 , imageSrc : '/image/mySkills/cssImage.svg', skillName : 'CSS', skillPersent : "80%", customeClass : 'animate-Skills80'},
    {id : 3 , imageSrc : '/image/mySkills/jsImage.svg', skillName : 'JS', skillPersent : "80%", customeClass : 'animate-Skills80'},
    {id : 4 , imageSrc : '/image/mySkills/React.png', skillName : 'React', skillPersent : "80%", customeClass : 'animate-Skills80'},
    {id : 5 , imageSrc : '/image/mySkills/tailwindImage.svg', skillName : 'Tailwind', skillPersent : "75%", customeClass : 'animate-Skills75'},
    {id : 6 , imageSrc : '/image/mySkills/bootstrap.png', skillName : 'Bootstrap', skillPersent : "70%", customeClass : 'animate-Skills70'},
]

const serviceInfos = [
    {id : 1 , title : 'دیباگ سایت' , customeClass : 'animate-rtl' , description : 'آیا سایتتون با مشکل روبروه؟ ارورهای عجیب و غریب، صفحات سفید، یا سرعت پایین کلافه‌تون کرده؟ نگران نباشید! من اینجام تا مشکل سایتتون رو پیدا کنم و مثل یه جراح ماهر، خطاهای کدتون رو برطرف کنم. با دیباگ حرفه‌ای، سایتتون رو به بهترین شکل ممکن اجرا کنید و تجربه کاربری بی‌نظیری رو برای بازدیدکنندگانتون فراهم کنید. ' , icon : <HiBugAnt />},
    {id : 2 , title : 'توسعه سایت' , customeClass : 'animate-btu' , description : 'از سایت‌های فروشگاهی شیک و مدرن تا وبلاگ‌های جذاب و پرمحتوا، من هر نوع سایتی رو که تصورش رو بکنید، می‌تونم براتون طراحی و توسعه بدم. کافیه ایده‌تون رو با من در میون بذارید، و من با استفاده از آخرین تکنولوژی‌های روز دنیا، یه سایت بی‌نظیر و کاربرپسند براتون خلق می‌کنم. ' , icon : <FaCode />},
    {id : 3 , title : 'بازتوسعه سایت' , customeClass : 'animate-ltr' , description : 'یه سایت آماده دارید که دیگه قدیمی شده و نیاز به تغییر داره؟ یا می‌خواید امکانات جدیدی بهش اضافه کنید؟ من می‌تونم سایتتون رو از نو بسازم و با یه طراحی مدرن و جذاب، و امکانات پیشرفته، یه سایت کاملاً جدید و منطبق با نیازهای روزتون تحویلتون بدم. ' , icon : <FaPencilAlt />}
]

const portfolioInfos = [
    {id : 1 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-rtl' , stutus : true},
    {id : 2 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-utb' , stutus : false},
    {id : 3 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-ltr' , stutus : false},
    {id : 4 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-rtl' , stutus : false},
    {id : 5 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-btu' , stutus : false},
    {id : 6 , title : 'GreenWeb' , imageSrc : '/image/myPortfolio/greenweb.jpg' , customeClass : 'animate-ltr' , stutus : false},
]

let subjectForm = ''

export { skillInfos , serviceInfos , portfolioInfos , subjectForm }