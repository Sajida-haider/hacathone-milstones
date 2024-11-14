import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-dark2-bg flex items-center justify-center text-white px-6 sm:px-16 md:px-40 py-6">
      {/* Text Section */}
      <div className="text-left w-full ml-0 md:ml-16 pl-4 md:pl-20 mt-10 md:mt-30">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          <span className="text-white">CREATIVE UI</span>
          <span className="block text-[#00ADB5]">DESIGNER</span>
        </h1>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center sm:justify-start space-x-4 mt-8">
          <button className="bg-green-bg text-white px-6 py-1 rounded-full hover:bg-teal-700">
            Hire Me
          </button>
          <button className="bg-green-bg text-white px-6 py-1 rounded-full hover:bg-teal-700">
            Download CV
          </button>
        </div>
      </div>

      {/* Right Section with Images */}
      <div className="w-[280px] sm:w-[320px] md:w-[364px] h-[280px] sm:h-[320px] md:h-[364px] absolute top-[100px] sm:top-[120px] md:top-[200px] right-10 sm:right-20 md:right-40">
        <img
          src="/circle.jpg"
          alt="circle"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Person Image */}
      <div className="w-[240px] sm:w-[260px] md:w-[289.31px] h-[280px] sm:h-[300px] md:h-[341.86px] absolute top-[260px] sm:top-[300px] md:top-[340px] right-10 sm:right-20 md:right-[280px] z-10">
        <img
          src="/person.jpg"
          alt="person sitting"
          className="object-cover w-full h-full"
        /> 
      </div>
    </main>
  );
}
