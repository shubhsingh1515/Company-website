import React, { useState } from "react";
import { hireAsteriskFaqs } from "../../components/faqData.js"

import Contact from "../../components/Contact.js";
import GetInTouch from "../../components/GetInTouch.js";

const AsteriskDeveloper = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-15">
      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 ml-10 mt-10">
          <div className="lg:w-3/4 text-center lg:text-left ">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Hire Asterisk Developers
            </h2>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Asterisk is a free and open-source framework for building
              communication apps. IP PBX systems, VoIP gateways, conference
              servers, and other specialized solutions are all powered by
              Asterisk. Small and large organizations, call centers, carriers,
              and government agencies use it worldwide. It is a free and
              open-source telephone system. Hire our Asterisk developers to
              deploy Asterisk and make it the basis for a complete business
              phone system, enhance or extend your existing system, or even
              bridge a gap between systems.
            </p>
            <button className="bg-blue-700 text-white py-2 px-4 rounded-full mt-6">
              Get Started
            </button>
          </div>

          <div className="flex justify-center  mb-12 lg:mb-0 mt-5">
            <img
              src="\assets\images\headerSection\hireAsteriskDev\img1.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Expertise Of Our Asterisk Developers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Hire Asterisk experts from Ayanshtech Solutions to help you build
          communications apps, such as business phone systems (IP PBXs), VoIP
          gateways, call distributors, and conference bridges.
        </p>
      </div>

      <div className="bg-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">
              Asterisk SIP Profile and Dialplan Configurations
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Good Knowledge of chan_sip and chan_pjsip</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Good Knowledge of SIP/SDP/RTP protocols</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Ability to setup Asterisk in HA mode</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">
              Asterisk AGI and FastAGI scripts development
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Good knowledge of Asterisk AMI & ARI</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Hire Seasoned Asterisk Developers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Our Asterisk developers will help you build a custom asterisk solution
          to meet your business goals.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="\assets\images\headerSection\hireAsteriskDev\img2.png"
              alt="Laptop with graph"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className=" md:w-1/2 lg:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />

              <div>
                <p className="text-lg">
                  We have a team of highly qualified and experienced Asterisk
                  developers
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  Our Asterisk programmers have expertise in developing single
                  tenant and multi-tenant Asterisk Solutions
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  Our Asterisk developers have also experience in helping
                  businesses in leveraging the complete benefits of open source
                  solutions
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  Our team of Asterisk developers has benefited many businesses
                  with their hands-on skills in Asterisk customization and
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-16 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Ayanshtech Advantage
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600  mt-4 max-w-6xl mx-auto">
          With Ecosmob, you can hire skilled and certified developers at an
          hourly, part-time, or full-time contract hiring arrangement.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Agility with Focus on Quality
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Hire as per your requirement with our Flexible Hiring module
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Access to industry experts and developers
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            A rich ecosystem of experienced developers & tools
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Scale your resources as per your requirements
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Dedicated developers only charge for the project assigned to them
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Agility with Focus on Quality
          </p>
        </div>
      </div>


      <div className="max-w-3xl mx-auto p-6 py-20 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          FAQs
        </h2>
        {hireAsteriskFaqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left py-4 flex justify-between items-center focus:outline-none ${
                activeIndex === index ? "bg-blue-600 text-white px-5" : ""
              }`}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <Contact />

      <GetInTouch/>
    </div>
  );
};

export default AsteriskDeveloper;
