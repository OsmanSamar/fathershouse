import Endorsements from "./components/Endorsements";
import FNavbar from "./components/FNavbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MFire from "./components/MFire";
import Ministry from "./components/Ministry";
import Mission from "./components/Mission";
import TestimonialsSlider from "./components/TestimonialsSlider";
import Videosection from "./components/Videosection";
import "animate.css";
//import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      {/* <Welcome /> */}
      <FNavbar />
      <Hero />
      <div id="watch">
        <Videosection />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="ministry">
        <Ministry />
      </div>
      <MFire />
      <div id="team">
        <TestimonialsSlider />
      </div>
      <Endorsements />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
