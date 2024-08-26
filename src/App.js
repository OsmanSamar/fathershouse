import Endorsements from "./components/Endorsements";
import FNavbar from "./components/FNavbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MFire from "./components/MFire";
import Ministry from "./components/Ministry";
import Mission from "./components/Mission";
import Test from "./components/Test";
import TestimonialsSlider from "./components/TestimonialsSlider";
import Videosection from "./components/Videosection";

function App() {
  return (
    <div className="App">
      <FNavbar />
      <Hero />
      <Videosection />
      <Mission />
      <Ministry />
      <MFire />
      <TestimonialsSlider />
      {/* <Test /> */}
      <Endorsements />
      <Footer />
    </div>
  );
}

export default App;
