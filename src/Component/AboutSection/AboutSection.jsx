import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const fullText = `
عاشق دنیای کدها هستم و تلاش می‌کنم تا با توسعه وب‌سایت‌های خلاقانه، تجربه کاربری بی‌نظیری رو برای مخاطبان رقم بزنم. من سجاد انجیدنی هستم، یه برنامه نویس فرانت اند که با استفاده از HTML ، CSS  و JS، رابط‌های کاربری جذاب و کاربرپسند رو طراحی و پیاده‌سازی می‌کنم. [BR]
در طول این دو سال، تجربه طراحی و توسعه پروژه وب‌سایت رو داشتم که از جمله اون‌ها می‌تونم به وب‌سایت شخصی خودم و وب‌سایت تیم گرین وب اشاره کنم. در حال حاضر دانشجوی رشته مهندسی نرم افزار در دانشگاه ملی مهارت سمنان هستم و همواره به دنبال یادگیری و پیشرفت در حوزه کاری خودم هستم . [BR]
من همیشه به دنبال یادگیری و پیشرفت در حوزه کاری خودم هستم و از همکاری با افراد خلاق و با انگیزه استقبال می‌کنم. اگر به دنبال یه برنامه نویس فرانت اند برای پروژه خودتون هستید، خوشحال می‌شم با شما همکاری کنم. می‌تونید از طریق فرم تماس با من در ارتباط باشید .
  `;
  const cleanedText = fullText.replace(/\[BR\]/g, "\n");

  const [visibleLength, setVisibleLength] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    let timer;
    if (inView && visibleLength < cleanedText.length) {
      timer = setTimeout(() => {
        setVisibleLength((prev) => prev + 1);
      }, 10);
    }
    return () => clearTimeout(timer);
  }, [inView, visibleLength]);

  return (
    <div className="grid lg:flex h-full lg:mx-12 my-6" ref={ref}>
      {/* imagebox */}
      <div className="hidden lg:block w-80 h-5/6 mt-12 mr-20 rounded-t-full bg-darkBgSection order-2 lg:order-1"></div>

      {/* contentbox */}
      <div className="w-[90%] lg:w-8/12 h-fit lg:mt-20 mx-auto lg:mr-20 pb-8 px-8 rounded-xl bg-darkBgSection order-1 lg:order-2">
        <p className="text-customeWhite text-justify whitespace-pre-line leading-8">
          {cleanedText.slice(0, visibleLength)}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
