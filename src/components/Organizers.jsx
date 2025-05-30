import React, { useEffect, useState } from "react";

const organizers = [
  {
    name: "Chukwuneku Akpotohwo",
    role: "Organizer",
    img: "/organizer-one.jpg",
    profile: "#",
  },
  {
    name: "Ryan Offiong",
    role: "Event Manager",
    img: "/organizer-two.jpg",
    profile: "#",
  },
  {
    name: "Favour Ajao-Rotimi",
    role: "Media and Marketing Co-Lead",
    img: "/organizer-three.jpg",
    profile: "#",
  },
  {
    name: "Opeseitan Oyinkansola",
    role: "Assistant Event Manager",
    img: "/organizer-four.jpg",
    profile: "#",
  },
  {
    name: "Chibueze Muoneke",
    role: "Co-Organizer",
    img: "/organizer-five.jpg",
    profile: "#",
  },
];

const Organizers = () => {
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

    const section = document.querySelector('.organizers-section'); // Get the section element
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
    <section className={`organizers-section mt-16 px-0 py-8 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-center text-3xl md:text-4xl font-jetbrains font-normal tracking-wider mb-2">
        MEET OUR ORGANIZERS
      </h2>
      <p className="text-center text-gray-400 font-jetbrains text-lg mb-12">
        THE PEOPLE WHO MAKE IT HAPPEN
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
        {organizers.map((org, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={org.img}
              alt={org.name}
              className="w-64 h-72 object-cover rounded-2xl mb-6"
              loading="lazy"
            />
            <div className="font-poppins text-xl font-medium text-center mb-1">
              {org.name}
            </div>
            <div className="font-poppins text-gray-500 text-base text-center mb-3">
              {org.role}
            </div>
            <a
              href={org.profile}
              className="text-[#2979FF] font-poppins underline text-base text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizers;