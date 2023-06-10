import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutImg from '../assets/2.jpg'
import Footer from "../components/Footer"
import Contactform from "../components/Contactform"

function Contacts() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-contact"
                heroImage={AboutImg}
                title="Contact US"
            />
            <Contactform/>
            <Footer/>
        </>
    )
}

export default Contacts