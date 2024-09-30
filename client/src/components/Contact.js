import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10">
    <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 ">
          Hey There! We’d love to help you.{" "}
          <span role="img" aria-label="smile">
            {" "}
            😃
          </span>
        </h2>
        <p className="text-gray-600 md:text-lg">
          Help us with your pre-requisite so that we can suggest the best
          suitable solutions in accordance with your requirements.
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-left font-bold text-gray-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-left font-bold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email ID"
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-left font-bold text-gray-600 mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Your Company Name"
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-left font-bold text-gray-600 mb-1">
              Service
            </label>
            <input
              type="text"
              placeholder="Service Required"
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-left font-bold text-gray-600 mb-1">
              Phone Number
            </label>
            <div className="flex items-center">
              <span className="mr-2">🇮🇳</span>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-left font-bold text-gray-700 mb-1">
            Any Comments
          </label>
          <textarea
            placeholder="Your comments"
            className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
            rows="3"
          ></textarea>
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 hover:text-white font-bold py-3 px-8 rounded-full flex items-center"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Contact
