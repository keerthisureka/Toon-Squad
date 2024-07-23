import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../AllProduct";
import { addCartItem } from "../../redux/productSlice";

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };
  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };
  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-2xl m-auto flex flex-col md:flex-row bg-white justify-center items-center rounded-xl">
        <div className="flex justify-center items-center">
          <img src={productDisplay.image} className="h-auto rounded-xl" />
        </div>
        <div className="flex flex-col items-center gap-1 p-4 text-center md:text-left md:items-start">
          <h2 className="font-semibold text-black capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h2>
          <p className="text-black capitalize text-2xl">
            {productDisplay.category}
          </p>
          <p className="text-black capitalize md:text-2xl">
            ₹ {productDisplay.price}
          </p>
          <div className="flex gap-3">
            <button
              className="bg-amber-400 mt-3 mb-3 hover:bg-amber-500 min-w-[150px] h-10 rounded-full"
              onClick={handleBuy}
            >
              Buy
            </button>
            <button
              onClick={handleAddCartProduct}
              className="bg-amber-400 mt-3 mb-3 hover:bg-amber-500 min-w-[150px] h-10 rounded-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Products"} />
    </div>
  );
};

export default Menu;
