import React from "react";
import GetInTouch from "../../components/GetInTouch.js";

const CommunicationApi = () => {

  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-20">
            Scalable and Intelligent Communication APIs
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            A Communication API is an application programming interface (API)
            that adds communications channels to required software. With a
            Communication API, you can add SMS or MMS, video, social media, or
            even apps like WhatsApp to your application on an as-required basis.
            By integrating communication APIs, you can quickly integrate
            solutions to stay connected with customers, ensuring you are always
            a step ahead of your competitors.
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

      <div className="text-center bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Expand Your Reach With Communication API
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
            Add new communication channels with ready-to-use APIs and enhance
            your communication apps with these sophisticated and user-friendly
            features.
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
              <p className="text-lg">Automated emails t</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Access controls</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Social media integration</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">VoIP/SIP calling</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Omnichannel messaging</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Customizable chat solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          APIs for Meaningful Customer Experience
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          A communications API is essential while interacting with customers
          using up to six touchpoints (email, chat, message, calls, web, social
          media).
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
                <p className="text-lg">
                  Quickly add new communication channels
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">
                  Easy integration with small development teams.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Engage people in meaningful ways</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Increase self-help options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default CommunicationApi;
