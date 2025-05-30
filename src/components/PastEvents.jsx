import React from "react";

const events = [
  {
    image: "/card_image.webp",
    date: "May 24, 2025",
    type: "Speaker session / Teck talk",
    title:
      "Building an LLM and RAG-based chat application using AlloyDB AI and LangChain",
    btnColor: "bg-[#FF3B30]",
    btnText: "View",
    link: "#",
  },
  {
    image: "/card_image2.webp",
    date: "April 20, 2025",
    type: "Speaker session / Teck talk",
    title: "An evening with the Leads/Co-leads: Past and Present",
    btnColor: "bg-[#22C55E]",
    btnText: "View",
    link: "#",
  },
  {
    image: "/card_image3.webp",
    date: "April 6, 2025",
    type: "Speaker session / Teck talk",
    title: "Day in the life of a data scientist",
    btnColor: "bg-[#FACC15]",
    btnText: "View",
    link: "#",
  },
];

const PastEvents = () => {
  return (
    <section className="px-0 py-8 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-jetbrains font-normal tracking-wider mb-24">
        PAST EVENTS
      </h2>
      <div className="flex  flex-col md:flex-row justify-center items-center gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[40px] shadow-md border border-gray-200 w-full max-w-xs md:max-w-sm flex flex-col items-start px-6 py-8 transform transition duration-300"
            style={{
              rotate: idx === 0 ? "-4.2deg" : idx === 2 ? "-6deg" : "10deg",
              boxShadow: "0 8px 32px 0 rgba(60,60,60,0.10)",
            }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover rounded-2xl mb-6"
              loading="lazy"
            />
            <div className="text-[#222] font-jetbrains text-lg mb-2">
              {event.date}
            </div>
            <div className="text-gray-400 font-poppins text-base mb-2">
              {event.type}
            </div>
            <div className="font-poppins text-xl text-left font-medium mb-6">
              {event.title}
            </div>
            <a
              href={event.link}
              className={`px-7 py-2 rounded-lg text-white font-poppins text-base ${event.btnColor}`}
              style={{ minWidth: 80, textAlign: "center" }}
            >
              {event.btnText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastEvents;
