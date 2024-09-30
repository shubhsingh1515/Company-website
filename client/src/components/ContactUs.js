import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 flex justify-center py-20">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full">
        {/* Let's Get in Touch Section */}
        <div className="bg-blue-600 text-white p-8 rounded-md w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Let’s Get in Touch</h3>
          <p className="mb-6">Successfully helped enterprises all across the globe to scale.</p>
          <div className="mb-4">
            <h4 className="font-bold">EMAIL</h4>
            <p>sales@ecosmob.com</p>
          </div>
          <div>
            <h4 className="font-bold">CALL</h4>
            <p>+91-7778842856</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Hey There! 😊</h2>
          <p className="mb-4 text-gray-600">We'd love to help you.</p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded-md" type="text" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded-md" type="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded-md" type="tel" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company Name</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded-md" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Any Comments</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md w-full">
              Send 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
