import React from "react";
import XO from "../UI/XO";

const Winner = ({ text, reset, nextRound }) => {
  return (
    <>
      <div className="absolute p-3 rounded-lg top-2/4 bg-black-1050 w-full z-50">
        <div className="flex flex-col items-center justify-center gap-5 px-10">
          <h3 className="text-white">{text}</h3>
          <div className="flex items-center gap-5">
            <XO
              text={
                text === "You Win"
                  ? "text-green-950"
                  : text === "PC Wins"
                  ? "text-orange-950"
                  : ""
              }
              letter={text === "You Win" ? "X" : "O"}
            />
            <h3
              className={`${
                text === "You Win"
                  ? "text-green-950"
                  : text === "PC Wins"
                  ? "text-orange-950"
                  : "text-gray-950"
              } uppercase text-2xl`}
            >
              {text === "Tie" ? "No one takes the round" : "Takes the round"}
            </h3>
          </div>
          <div className="flex justify-center gap-2">
            <button onClick={reset} className="bg-gray-950">
              Quit
            </button>
            <button onClick={nextRound} className="bg-orange-950">
              Next Round
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winner;
