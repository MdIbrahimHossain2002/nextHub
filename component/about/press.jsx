import React from "react";

// --- 5 New SVG Icons ---
// Icon 1: Concept Creation
export const Icon1 = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 2C15.664 2 4 13.664 4 28s11.664 26 26 26 26-11.664 26-26S44.336 2 30 2zm0 48c-12.15 0-22-9.85-22-22S17.85 6 30 6s22 9.85 22 22-9.85 22-22 22z"
      fill="#0F5D86"
    />
    <path
      d="M30 12a16 16 0 100 32 16 16 0 000-32zm0 28a12 12 0 110-24 12 12 0 010 24z"
      fill="#0F5D86"
    />
  </svg>
);

// Icon 2: Time Planning
export const Icon2 = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="30" r="26" stroke="#0F5D86" strokeWidth="4" />
    <path
      d="M30 14v16l12 7"
      stroke="#0F5D86"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Icon 3: 3D Modeling
export const Icon3 = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 45l20-12 20 12-20 12-20-12z" fill="#0F5D86" />
    <path d="M30 21v24M10 33l20-12 20 12" stroke="#0F5D86" strokeWidth="2" />
  </svg>
);

// Icon 4: Interactive Design
export const Icon4 = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="30" r="10" fill="#0F5D86" />
    <path d="M30 12v36M12 30h36" stroke="#0F5D86" strokeWidth="4" />
  </svg>
);

// Icon 5: Quality Assurance
export const Icon5 = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 30l10 10 20-20"
      stroke="#0F5D86"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="30" cy="30" r="26" stroke="#0F5D86" strokeWidth="4" />
  </svg>
);

// --- Updated Process Data ---
const ProcessData = [
  {
    Icon: <Icon1 />,
    title: "Concept Creation",
    desc: "Generating innovative ideas that define the game’s core theme.",
  },
  {
    Icon: <Icon2 />,
    title: "Time Planning",
    desc: "Strategically planning milestones and deliverables for efficiency.",
  },
  {
    Icon: <Icon3 />,
    title: "3D Modeling",
    desc: "Building detailed environments and characters in 3D space.",
  },
  {
    Icon: <Icon4 />,
    title: "Interactive Design",
    desc: "Creating immersive gameplay mechanics for player engagement.",
  },
  {
    Icon: <Icon5 />,
    title: "Quality Assurance",
    desc: "Testing all features to ensure a polished and bug-free experience.",
  },
];

const Press = () => {
  return (
    <div className="py-6 lg:py-20 relative">
      <div className="container mx-auto lg:px-6 relative z-10">
        <div className="text-center mb-10">
          <h4 className="text-[#0F5D86] font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Our Process
          </h4>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {ProcessData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border border-[#0F5D86] rounded-lg shadow-lg p-5 flex flex-col items-center w-60 sm:w-64 md:w-68 transform transition duration-500 hover:-translate-y-2 hover:shadow-[#0F5D86]"
            >
              <div className="mb-3">{item.Icon}</div>
              <h6 className="text-[#0F5D86] font-medium text-lg text-center mb-2">
                {item.title}
              </h6>
              <p className="text-[#0F5D86] text-sm text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
