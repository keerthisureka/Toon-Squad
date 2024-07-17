import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogOut = () => {
    dispatch(logoutRedux());
    toast("Logged out successfully!");
  };

  return (
    <header className="fixed shadow-md w-full h-20 px-2 md:px-4 z-50 bg-black">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-20">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-white relative">
            <FaCartShopping />
            <div className="absolute -top-1 -right-1 text-black bg-white h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-white cursor-pointer" onClick={handleShowMenu}>
            <div className="text-3xl">
              <FaCircleUser />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md rounded flex flex-col">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap text-black cursor-pointer px-3"
                  >
                    New product
                  </Link>
                )}
                {/* <Link
                  to={"signup"}
                  className="whitespace-nowrap text-black cursor-pointer px-3"
                >
                  Sign Up
                </Link> */}
                {userData.firstName ? (
                  <p
                    className="cursor-pointer whitespace-nowrap text-black px-3"
                    onClick={handleLogOut}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="cursor-pointer whitespace-nowrap text-black px-3"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
