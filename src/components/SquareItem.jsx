import React, { useEffect, useState } from "react";
import XO from "../UI/XO";

const SquareItem = ({ item }) => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  };

  useEffect(() => {}, [item]);

  return (
    <>
      <div
        disabled={play}
        onClick={handlePlay}
        className="w-24 h-24 mt-10  shadow-xl bg-black-1050 p-3 rounded-md text-white hover:cursor-pointer"
      >
        {item === 2 ? (
          <XO text={"text-green-950"} letter={"X"} />
        ) : item === 3 ? (
          <XO text={"text-orange-950"} letter={"O"} />
        ) : (
           <p className="text-black-1050">{1}</p> 
        )}
      </div>
      <div className=""></div>
    </>
  );
};

export default SquareItem;
