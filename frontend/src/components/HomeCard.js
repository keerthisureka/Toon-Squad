import React from "react";

const HomeCard = ({ name, image, category, price }) => {
  return (
    <div className="bg-black p-2 rounded transition duration-300 ease-in-out hover:scale-105 bg-opacity-75">
      <div className="h-36 w-40">
        <img src={image} className="h-full w-full" />
      </div>
      <h2 className="font-semibold text-white text-center capitalize text-lg">{name}</h2>
      <p className="text-white text-center capitalize text-sm">{category}</p>
      <p className="text-white text-center capitalize text-xs">₹ {price}</p>
    </div>
  );
};

export default HomeCard;
