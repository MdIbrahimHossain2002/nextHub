import React from "react";

const teamMembers = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: { facebook: "https://facebook.com", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: { facebook: "https://facebook.com", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: { facebook: "https://facebook.com", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: { facebook: "https://facebook.com", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: { facebook: "https://facebook.com", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
];

const Team = () => {
  return (
    <div className="bg-white py-6 lg:py-20">
      <div className="mx-auto grid container px-5 lg:px-6 gap-20 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {teamMembers.map((member, index) => (
            <li key={index}>
              <div className="flex items-center gap-x-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-26 h-26 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-[#0F5D86]">
                    {member.role}
                  </p>
                  {/* Social Icons */}
                  <div className="mt-2 flex gap-3">
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F5D86] hover:text-blue-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.462h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F5D86] hover:text-blue-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.938 13.938 0 011.671 3.15 4.916 4.916 0 003.195 9.722a4.897 4.897 0 01-2.229-.616v.062a4.917 4.917 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.918 4.918 0 004.592 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.788-.023-1.176-.069a13.945 13.945 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A9.936 9.936 0 0024 4.557z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F5D86] hover:text-blue-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.205 24 24 23.226 24 22.271V1.728C24 .774 23.205 0 22.225 0zM7.082 20.452H3.539V9h3.543v11.452zM5.311 7.544a2.045 2.045 0 110-4.089 2.045 2.045 0 010 4.089zM20.452 20.452h-3.543v-5.641c0-1.345-.027-3.077-1.875-3.077-1.875 0-2.161 1.46-2.161 2.971v5.747h-3.543V9h3.401v1.561h.049c.474-.899 1.635-1.848 3.366-1.848 3.596 0 4.263 2.367 4.263 5.449v6.29z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
