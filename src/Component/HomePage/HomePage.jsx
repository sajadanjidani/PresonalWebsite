// import component
import Section from "../Section/Section"
import HomeSection from "../HomeSection/HomeSection"
import NavbarSection from "../NavbarSection/NavbarSection"
import TitleSection from "../TitleSection/TitleSection"
import AboutSection from "../AboutSection/AboutSection"

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
        </>
    )
}

export default HomePage