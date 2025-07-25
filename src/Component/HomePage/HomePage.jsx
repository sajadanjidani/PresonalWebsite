import { useState } from "react"
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

const HomePage = () => {

    const darkBgSection = '#1f242d'
    const lightBgSection = '#323946'

    const [skillInfo , setSkillInfo] = useState([
        {id : 1 , imageSrc : '/image/mySkills/htmlImage.svg', skillName : 'HTML', skillPersent : "90%"},
        {id : 2 , imageSrc : '/image/mySkills/cssImage.svg', skillName : 'CSS', skillPersent : "90%"},
        {id : 3 , imageSrc : '/image/mySkills/jsImage.svg', skillName : 'JS', skillPersent : "80%"},
        {id : 4 , imageSrc : '/image/mySkills/React.png', skillName : 'React', skillPersent : "80%"},
        {id : 5 , imageSrc : '/image/mySkills/tailwindImage.svg', skillName : 'Tailwind', skillPersent : "75%"},
        {id : 6 , imageSrc : '/image/mySkills/bootstrap.png', skillName : 'Bootstrap', skillPersent : "70%"},
    ])

    return(
        <>
            <Section bgColor={darkBgSection}> 
                <HomeSection> 
                    <NavbarSection />
                </HomeSection>
            </Section>
            <Section bgColor={lightBgSection}> 
                <TitleSection Title='درباره' bgColor={darkBgSection} />
                <AboutSection />
            </Section>
            <Section bgColor={darkBgSection}> 
                <TitleSection Title='مهارت' bgColor={lightBgSection} />
                <SkillSection>
                    {skillInfo.map((skill) => (
                        <SkillItem key={skill.id} skillName={skill.skillName} skillPersent={skill.skillPersent} imageSrc={skill.imageSrc}/>
                    ))}
                </SkillSection>
            </Section>
            <Section bgColor={lightBgSection}> 
                <TitleSection Title='خدمات' bgColor={darkBgSection} />
                <ServicesSection> 
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                </ServicesSection>
            </Section>
        </>
    )
}

export default HomePage