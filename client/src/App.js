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
import DevOpsEngineers from "./pages/HireDevelopers/DevOpsEngineer.js";
import FreeSwitchDevelopers from "./pages/HireDevelopers/FreeSwitchDevelopers.js";
import IosDevelopers from "./pages/HireDevelopers/IosDevelopers.js";
import KamailioDevelopers from "./pages/HireDevelopers/KamailioDeveloper.js";
import L2L2SupportEngineers from "./pages/HireDevelopers/L2L3SupportEngineers.js";
import LaravelDevelopers from "./pages/HireDevelopers/LaravelDevelopers.js";
import MernDevelopers from "./pages/HireDevelopers/MernDevelopers.js";
import NodeDeveloper from "./pages/HireDevelopers/NodeDeveloper.js";
import OpenSIPsDevelopers from "./pages/HireDevelopers/OpenSIPsDevelopers.js";
import PythonDeveloper from "./pages/HireDevelopers/PythonDeveloper.js";
import QAEngineers from "./pages/HireDevelopers/QAEngineers.js";
import ReactDeveloper from "./pages/HireDevelopers/ReactDeveloper.js";
import ReactNativeDevelopers from "./pages/HireDevelopers/ReactNativeDevelopers.js";
import SupportEngineers from "./pages/HireDevelopers/SupportEngineers.js";
import VoIPDevelopers from "./pages/HireDevelopers/VoIPDevelopers.js";
import WebRtcDeveloper from "./pages/HireDevelopers/WebRtcDeveloper.js";



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
        <Route path="/hire-devops-engineers" element={<DevOpsEngineers/>} />
        <Route path="/hire-freeswitch-developers" element={<FreeSwitchDevelopers/>} />
        <Route path="/hire-ios-developers" element={<IosDevelopers/>} />
        <Route path="/hire-kamailio-developers" element={<KamailioDevelopers/>} />
        <Route path="/hire-l2l3support-engineers" element={<L2L2SupportEngineers/>} />
        <Route path="/hire-laravel-developers" element={<LaravelDevelopers/>} />
        <Route path="/hire-mern-developers" element={<MernDevelopers/>} />
        <Route path="/hire-node-developers" element={<NodeDeveloper/>} />
        <Route path="/hire-opensips-developers" element={<OpenSIPsDevelopers/>} />
        <Route path="/hire-python-developers" element={<PythonDeveloper/>} />
        <Route path="/hire-qa-engineers" element={<QAEngineers/>} />
        <Route path="/hire-react-developers" element={<ReactDeveloper/>} />
        <Route path="/hire-reactnative-developers" element={<ReactNativeDevelopers/>} />
        <Route path="/hire-support-engineers" element={<SupportEngineers/>} />
        <Route path="/hire-voip-developers" element={<VoIPDevelopers/>} />
        <Route path="/hire-webrtc-developers" element={<WebRtcDeveloper/>} />

        //VoIP Solutions

        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
