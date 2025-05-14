
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
function Course() {
  const [books, setBooks] = useState([]);
  const[ authUser, setAuthUser ]= useAuth();
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://main-booky.onrender.com/book");
        const data = res.data.filter((data)=> data.semester === authUser.semester );
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [authUser.semester]);  



  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl pt-20">
            I am delighted to have you 
            <span className="text-pink-500"> {authUser.fullname}</span>  Here! :)
          </h1>
          <p className="mt-12">
          "Success is built on knowledge. The books you need for this semester are right here. 
          Dive into these books, and unlock the knowledge that will shape your success. Every page is a step toward your future.
          Study hard, stay focused, and watch your hard work pay off. You're on the path to greatness!"
          </p>
          <Link to="/">
            <button className="mt-10 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {books.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
