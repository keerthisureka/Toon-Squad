import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };
  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();
        console.log(dataRes);

        // alert(dataRes.message);
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        alert("Password and Confirm Password are not equal!");
      }
    } else {
      alert("Please enter required fields!");
    }
  };

  return (
    <div className="p-3 md:p-4 text-white">
      <div className="w-full max-w-sm bg-black m-auto rounded flex items-center flex-col p-5">
        <h1 className="text-center text-2xl font-bold p-4">Sign Up</h1>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-white text-black rounded p-1 focus-within:outline-amber-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-white text-black rounded p-1 focus-within:outline-amber-300"
            value={data.lastName}
            onChange={handleOnChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-white text-black rounded p-1 focus-within:outline-amber-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          {/* <input
            type={"password"}
            id="password"
            name="password"
            className="mt-1 mb-2 w-full bg-white text-black rounded p-1"
            value={data.password}
            onChange={handleOnChange}
          /> */}
          <div className="flex mt-1 mb-2 w-full bg-white text-black rounded p-1 focus-within:outline focus-within:outline-amber-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-white border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          {/* <input
            type={"password"}
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 mb-2 w-full bg-white text-black rounded p-1"
            value={data.confirmPassword}
            onChange={handleOnChange}
          /> */}
          <div className="flex mt-1 mb-2 w-full bg-white text-black rounded p-1 focus-within:outline focus-within:outline-amber-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className=" w-full bg-white border-none outline-none "
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="mt-5 w-full m-auto bg-amber-500 hover:bg-amber-200 text-black font-bold cursor-pointer p-1 rounded-full">
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-4">
          Already have account?{" "}
          <Link to={"/login"} className="text-amber-300 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
