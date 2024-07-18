import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({ category, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center">
      <div className="text-3xl p-5 bg-black rounded-full cursor-pointer">
        <CiForkAndKnife className="text-amber-500" style={{ stroke: "currentColor", strokeWidth: 1 }} />
      </div>
      <p className="text-center w-20 font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
