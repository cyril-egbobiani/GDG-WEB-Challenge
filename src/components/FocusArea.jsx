import React from "react";

const focusAreas = [
  {
    img: "public/frontend.svg",
    title: "Front-end Development",
    desc: "• Web and Mobile app Development",
  },
  {
    img: "public/backend.svg",
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
  return (
    <section className="max-w-6xl mx-auto my-16 py-16 px-4">
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
