import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleMouseEnter = (dropdownId) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) setOpenDropdown(null); // Close dropdown when toggling menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null); // Ensure dropdown is closed on mobile
  };

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
<header className="bg-white w-full fixed top-0 left-0">
  <div className="max-w-7xl mx-auto">
    <nav className="flex justify-between p-6 lg:px-8" aria-label="Global">
      <a href="/" className="text-2xl font-bold mr-40">
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-12" />
          <div>
            <h1 className="text-lg font-bold">Ayanshtech Solutions</h1>
            <p className="text-sm text-blue-700 font-bold">A Place of Innovation</p>
          </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12 mr-20">
          <div className="relative" onMouseEnter={() => handleMouseEnter('offerings')} onMouseLeave={handleMouseLeave}>
            <button type="button" className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900">
              Offerings
            </button>
            {openDropdown === 'offerings' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                {/* Dropdown content for Offerings */}
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">VoIP</h2>
                    <ul className="text-left space-y-2">
                      <li><a href="https://example.com/freeswitch" className="text-blue-600 hover:text-blue-800">FreeSWITCH</a></li>
                      <li><a href="https://example.com/webrtc" className="text-blue-600 hover:text-blue-800">WebRTC</a></li>
                      <li><a href="https://example.com/kamailio" className="text-blue-600 hover:text-blue-800">Kamailio</a></li>
                      <li><a href="https://example.com/opensips" className="text-blue-600 hover:text-blue-800">OpenSIPS</a></li>
                      <li><a href="https://example.com/asterisk" className="text-blue-600 hover:text-blue-800">Asterisk</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">DevOps</h2>
                    <ul className="text-left space-y-2">
                      <li><a href="https://example.com/cicd" className="text-blue-600 hover:text-blue-800">CI/CD Pipelines</a></li>
                      <li><a href="https://example.com/containerization" className="text-blue-600 hover:text-blue-800">Containerization</a></li>
                      <li><a href="https://example.com/cloudservices" className="text-blue-600 hover:text-blue-800">Cloud Services</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">QA Services</h2>
                    <ul className="text-left space-y-2">
                      <li><a href="https://example.com/voip-testing" className="text-blue-600 hover:text-blue-800">VoIP Testing</a></li>
                      <li><a href="https://example.com/qa-automation" className="text-blue-600 hover:text-blue-800">QA Automation</a></li>
                      <li><a href="https://example.com/api-testing" className="text-blue-600 hover:text-blue-800">API Testing</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Web+Mobile</h2>
                    <ul className="text-left space-y-2">
                      <li><a href="https://example.com/web-development" className="text-blue-600 hover:text-blue-800">Web Design and Development</a></li>
                      <li><a href="https://example.com/mobile-development" className="text-blue-600 hover:text-blue-800">Mobile Application Development</a></li>
                    </ul>
                    <h2 className="text-lg font-semibold mt-4 mb-2">AI/ML</h2>
                    <ul className="text-left space-y-2">
                      <li><a href="https://example.com/face-recognition" className="text-blue-600 hover:text-blue-800">Face Recognition Solution</a></li>
                      <li><a href="https://example.com/sentiment-analysis" className="text-blue-600 hover:text-blue-800">Sentiment Analysis</a></li>
                      <li><a href="https://example.com/chatbot" className="text-blue-600 hover:text-blue-800">Chatbot</a></li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center">
                    <a href="https://example.com/your-image-link">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Example Image"
                        className="w-full h-auto max-w-xs rounded-lg shadow-md"
                      />
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
                  <div>
                    <h4 className="text-lg font-semibold">India</h4>
                    <p className="text-pink-600">+91-7778842856</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">USA</h4>
                    <p className="text-pink-600">+1-303-997-3139</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email Enquiries</h4>
                    <p className="text-pink-600">sales@ecosmob.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Career Enquiries</h4>
                    <p className="text-pink-600">careers@ecosmob.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => handleMouseEnter('voip')} onMouseLeave={handleMouseLeave}>
            <button type="button" className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900">
              VoIP Solutions
            </button>
            {openDropdown === 'voip' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                {/* Dropdown content for VoIP Solutions */}

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
                  <div>
                    <h4 className="text-lg font-semibold">India</h4>
                    <p className="text-pink-600">+91-7778842856</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">USA</h4>
                    <p className="text-pink-600">+1-303-997-3139</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email Enquiries</h4>
                    <p className="text-pink-600">sales@ecosmob.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Career Enquiries</h4>
                    <p className="text-pink-600">careers@ecosmob.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => handleMouseEnter('hire')} onMouseLeave={handleMouseLeave}>
            <button type="button" className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900">
              Hire Developers
            </button>
            {openDropdown === 'hire' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                {/* Dropdown content for Hire Developers */}
                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
                  <div>
                    <h4 className="text-lg font-semibold">India</h4>
                    <p className="text-pink-600">+91-7778842856</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">USA</h4>
                    <p className="text-pink-600">+1-303-997-3139</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email Enquiries</h4>
                    <p className="text-pink-600">sales@ecosmob.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Career Enquiries</h4>
                    <p className="text-pink-600">careers@ecosmob.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => handleMouseEnter('approach')} onMouseLeave={handleMouseLeave}>
            <button type="button" className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900">
              Approach
            </button>
            {openDropdown === 'approach' && (
              <div className="absolute left-1/2 -translate-x-2/3 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                {/* Dropdown content for Approach */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
                  <div>
                    <h4 className="text-lg font-semibold">India</h4>
                    <p className="text-pink-600">+91-7778842856</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">USA</h4>
                    <p className="text-pink-600">+1-303-997-3139</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email Enquiries</h4>
                    <p className="text-pink-600">sales@ecosmob.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Career Enquiries</h4>
                    <p className="text-pink-600">careers@ecosmob.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
            <button type="button" className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900">
              About
            </button>
            {openDropdown === 'about' && (
              <div className="fixed left-1/2 top-1/2 z-10 w-screen max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-400 transform -translate-x-3/4 -translate-y-2/3">
                {/* Dropdown content for About */}
                {/* Add your content here */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
                  <div>
                    <h4 className="text-lg font-semibold">India</h4>
                    <p className="text-pink-600">+91-7778842856</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">USA</h4>
                    <p className="text-pink-600">+1-303-997-3139</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email Enquiries</h4>
                    <p className="text-pink-600">sales@ecosmob.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Career Enquiries</h4>
                    <p className="text-pink-600">careers@ecosmob.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Contact Us Button and Hamburger Menu */}
        <div className="flex items-center">
          <Link
            to="/contactus"
            className="hidden lg:inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6  rounded-full hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
          <div className="lg:hidden ml-4">
            <button onClick={toggleMobileMenu} className="text-gray-900 focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      </div>



      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col gap-4 p-4">
            <div onMouseEnter={() => handleMouseEnter('offerings')} onMouseLeave={handleMouseLeave}>
              <button className="text-sm font-semibold leading-6 text-gray-900">
                Offerings
              </button>
              {openDropdown === 'offerings' && (
                <div className="p-4 bg-gray-100 rounded-lg">
                  {/* Dropdown content for Offerings */}
                </div>
              )}
            </div>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeMobileMenu}>VoIP Solutions</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeMobileMenu}>Hire Developers</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeMobileMenu}>Approach</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
