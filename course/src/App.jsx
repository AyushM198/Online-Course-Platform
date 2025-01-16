import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import{LandingPage,SearchResultsPage,Card,Testimonials,Courses,JoinCourse,PricingPlans,CoursesPage,CourseOverview,Login,SignupPage,AboutUs,ProfileForm,ProfileDisplayPage,UpdateProfilePage,PaymentPage,ContactUs,Header,Footer} from "./components/index.js"

import "@fontsource/poppins"; 





function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
          <div>
          <Header />
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/card" element={<Card />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course-overview" element={<CourseOverview />} />
            <Route path="/joinCourse" element={<JoinCourse />} />
            <Route path="/header" element={<Header />} /> 
            <Route path="/coursePage" element={<CoursesPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/pricing" element={<PricingPlans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/profile-display" element={<ProfileDisplayPage />} />
            <Route path="/update-profile" element={<UpdateProfilePage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
          <Footer />
          </div>
        </BrowserRouter>

  );
}

export default App;
