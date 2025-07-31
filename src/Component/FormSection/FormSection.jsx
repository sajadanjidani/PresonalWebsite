import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: "dwVq7RzU_pdTaBzeP",
});

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[\u0600-\u06FF\s]{2,15}$/, "نام باید فقط با حروف فارسی باشد (۲ تا ۱۵ حرف)")
    .required("وارد کردن نام الزامی است"),
  lastName: yup
    .string()
    .matches(/^[\u0600-\u06FF\s]{2,15}$/, "نام خانوادگی باید فقط با حروف فارسی باشد (۲ تا ۱۵ حرف)")
    .required("وارد کردن نام خانوادگی الزامی است"),
  subject: yup
    .string()
    .matches(/^[\u0600-\u06FF\s.,؟!]{5,30}$/, "موضوع باید فقط با حروف فارسی باشد (۵ تا ۳۰ حرف)")
    .required("موضوع الزامی است"),
  phone: yup
    .string()
    .matches(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد")
    .required("شماره موبایل الزامی است"),
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("وارد کردن ایمیل الزامی است"),
  message: yup
    .string()
    .min(10, "پیام باید حداقل ۱۰ کاراکتر باشد")
    .required("پیام الزامی است"),
});

const FormSection = () => {
  const [formSection, setFormSection] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [textMessage, setTextMessage] = useState('');
  const [userEnterCode, setUserEnterCode] = useState('');
  const [capCode, setCapCode] = useState('');
  const [codeChecked, setCodeChecked] = useState(true);

  const sendCode = () => {
    const code = Math.floor(Math.random() * 10000000);
    const params = {
      username: `${firstName} ${lastName}`,
      capcode: code,
      to_email: emailAddress
    };

    emailjs.send('service_s4n3nsf', 'template_yp0tw92', params)
      .then(() => {
        setCapCode(code);
      })
      .catch(() => {
        return;
      })
  };

  const verifyEmail = () => {
    if (userEnterCode == capCode) {
      sendEmail();
    } else {
      setCodeChecked(false);
    }
  };

  const sendEmail = () => {
    const params = {
      name: `${firstName} ${lastName}`,
      message: textMessage,
      number: phoneNumber,
      email: emailAddress
    };

    emailjs.send('service_s4n3nsf', 'template_iv2j2gw', params)
      .then(() => {
        setFormSection(true);
      })
      .catch(() => {
        return;
      })
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    if (formValid) {
      setFormValid(false);
      setFormSection(false);
    } else {
      setFormValid(true);
    }
  };

  return (
    <div className="w-[95%] md:w-[85%] h-[80%] my-4 mx-auto">
      {formSection ? (
        <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-3 md:gap-4 w-full h-auto">
            <div>
              <input
                {...register("firstName")}
                type="text"
                className="h-16 w-full bg-darkBgSection rounded-lg px-5"
                placeholder="نام"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
              />
              {errors.firstName && <p className="text-themColor text-sm mt-1">{errors.firstName.message}</p>}
            </div>

            <div>
              <input
                {...register("lastName")}
                type="text"
                className="h-16 w-full bg-darkBgSection rounded-lg px-5"
                placeholder="نام خانوادگی"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
              />
              {errors.lastName && <p className="text-themColor text-sm mt-1">{errors.lastName.message}</p>}
            </div>

            <div>
              <input
                {...register("subject")}
                type="text"
                className="h-16 w-full bg-darkBgSection rounded-lg px-5"
                placeholder="موضوع"
                value={subject}
                onChange={event => setSubject(event.target.value)}
              />
              {errors.subject && <p className="text-themColor text-sm mt-1">{errors.subject.message}</p>}
            </div>

            <div>
              <input
                {...register("phone")}
                type="text"
                className="h-16 w-full bg-darkBgSection rounded-lg px-5"
                placeholder="شماره همراه"
                value={phoneNumber}
                onChange={event => setPhoneNumber(event.target.value)}
              />
              {errors.phone && <p className="text-themColor text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="mt-3">
            <input
              {...register("email")}
              type="text"
              className="w-full h-16 bg-darkBgSection rounded-lg px-5"
              placeholder="ایمیل"
              value={emailAddress}
              onChange={event => setEmailAddress(event.target.value)}
            />
            {errors.email && <p className="text-themColor text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mt-3">
            <textarea
              {...register("message")}
              className="w-full h-56 resize-none bg-darkBgSection rounded-lg p-5"
              placeholder="پیام"
              value={textMessage}
              onChange={event => setTextMessage(event.target.value)}
            />
            {errors.message && <p className="text-themColor text-sm mt-1">{errors.message.message}</p>}
          </div>

          <input
            type="submit"
            value="ارسال"
            onClick={() => sendCode()}
            className="w-full h-14 text-customeWhite mt-1 rounded-lg bg-darkBgSection hover:text-themColor hover:cursor-pointer"
          />
        </form>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <div className="md:w-4/5 h-auto rounded-lg bg-darkBgSection p-5">
            <p className="text-center leading-10">
              برای تأیید ایمیل خود، لطفاً کدی را که به آدرس ایمیل زیر ارسال شده است وارد نمایید : <br />
              [ <span className="text-themColor">{emailAddress}</span> ] <br />
              کد را در کادر زیر وارد کنید تا فرآیند تأیید تکمیل شود.
            </p>
            <form className="grid justify-items-center mt-7">
              <input
                type="text"
                value={userEnterCode}
                onChange={event => setUserEnterCode(event.target.value)}
                className="w-full md:w-4/5 h-12 rounded-md bg-lightBgSection text-center text-themColor"
              />
              {!codeChecked && (
                <p className="mt-4 mb-6 text-red-400">
                  کد وارد شده نامعتبر است. لطفاً بررسی کنید و مجدداً کدی را که به ایمیل شما ارسال شده است وارد نمایید.
                </p>
              )}
              <div className="flex mt-5 gap-5 w-4/6 child:py-3 child:w-full child:rounded-md child:bg-lightBgSection child:cursor-pointer child-hover:bg-slate-600">
                <input type="button" value="تایید" onClick={() => verifyEmail()} />
                <input type="button" value="برگشت" onClick={() => setFormSection(true)} />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSection;
