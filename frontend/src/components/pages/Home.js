import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../HomeCard";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(0, 4);
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 p-2">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-7xl font-bold">
            Top-Notch quality food
            <span className="text-black text-4xl md:text-8xl">!</span>
          </h2>
          <p className="mt-2 p-1">Random description about the company.</p>
          <button className="mt-2 px-4 py-2 bg-black text-white font-medium rounded-full">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap p-4 gap-5 justify-center">
          {homeProductCartList[0] &&
            homeProductCartList.map((el) => {
              return (
                <HomeCard
                  key={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
