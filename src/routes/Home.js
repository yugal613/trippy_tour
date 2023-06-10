import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"
import heroimg from "../assets/12.jpg"
function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImage = {heroimg}
                // heroImage="https://images.unsplash.com/photo-1685856898185-57eb303fd776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                title="Your Journey Your Story"
                text="Choose Your favourite Destination"
                buttonText = "Travel Plan"
                url="/"
                btnclass="show"
            />
            
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Home