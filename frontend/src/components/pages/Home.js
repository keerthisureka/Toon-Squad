import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../HomeCard";
import CardFeature from "../CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../FilterProduct";


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(0, 4);
  const homeProductCartListindianchaat = productData.filter(
    (el) => el.category === "Indian Chaat",
    []
  );
  console.log(homeProductCartListindianchaat);

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 250;
  };

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 250;
  };

  const categoryList = [...new Set(productData.map(el => el.category))]
  console.log(categoryList)
  
  //filter data display
  const[filterby, setFilterBy] = useState("")
  const[dataFilter, setDataFilter] = useState([])

  useEffect(() => {
    setDataFilter(productData)
  }, [productData])

  const handleFilterProduct = (category) => {
    const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
    setDataFilter(() =>{
      return[
        ...filter
      ]
    })
  }

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
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-black mb-4">Indian Chaat</h2>

          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-white text-lg p-1 rounded-full"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-white text-lg p-1 rounded-full"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListindianchaat[0]
            ? homeProductCartListindianchaat.map((el) => {
                return (
                  <CardFeature
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el) => (
                <CardFeature loading="Loading..." />
              ))}
        </div>
      </div>

      <div className="my-5">
        <h2 className="font-bold text-2xl text-black mb-4">Our Products</h2>
      </div>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {
          categoryList[0] && categoryList.map(el => {
            return (
              <FilterProduct category={el} onClick={()=>handleFilterProduct(el)}/>
            )
          })
        }
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
          {
            dataFilter.map(el => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                
                />
              )
            })
          }
      </div>

    </div>
  );
};

export default Home;
