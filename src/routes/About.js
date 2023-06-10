import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutImg from '../assets/night.jpg'
import Footer from "../components/Footer"
import Aboutusinfo from "../components/Aboutusinfo"
function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImage={AboutImg}
                title="About US"
            />
            <Aboutusinfo/>
            <Footer/>
        </>
    )
}

export default About