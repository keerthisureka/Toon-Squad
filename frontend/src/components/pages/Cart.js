import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../CartProduct";
import { FaOpencart } from "react-icons/fa6";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-black ">
          Your Cart Items
        </h2>
        {productCartItem[0] ? (
          <div className="my-4 flex gap-4">
            {/* diplay cart items */}
            <div className="w-full max-w-3xl">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>

            {/* total cart items */}
            <div className="w-full max-w-md ml-auto">
              <h2 className="bg-white font-bold p-2 text-lg">Summary</h2>
              <div className="flex w-full p-2 font-semibold">
                <p>Total Qty</p>
                <p className="ml-auto font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full p-2 font-semibold">
                <p>Total Price</p>
                <p className="ml-auto font-bold">₹ {totalPrice}</p>
              </div>
              <button className="bg-black w-full text-lg font-bold p-2 text-white">
                Proceed to pay
              </button>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 flex flex-col items-center justify-center h-screen">
            <span className="text-[10rem]">
              <FaOpencart />
            </span>
            <p className="text-2xl font-bold mt-4">{ "Your cart is empty! :(" }</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
