import React from "react";

const CardFeature = ({ image, name, price, category }) => {
  return (
    <div className="w-full min-w-[200px] bg-white transition duration-300 ease-in-out hover:scale-105 bg-opacity-75 pt-5 px-4 cursor-pointer flex flex-col rounded-xl">
      <div className="h-28 flex flex-col justify-center items-center">
        <img src={image} className="h-full" />
      </div>
      <h2 className="font-semibold capitalize text-lg mt-4">{name}</h2>
      <p className="capitalize text-sm">{category}</p>
      <p className="capitalize text-xs">₹ {price}</p>

      <button className="bg-amber-400 mt-2 rounded">Add Cart</button>
    </div>
  );
};

export default CardFeature;
