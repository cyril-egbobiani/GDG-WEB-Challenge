import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const section = document.querySelector('.hero-section'); // Get the section element
    if (section) {
      observer.observe(section);
    }

    // Clean up the observer on component unmount
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <section className={`hero-section mt-16 px-0 py-8 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Top: Members count */}

      {/* Main content */}
      <div className="flex flex-col md:flex-row md:items-end items-start gap-8 w-full">
        {/* Left: Image */}
        <div className="flex-1">
          <div className="mb-4 w-full">
            <span className="text-black text-4xl font-poppins text-left block">
              GDG on Campus Babcock University - Ilishan-Remo, Nigeria
            </span>
          </div>
          <div className="mb-5 w-full">
            <span className="text-gray-400 text-sm text-left block font-poppins">
              1107 Group Members
            </span>
            <div className="mb-5 w-full flex flex-row items-center gap-4 py-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50"
              >
                <img
                  src="/x-social.svg"
                  alt="Social Icons"
                  className="w-4 h-4"
                  loading="lazy"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50"
              >
                <img
                  src="/linkedIn.svg"
                  alt="Social Icons"
                  className="w-5 h-5"
                  loading="lazy"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50"
              >
                <img
                  src="/instagram.svg"
                  alt="Social Icons"
                  className="w-4 h-4"
                  loading="lazy"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50"
              >
                <img
                  src="/comment.svg"
                  alt="Social Icons"
                  className="w-4 h-4"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/heroImage.png"
              alt="Group"
              className="w-full h-[350px] object-cover rounded-[48px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: About Card */}
        <div className="flex-1 bg-[#71ffb7] rounded-[48px] p-7 flex flex-col justify-between min-h-[350px]">
          <div>
            <h2 className="font-jetbrains text-2xl font-normal mb-4 flex items-center">
              <span className="font-jetbrains text-3xl mr-2">•</span> ABOUT US
            </h2>
            <p className="text-gray-700 font-poppins mb-4 text-left">
              We're a community where students come together to learn, grow, and
              make an impact. No matter what you're studying, regardless of your
              department, everyone is welcome to join us!.
            </p>
            <p className="text-gray-700 font-poppins mb-4 text-left">
              To get started, take a quick look through this{" "}
              <a href="#" className="underline">
                document
              </a>
              . Once you're ready, tap the "JOIN" button above to officially
              sign up. After that, join our{" "}
              <a href="#" className="underline">
                WhatsApp community
              </a>{" "}
              and connect with the team that interests you the most!
            </p>
          </div>
          <button className="mt-4 bg-black text-white font-poppins rounded-2xl px-6 py-3 text-base self-end hover:bg-[#1565c0] transition">
            Connect with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
