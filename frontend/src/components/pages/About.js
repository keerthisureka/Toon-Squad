import React from "react";
import { Link } from "react-router-dom";
import restaurant from "../../assets/restaurant.jpg";
import counter from "../../assets/counter.jpg";
import dining from "../../assets/dining.jpg";

const About = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-7xl font-bold p-1 ml-2">
        U.P Wala: A Taste of North India
        <span className="text-black text-4xl md:text-8xl">!</span>
      </h2>
      <div className="md:flex gap-2 p-2">
        <div className="md:w-1/2">
          <p className="mt-4 p-2 md:text-xl text-lg text-justify">
            U P Wala restaurant with branches in AECS Layout, Brookefield and
            Whitefield, Bangalore, offers a delightful selection of North
            Indian, Tandoor, Chaats and Chinese cuisine. With a variety of
            curries, breads, and starters, we cater to both classic and
            adventurous palates. We have wide variety of sweets to satisfy your
            sweet tooth and celebration desires. Freshness of our ingredients
            and authenticity of our recipes makes sure you create memories with
            North Indian cuisine and experience nostalgia if you are from North
            India.
          </p>
          <div className="flex gap-4 p-2">
            <Link to={"/"}>
              <button className="mt-2 px-4 py-2 bg-black text-white font-medium rounded-full">
                Order Now
              </button>
            </Link>
            <Link to={"/contact"}>
              <button className="mt-2 px-4 py-2 bg-black text-white font-medium rounded-full">
                Find our Outlets near YOU {">>"}
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-2 justify-center">
          <img src={restaurant} alt="restaurant" className="md:w-[300px] w-[400px]" />
          <img src={counter} alt="counter" className="md:w-[300px] w-[400px]" />
          <img src={dining} alt="dining" className="md:w-[300px] w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
