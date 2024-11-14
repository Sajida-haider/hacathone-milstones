import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark2-bg flex items-center justify-center text-white px-20">
    <div className="flex w-full justify-between items-center">
      {/* Left Section with Text */}
      <div className="w-[50%] text-left"> 
        <h2 className="text-4xl font-bold mb-6 ">
          <span className="text-white inline">ABOUT</span>
          <span className="text-[#00ADB5] inline"> ME</span>
        </h2>
        <p className="text-balance my-10  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more
        </p>
      </div>
  
      {/* Right Section with Image */}
      <div className="w-[45%] relative">
        {/* Rectangle Image */}
        <img
          src="/rectangle.jpg"
          alt="About Image"
          className="object-cover w-[400px] h-[300px] rounded-lg"
        />
  
        {/* Person Image with updated position */}
        <div className="absolute   w-[240px] h-[320px] top-[40%] mx-16">
          <img
            src="/setingperson.jpg" // Ensure the correct path for this image
            alt="About Image 2"
            className="object-cover h-[200px] w-[300px] rounded-md mt-9 "
          />
        </div>
      </div>
    </div>
  </main>
  )}  