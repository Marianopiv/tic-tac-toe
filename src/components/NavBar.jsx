import React from "react";
import goBack from "../assets/goback.png";
import XO from "../UI/XO";


const NavBar = ({reset}) => {
  return (
    <>
      <nav className="flex items-center justify-between">
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
    </>
  );
};

export default NavBar;
