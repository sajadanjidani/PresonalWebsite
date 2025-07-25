// import component
import Section from "../Section/Section"
import HomeSection from "../HomeSection/HomeSection"
import NavbarSection from "../NavbarSection/NavbarSection"
import TitleSection from "../TitleSection/TitleSection"
import AboutSection from "../AboutSection/AboutSection"
import SkillSection from "../SkillSection/SkillSection"

const HomePage = () => {

    const darkBgSection = '#1f242d'
    const lightBgSection = '#323946'

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
                    
                </SkillSection>
            </Section>
        </>
    )
}

export default HomePage