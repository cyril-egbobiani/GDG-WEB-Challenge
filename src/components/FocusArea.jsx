import React, { useEffect, useState } from "react";

const focusAreas = [
  {
    img: "/frontend.svg",
    title: "Front-end Development",
    desc: "• Web and Mobile app Development",
  },
  {
    img: "/backend.svg",
    title: "Back-end Development",
    desc: "• Node.js, Python",
  },
  {
    img: "/product-design.svg",
    title: "Product Design",
    desc: "• Figma, Framer",
  },
  {
    img: "/others.svg",
    title: "Data , AI, Project Management, DSA, Games and Interactive media",
    desc: "",
  },
];

const FocusArea = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const section = document.querySelector('.focus-area-section'); // Get the section element
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className={`focus-area-section mt-16 px-0 py-8 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-center text-2xl md:text-4xl font-jetbrains font-normal tracking-wider mb-16">
        OUR FOCUS AREAS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {focusAreas.map((area, idx) => (
          <div
            key={area.title}
            className="flex items-center gap-6 border-b md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 border-gray-300 pb-8 md:pb-0 md:pr-8"
          >
            <div className="flex-shrink-0">
              <img
                src={area.img}
                alt={area.title}
                className="w-20 h-20 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <div className="text-left font-poppins font-medium mb-1">
                {area.title}
              </div>
              {area.desc && (
                <div className="text-gray-400 font-jetbrains text-start">
                  {area.desc}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusArea;
