import React, { useEffect, useRef, useState } from "react";

const events = [
  {
    image: "/card_image.webp",
    date: "May 24, 2025",
    type: "Speaker session / Teck talk",
    title:
      "Building an LLM and RAG-based chat application using AlloyDB AI and LangChain",
    btnColor: "bg-[#FF3B30]",
    btnText: "View",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-babcock-university-ilishan-remo-nigeria-presents-building-an-llm-and-rag-based-chat-application-using-alloydb-ai-and-langchain/",
  },
  {
    image: "/card_image2.webp",
    date: "April 20, 2025",
    type: "Speaker session / Teck talk",
    title: "An evening with the Leads/Co-leads: Past and Present",
    btnColor: "bg-[#22C55E]",
    btnText: "View",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-babcock-university-ilishan-remo-nigeria-presents-an-evening-with-the-leadsco-leadspast-and-present/",
  },
  {
    image: "/card_image3.webp",
    date: "April 6, 2025",
    type: "Speaker session / Teck talk",
    title: "Day in the life of a data scientist",
    btnColor: "bg-[#FACC15]",
    btnText: "View",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-babcock-university-ilishan-remo-nigeria-presents-day-in-the-life-of-a-data-scientist/",
  },
];

const slantDegrees = ["-rotate-6", "rotate-3", "rotate-6"];

const PastEvents = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the events to create an infinite effect
  const infiniteEvents = [...events, ...events];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;
    let scrollAmount = 0;

    function animate() {
      if (scrollContainer && !isPaused) {
        scrollAmount += 1.2; // speed
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section
      id="past-events"
      className="past-events-section mt-16 px-0 py-8 sm:px-6 lg:px-8"
    >
      <h2 className="text-center text-3xl md:text-4xl font-jetbrains font-normal tracking-wider mb-24">
        PAST EVENTS
      </h2>
      <div className="relative   flex flex-col items-center">
        <div
          ref={scrollRef}
          className="w-full px-3   py-5 overflow-x-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div
            className="flex gap-8"
            style={{
              width: `${infiniteEvents.length * 340}px`,
              transition: "none",
            }}
          >
            {infiniteEvents.map((event, idx) => {
              let slant = "";
              if (idx % 3 === 0) slant = slantDegrees[0];
              else if (idx % 3 === 1) slant = slantDegrees[1];
              else slant = slantDegrees[2];
              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 ${slant}`}
                  style={{
                    width: 320,
                    marginRight: idx === infiniteEvents.length - 1 ? 0 : "2rem",
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <EventCard event={event} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function EventCard({ event }) {
  return (
    <div
      className="bg-white rounded-3xl border border-gray-200  flex flex-col items-start p-6 transition duration-300"
      style={{
        minHeight: 420,
      }}
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-52 object-cover rounded-xl mb-6"
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
        target="_blank"
        rel="noopener noreferrer"
      >
        {event.btnText}
      </a>
    </div>
  );
}

export default PastEvents;
