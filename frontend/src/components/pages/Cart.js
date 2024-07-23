import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../CartProduct";
import { FaOpencart } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  const handlePayment = async () => {
    if (user.email) {
      const stripePromise = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLIC_KEY
      );
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productCartItem),
        }
      );
      if (res.statusCode === 500) return;

      const data = await res.json();
      console.log(data);

      toast("Redirect to payment Gateway...!");
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast("You have not Login!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };
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
              <button
                className="bg-black w-full text-lg font-bold p-2 text-white"
                onClick={handlePayment}
              >
                Proceed to pay
              </button>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 flex flex-col items-center justify-center h-screen">
            <span className="text-[10rem]">
              <FaOpencart />
            </span>
            <p className="text-2xl font-bold mt-4">
              {"Your cart is empty! :("}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
