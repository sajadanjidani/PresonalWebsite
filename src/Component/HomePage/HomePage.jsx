// import component
import Section from "../Section/Section"
import HomeSection from "../HomeSection/HomeSection"
import NavbarSection from "../NavbarSection/NavbarSection"

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
        </>
    )
}

export default HomePage