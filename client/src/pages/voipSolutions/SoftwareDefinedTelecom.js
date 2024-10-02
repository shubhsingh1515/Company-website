import React from "react";
import GetInTouch from "../../components/GetInTouch.js";

const SoftwareDefinedTelecom = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-20">
            Software-driven Telecom Solutions
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            Experience the new era of telecommunications. Scale your business
            with ease and deploy enterprise-grade telecom network solutions to
            make voice & video calls from a device of your choice. The term
            “software-defined” means the ability to control some or all the
            functions of a system, in this case, telecommunication system using
            software solution. With software-defined telecom, organizations
            benefit in more ways such as low costs, high-quality products and
            services, and lesser risk.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            Software-defined telecom provides businesses with the tools required
            to stay ahead of the communication curve in the age of cloud
            computing. Migrate to communication apps and enhance them easily
            using our custom-made software-defined telecom solution.
          </p>
        </div>

        <div className="md:w-1/3 bg-white shadow-2xl rounded-2xl p-4 mt-10 md:mt-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Hey There!{" "}
            <span role="img" aria-label="smile">
              {" "}
              😊
            </span>
          </h2>
          <p className="text-gray-600 mb-6">We’d love to help you.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Enter your email*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="flex flex-col md:flex-row md:space-x-2 items-center">
              <select className="w-full md:w-auto p-3 border rounded-lg focus:outline-none">
                <option value="IN">🇮🇳 +91</option>
                <option value="US">🇺🇸 +1</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4 md:mt-0"
              />
            </div>
            <input
              type="text"
              placeholder="Company name*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Any Comments"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white transition duration-300"
            >
              Send <span role="img" aria-label="send"></span>
            </button>
          </form>
        </div>
      </div>

      <div className=" bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Unleash New Possibilities of Communication
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
            Explore new tools of communication with the most simple and
            easy-to-navigate interface.
          </p>
        </div>

        <div className="bg-gray-50 p-8 px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Browser as a communication tool</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Apps as a communication tool</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">
                Audio and Video calls via apps and browsers
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Conferencing solutions</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Software telephony</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Software-Defined Telecom For Scalability
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          With a shift to hybrid work culture, software-enabled telecom solution
          is a great alternative that functions on your browser or mobile. Keep
          your teams connected, located in different locations and at a scale.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="/assets/images/dev.jpg"
              alt="Laptop with graph"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className=" md:w-1/2 lg:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Browser-based video & audio calls</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Easily scale communications</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Self-configuration for video calls</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">No tech-support required</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default SoftwareDefinedTelecom;
