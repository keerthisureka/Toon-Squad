import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white bg-opacity-50 p-2 flex gap-3 border-y-2 border-black">
      <div className="p-3 bg-white rounded-xl overflow-hiddden">
        <img src={image} className="h-28 w-36 object-cover" />
      </div>
      <div className="flex flex-col gap-1 p-2 text-left items-start w-full">
        <div className="flex justify-between w-full">
          <h2 className="font-semibold text-black capitalize text-xl md:text-2xl">
            {name}
          </h2>
          <div
            className="cursor-pointer text-lg hover:text-red-600"
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <RiDeleteBin6Fill />
          </div>
        </div>
        <p className="text-black capitalize text-sm">{category}</p>
        <p className="text-black capitalize text-base font-bold">₹ {price}</p>

        <div className="flex justify-between w-full">
          <div className="flex gap-3 items-center">
            <button
              onClick={() => dispatch(decreaseQty(id))}
              className="bg-amber-400 hover:bg-amber-500 p-2 rounded-full"
            >
              <FaMinus />
            </button>
            <p className="font-semibold">{qty}</p>
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-amber-400 hover:bg-amber-500 p-2 rounded-full"
            >
              <FaPlus />
            </button>
          </div>

          <div className="flex items-center gap-2 font-bold">
            <p>Total:</p>
            <p>₹ {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
