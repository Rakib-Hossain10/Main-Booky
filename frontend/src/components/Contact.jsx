import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg mt-36">
      {/* Close button */}
      <Link
        to="/"
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
      >
        ✕
      </Link>

      <h1 className="text-4xl font-bold text-white mb-4 text-center">
      Contact Me
      </h1>
      <p className="text-lg text-white text-center leading-relaxed">
      If you have any questions or feedback, feel free to reach out to me. I am always happy to assist!
      <br/>
     <span className="flex mt-2"> Name: Nazmus Rakib</span>

     <span className="flex "> Phone Number: +8615623580051</span>
     <span className="flex"> eamil: iamrakib1221@gmail.com</span>
      </p>
    </div>
  );
}

export default About;
