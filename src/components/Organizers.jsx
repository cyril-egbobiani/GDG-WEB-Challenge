import React from "react";

const organizers = [
  {
    name: "Chukwuneku Akpotohwo",
    role: "Organizer",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    profile: "#",
  },
  {
    name: "Ryan Offiong",
    role: "Event Manager",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    profile: "#",
  },
  {
    name: "Favour Ajao-Rotimi",
    role: "Media and Marketing Co-Lead",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    profile: "#",
  },
  {
    name: "Opeseitan Oyinkansola",
    role: "Assistant Event Manager",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    profile: "#",
  },
  {
    name: "Chibueze Muoneke",
    role: "Co-Organizer",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    profile: "#",
  },
];

const Organizers = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
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