import React from "react";

const organizers = [
  {
    name: "Chukwuneku Akpotohwo",
    role: "Organizer",
    img: "/organizer-one.jpg",
    profile: "https://gdg.community.dev/u/m2un28/",
  },
  {
    name: "Ryan Offiong",
    role: "Event Manager",
    img: "/organizer-two.jpg",
    profile: "https://gdg.community.dev/u/mmz2d7/",
  },
  {
    name: "Favour Ajao-Rotimi",
    role: "Media and Marketing Co-Lead",
    img: "/organizer-three.jpg",
    profile: "https://gdg.community.dev/u/mm65m6/",
  },
  {
    name: "Opeseitan Oyinkansola",
    role: "Assistant Event Manager",
    img: "/organizer-four.jpg",
    profile: "https://gdg.community.dev/u/mvmsxc/",
  },
  {
    name: "Chibueze Muoneke",
    role: "Co-Organizer",
    img: "/organizer-five.jpg",
    profile: "https://gdg.community.dev/u/m64zh4/",
  },
];

const Organizers = () => {
  return (
    <section id="organizers" className="mt-16 px-0 py-8 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-jetbrains font-normal tracking-wider mb-2">
        MEET OUR ORGANIZERS
      </h2>
      <p className="text-center text-gray-400 font-jetbrains text-lg mb-12">
        THE PEOPLE WHO MAKE IT HAPPEN
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
        {organizers.map((org, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center mx-auto w-full max-w-xs"
          >
            <img
              src={org.img}
              alt={org.name}
              className="w-64 h-72 object-cover rounded-2xl mb-6"
              loading="lazy"
            />
            <div className="flex flex-col flex-1 justify-between items-center h-full w-full">
              <div>
                <div className="font-poppins text-xl font-medium text-center mb-1">
                  {org.name}
                </div>
                <div className="font-poppins  text-gray-500 text-light text-center mb-3">
                  {org.role}
                </div>
              </div>
              <a
                href={org.profile}
                className="text-[#2979FF] font-poppins underline text-base text-center mt-auto block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizers;
