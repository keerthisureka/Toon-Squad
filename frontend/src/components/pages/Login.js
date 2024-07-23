import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state);

  const dispatch = useDispatch();

  // console.log(data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();

      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } else {
      alert("Please enter required fields!");
    }
  };

  return (
    <div className="p-3 md:p-4 text-white">
      <div className="w-full max-w-sm bg-black m-auto rounded flex items-center flex-col p-5">
        <h1 className="text-center text-2xl font-bold p-4">Login</h1>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
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

          <button className="mt-5 w-full m-auto bg-amber-500 hover:bg-amber-200 text-black font-bold cursor-pointer p-1 rounded-full">
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-amber-300 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
