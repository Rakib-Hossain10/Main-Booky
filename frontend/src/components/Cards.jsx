
import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-10 my-9 p-3 ">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border h-96">
          {/* Fixed height for card */}
          <figure className="h-full">
            {/* Fixed image resizing */}
            <img
              src={item.image}
              alt="Book"
              className="w-full h-full object-contain" // Ensures image fits inside the card without being cropped
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title ">
              {item.name}
              <div className="badge badge-secondary py-5 flex justify-center items-center">
              {item.category}
               
              </div>
              
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-center mt-2.5">
              <a
                href={item.wikipediaLink} // Link to the Wikipedia page
                target="_blank" // Open the link in a new tab
                rel="noopener noreferrer" // Security measure for opening a new tab
                className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              >
                More details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

