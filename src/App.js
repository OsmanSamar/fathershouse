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
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <FNavbar />
      <Hero />
      <Videosection />
      <Mission />
      <Ministry />
      {/* <Router>
        <Routes>
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Videosection" element={<Videosection />} />
          <Route path="/Ministry" element={<Ministry />} />
        </Routes>
      </Router> */}
      <MFire />
      <TestimonialsSlider />

      <Endorsements />
      <Footer />
    </>
  );
}

export default App;
