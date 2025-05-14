
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg mt-28 ">
      {/* Close button */}
      <Link
        to="/"
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
      >
        ✕
      </Link>

      <h1 className="text-4xl font-bold text-white mb-7 text-center ">About</h1>
      <p className="text-lg text-white text-center leading-relaxed">
        "Welcome to my bookstore! Here, you will find top-class recommendations
        for self-growth books. After signing up or logging in, you'll gain
        access to semester-wise book suggestions for Computer Science and
        Technology. Currently, this software is designed for CST major students,
        but I plan to expand it to cover all majors in the near future. Each
        book card includes the book's image, title, category, intended audience,
        and a 'More Details' button that will redirect you to the book's
        Wikipedia page for further information. If even one student benefits
        from this software, all my efforts in creating it will have been
        worthwhile. Thank you for your support, and stay tuned for more updates
        at our bookstore!"
        <br />
        <br />
        "The more that you read, the more things you will know. The more that
        you learn, the more places you'll go." – Dr. Seuss
      </p>
    </div>
  );
}

export default About;
