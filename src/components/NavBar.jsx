import React from "react";
import goBack from "../assets/goback.png";
import XO from "../UI/XO";
import { Context, useAuth } from "../context/Provider";
import whiteArrow from "../assets/whiteArrow.png";
import useServices from "../hook/useServices";
import { useNavigate } from "react-router-dom";

const NavBar = ({ reset }) => {
  const { user } = useAuth();
  const {logout} = useServices()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }
  return (
    <>
      <nav className="flex items-center gap-8">
        <div className="flex ">
          <XO text={"text-green-950"} letter={"X"} />
          <XO text={"text-orange-950"} letter={"O"} />
        </div>
        <div className="bg-black-1050 shadow-xl rounded-md text-gray-950 flex items-center gap-5 p-3 font-extrabold">
          <h3>X</h3>
          <p className="uppercase ">turn</p>
        </div>
        <div
          onClick={reset}
          className="bg-gray-950 p-3 rounded-md hover:cursor-pointer"
        >
          {" "}
          <img className="w-8 bg-gray-950 arrow" src={goBack} alt="" />{" "}
        </div>
      </nav>
      <div className="flex gap-6 items-center text-white text-xs  uppercase font-bold">
        <p className="">Welcome {user&&user.email}</p>
        <button onClick={handleLogout} className="flex items-center bg-transparent  text-xs  uppercase font-bold">
          <p>logout</p>
          <img
            className="w-8 h-4 text-white"
            src={whiteArrow}
            alt=""
            srcset=""
          />
        </button>
      </div>
    </>
  );
};

export default NavBar;
