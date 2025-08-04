import { useState } from "react"

// import data
import { skillInfos , serviceInfos , portfolioInfos } from "./../../data";

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
    const [skillInfo , setSkillInfo] = useState(skillInfos)
    const [serviceInfo , setServiceInfo] = useState(serviceInfos)
    const [portfolioInfo , setPortfolioInfo] = useState(portfolioInfos)
    const [subjectForm, setSubjectForm] = useState('');

    return(
        <>
            {/* Home Section */}
            <Section id='Home' bgColor={darkBgSection}> 
                <HomeSection setSubjectForm={setSubjectForm}> 
                    <NavbarSection setSubjectForm={setSubjectForm}/>
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
                        <ServiceItem
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            customeClass={service.customeClass}
                            defualtLoc={service.defualtLoc}
                            setSubjectForm={setSubjectForm}
                        />
                    ))}
                </ServicesSection>
            </Section>
            {/* Portfolio Section */}
            <Section id='Portfolio' bgColor={darkBgSection}> 
                <TitleSection Title='نمونه کارهای' bgColor={lightBgSection} />
                <PortfolioSection>
                    {portfolioInfo.map((portfolio) => (
                        <PortfolioItem key={portfolio.id} id={portfolio.id} title={portfolio.title} imageSrc={portfolio.imageSrc} customeClass={portfolio.customeClass} status={portfolio.stutus}/>
                    ))}
                </PortfolioSection>
            </Section>
            {/* Contact Section */}
            <Section id='Contact' bgColor={lightBgSection} custome='auto'> 
                <TitleSection Title='ارتباط با' bgColor={darkBgSection} />
                <FormSection setSubjectForm={setSubjectForm} subjectForm={subjectForm} />
            </Section>
            {/* Footer */}
            <FooterSection />
        </>
    )
}

export default HomePage
