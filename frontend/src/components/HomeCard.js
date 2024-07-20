import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading, id }) => {
  return (
    <div className="bg-black p-2 rounded transition duration-300 ease-in-out hover:scale-105 bg-opacity-75 min-w-[150px]">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-36 w-40">
              <img src={image} className="h-full w-full" />
            </div>
            <h2 className="font-semibold text-white text-center capitalize text-lg">
              {name}
            </h2>
            <p className="text-white text-center capitalize text-sm">
              {category}
            </p>
            <p className="text-white text-center capitalize text-xs">
              ₹ {price}
            </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full text-white">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
