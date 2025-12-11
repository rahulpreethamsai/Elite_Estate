import AboutSection from "./AboutUs"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"


function HomePage() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <Footer/>
    </div>
  )
}

export default HomePage