import React from "react";
import { Link } from "react-router-dom";

const CardFeature = ({ image, name, price, category, loading, id}) => {
  return (
    <div className="w-full min-w-[200px] max-w-[200px] mt-2 bg-white transition duration-300 ease-in-out hover:scale-105 bg-opacity-75 py-5 px-4 cursor-pointer flex flex-col rounded-xl ">
      {image ? (
        <>
          <Link to={`menu/${id}`}>
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full" />
            </div>
            <h2 className="font-semibold capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h2>
            <p className="capitalize text-sm">{category}</p>
            <p className="capitalize text-xs">₹ {price}</p>

            <button className="bg-amber-400 mt-3 mb-3 rounded hover:bg-amber-500 w-full">
              Add Cart
            </button>
          </Link>
        </>
      ) : (
        <div className="min-h-[200px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
