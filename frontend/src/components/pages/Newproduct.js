import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { IoCloudUpload } from "react-icons/io5";
import { ImagetoBase64 } from "../../utility/ImagetoBase64";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const fileInputRef = useRef(null);
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast(fetchRes.message);
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
        };
      });
    } else {
      toast("Enter required fields!");
    }
  };
  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-4 bg-black rounded"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          type={"text"}
          name="name"
          className="my-1 p-1 rounded"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category" className="text-white mt-2">
          Category
        </label>
        <select
          className="my-1 p-1 rounded"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"Other"}>Select Category</option>
          <option value={"Indian Chaat"}>Indian Chaat</option>
          <option value={"Tandoor Starters"}>Tandoor Starters</option>
          <option value={"Chinese"}>Chinese</option>
          <option value={"Main Course"}>Main Course</option>
          <option value={"Indian Combo"}>Indian Combo</option>
          <option value={"Breads"}>Breads</option>
          <option value={"Tandoori Parathas"}>Tandoori Parathas</option>
          <option value={"Rice"}>Rice</option>
          <option value={"Thali"}>Thali</option>
          <option value={"Beverages"}>Beverages</option>
          <option value={"Raitas"}>Raitas</option>
          <option value={"Salads"}>Salads</option>
          <option value={"Papad"}>Papad</option>
        </select>

        <label htmlFor="image" className="text-white mt-2">
          Image
          <div
            className="h-48 w-full bg-amber-200 my-1 p-1 rounded flex items-center justify-center cursor-pointer"
            onClick={() => fileInputRef.current.click()}
            id="image"
          >
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-8xl text-black">
                <IoCloudUpload />
              </span>
            )}
            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
              ref={fileInputRef}
            />
          </div>
        </label>

        <label htmlFor="price" className="text-white mt-2">
          Price
        </label>
        <input
          type={"text"}
          name="price"
          className="my-1 p-1 rounded"
          onChange={handleOnChange}
          value={data.price}
        />

        <button className="bg-amber-400 mt-4 p-1 rounded-full text-lg font-medium">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
