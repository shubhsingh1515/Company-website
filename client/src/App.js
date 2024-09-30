import React from "react";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs.js";
import Contact from "./pages/headerSection/Contact.js";
import VoIPBusinessSolutions from "./pages/VoipBusinessSolutions.js";
import WebMobileSolutions from "./pages/webMobileSolutions.js";
import ConsultancyAndDiscovery from "./pages/ConsultancyAndDiscovery.js";
import QAServices from "./pages/QAServices.js";
import DevopsServices from "./pages/DevopsServices.js";
//Hire Developers
import AndroidDevelopers from "./pages/HireDevelopers/AndroidDevelopers.js";
import AsteriskDeveloper from "./pages/HireDevelopers/AsteriskDeveloper.js";
import AWSCertifiedEngineers from "./pages/HireDevelopers/AWSCertifiedEngineers.js";
import AWSMigrationEngineers from "./pages/HireDevelopers/AWSMigrationEngineers.js";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/voip-business-solutions" element={<VoIPBusinessSolutions/>}/>
        <Route path="/web-mobile-solutions" element={<WebMobileSolutions/>} />
        <Route path="/consultancy-and-discovery" element={<ConsultancyAndDiscovery/>} />
        <Route path="/qa-services" element={<QAServices/>} />
        <Route path="/devops-services" element={<DevopsServices/>} />

        //Hire Developers
        <Route path="/hire-android-developers" element={<AndroidDevelopers/>} />
        <Route path="/hire-asterisk-developers" element={<AsteriskDeveloper/>} />
        <Route path="/hire-aws-engineers" element={<AWSCertifiedEngineers/>} />
        <Route path="/hire-aws-engineers" element={<AWSCertifiedEngineers/>} />
        <Route path="/hire-aws-migration-engineers" element={<AWSMigrationEngineers/>} />

        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
