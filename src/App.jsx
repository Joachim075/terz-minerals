import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import NavBar from "./Components/NavBar";
import Herosection from "./Components/HeroSection";
import Providers from "./Components/Providers";
import Services from "./Components/Services";
import ContactCard from "./Components/ContactCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DoctorSignUp from "./Components/DoctorSignUp";
import DoctorLogIn from "./Components/DoctorLogIn";
import LogInPage from "./Components/LogInPage";
import SignUpPage from "./Components/SignUpPage";
import Booking from "./Components/Booking";
import { FooterSocial } from "./Components/FooterSocial";





function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Providers />} />
          <Route path="/providers" element={<Herosection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactcard" element={<ContactCard />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/doctorlogin" element={<DoctorLogIn />} />
          <Route path="/doctorsignup" element={<DoctorSignUp />} />
        </Routes>
        <FooterSocial/>
        
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
