import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[200px] md:h-[300px] lg:h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.833850993266!2d90.39945221498142!3d23.78057339459116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b092f7f0d3%3A0x6f5e0e3ff5b6e0f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693700000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
