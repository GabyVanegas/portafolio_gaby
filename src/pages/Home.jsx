import { AboutMe } from "../components/AboutMe"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackgrond } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"


export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle para cambiar a modo oscuro */}
        <ThemeToggle/>

        {/* Background effect para que el fondo se mueva */}
        <StarBackgrond/>
        {/* Navbar */}
        <Navbar/>
        {/* Main content */}
        <main>
            <HeroSection/>
            <AboutMe/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        {/* Footer */}
        <Footer/>
        </div>
    ) 
    
}