import React from "react";

const event = {
  image: "public/IMAGE.webp", // Replace with your actual image
  date: "May 28, 2025",
  tag: "Hackathon",
  title: "Designer x Developer",
  description:
    "We are thrilled to announce the Designer x Developer Hackathon 2025! A hackathon by the GDG Babcock University Product Design Track and Frontend Track. Click the link below to register now and secure your spot:",
  register: "https://forms.gle/2qsIQXwxairSMC8I9",
};

const UpcomingEvent = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 my-16">
      <h2 className="text-center text-3xl md:text-4xl font-jetbrains font-normal tracking-wider mb-16">
        UPCOMING EVENTS
      </h2>
      <div className="flex justify-center">
        <div className="bg-white rounded-[48px] flex flex-col md:flex-row items-stretch w-full max-w-4xl p-8 gap-8 border border-gray-100">
          {/* Event Image */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <img
              src={event.image}
              alt="Event Poster"
              className="w-64 h-80 object-cover rounded-2xl border border-gray-200"
              loading="lazy"
            />
          </div>
          {/* Event Details */}
          <div className="flex flex-col justify-between item-start flex-1">
            <div>
              <div className="flex items-center  gap-4 mb-2">
                <span className="text-[#EA4335] text-lg  text-left font-jetbrains">
                  {event.date}
                </span>
                <span className="bg-gray-100   text-gray-700 px-4 py-1 my-2 rounded-full text-sm font-poppins">
                  {event.tag}
                </span>
              </div>
              <h3 className="font-poppins text-2xl text-left font-medium mb-2">
                {event.title}
              </h3>
              <p className="text-gray-700 text-left font-poppins mb-3">
                {event.description}
              </p>
              <p className="text-base text-left font-poppins mb-4">
                <span role="img" aria-label="point">
                  👉
                </span>{" "}
                Register Here:{" "}
                <a
                  href={event.register}
                  className="underline break-all text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.register}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button className="flex items-center gap-2 bg-[#2979FF] text-white font-poppins rounded-xl px-6 py-2 text-base hover:bg-[#1565c0] transition">
                {/* Share Icon */}
                <img src="public/assets/share.svg" alt="Share" className="w-5 h-5" />
                Share
              </button>
              <a
                href={event.register}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-poppins text-base font-medium text-gray-800 hover:underline"
              >
                <span>View details</span>
                {/* Arrow Icon */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
