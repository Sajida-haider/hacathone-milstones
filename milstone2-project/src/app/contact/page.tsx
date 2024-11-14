import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark2-bg flex justify-center items-center text-white px-20">
      <div className="flex w-full max-w-6xl space-x-16">
        {/* Left Section: Text and Image */}
        <div className="w-1/2">
          {/* Heading */}
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-white">Contact</span>
            <span className="text-[#00ADB5]"> Us</span>
          </h2>

          {/* Paragraph/Text */}
          <p className="text-lg mb-4">
            We would love to hear from you! If you have any questions, inquiries, or would like to get in touch with us, feel free to reach out. We’re here to help!
          </p>

          {/* Image Section below Text */}
          <div className="flex justify-center mb-8">
            <img
              src="/contact.jpg"  // Replace with your image path
              alt="Contact Image"
              className="w-[255.37px] h-[348px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-1/2">
          <form className="flex flex-col space-y-4 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-md bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-bg text-white px-6 py-2 rounded-full hover:bg-teal-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

