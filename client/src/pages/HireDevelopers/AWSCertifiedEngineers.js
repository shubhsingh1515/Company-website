import React, { useState } from "react";
import { AWSCertifiedEngineersFaqs } from "../../components/faqData.js";

import Contact from "../../components/Contact.js";
import GetInTouch from "../../components/GetInTouch.js";

const AWSCertifiedEngineers = () => {
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
              Hire AWS Developers
            </h2>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Amazon Web Services are a crucial component in many businesses. It
              is user-centric, cost-friendly, and even a secure way to scale a
              business. Hire AWS Developers who support work for your business
              on AWS to create scalable solutions. They deploy their ability to
              maintain the AWS infrastructure for production, development, and
              testing environments. AWS certified professionals bring the best
              to your plate and help you redefine your business output.
              <br /> <br />
              When you hire AWS Certified Engineer from Ecosmob, you are hiring
              one of the best resources for your business. Our AWS certified
              engineers know how to build, maintain and manage the AWS
              infrastructure.
            </p>
            <button className="bg-blue-700 text-white py-2 px-4 rounded-full mt-6">
              Get Started
            </button>
          </div>

          <div className="flex justify-center  mb-12 lg:mb-0 mt-5">
            <img
              src="\assets\images\headerSection\hireAWSDev\img1.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Expertise of Our AWS Certified Engineers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          When it comes to hiring AWS certified engineers, our engineers have a
          broad spectrum of capacities.
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
            <p className="text-lg">Handle AWS Infrastructure</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Work on archaic/legacy system</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Customer Communication</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Technologically Trained</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Partner with the Amazon team</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Security Management</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Seasoned AWS Certified Engineers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Hire AWS certified engineers from Ecosmob and kickstart your
          business’s journey into cloud systems with experts.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="\assets\images\headerSection\hireAWSDev\img2.png"
              alt="Laptop with graph"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className=" md:w-1/2 lg:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-10 h-10"
              />

              <div>
                <p className="text-lg">
                  Architect, build, and maintain cloud environments that are
                  cost-efficient and scalable.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-10 h-10"
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
                className="w-10 h-10"
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
                className="w-10 h-10"
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
        {AWSCertifiedEngineersFaqs.map((faq, index) => (
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

      <GetInTouch />
    </div>
  );
};

export default AWSCertifiedEngineers;
