import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Card from "./components/card";
import Testimonials from "./components/reviewsection";
import Courses from "./components/xyz";
import PricingPlans from "./components/pricing";
import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import AboutUs from "./components/aboutus";
import ProfilePage from "./components/profile";
import ContactUs from "./components/contactus";
import Header from "./components/header";
import Footer from "./components/footer";
import "@fontsource/poppins"; 


const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/header" element={<Header />} /> 
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>

  );
};

export default App;