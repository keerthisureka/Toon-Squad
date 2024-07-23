import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Contact Us At</h2>
        <div className="text-lg">
        <p>Ph No.: </p>
        <p>Email: </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 p-4">
        <div className="flex-1 min-w-[300px] max-w-full">
          <h2 className="text-center mb-2 text-lg font-bold">
            Outlet 1: AECS Layout, Brookefield, Bangalore
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.372809447323!2d77.7144633!3d12.9658876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae139d9c8d946f%3A0x55e2ae9d01b28ce1!2sU%20P%20Wala!5e0!3m2!1sen!2sin!4v1721744924019!5m2!1sen!2sin"
            className="w-full h-[300px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location 1 Map"
          ></iframe>
        </div>
        <div className="flex-1 min-w-[300px] max-w-full">
          <h2 className="text-center mb-2 text-lg font-bold">
            Outlet 2: Whitefield, Bangalore
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.996310156297!2d77.7300292!3d12.9878944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae118671e5754d%3A0x5405ca4c955937b6!2sUP%20Wala%20-%20ITPL!5e0!3m2!1sen!2sin!4v1721745816415!5m2!1sen!2sin"
            className="w-full h-[300px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location 2 Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
