import React from "react";

const ActionSection = () => (
  <section className="bg-black rounded-4xl my-15">
    <div className="max-w-5xl mx-auto py-24 px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex-1 min-w-0">
        <h2 className="text-4xl md:text-left md:text-5xl font-poppins font-semibold text-white mb-2">
          It&apos;s time to level up
        </h2>
        <p className="text-lg md:text-xl md:text-left font-poppins text-white">
          Discover, grow, and connect with other great minds like you. The world is waiting for our impact.
        </p>
      </div>
      <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto mt-8 md:mt-0">
        <a
          href="#"
          className="inline-block bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-poppins font-semibold text-2xl rounded-xl px-12 py-4 text-center transition whitespace-nowrap"
        >
          Join us
        </a>
      </div>
    </div>
  </section>
);

export default ActionSection;