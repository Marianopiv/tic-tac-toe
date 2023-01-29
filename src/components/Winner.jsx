import React from "react";
import XO from "../UI/XO";

const Winner = ({ text, reset, nextRound }) => {
  return (
    <>
      <div className="fixed py-3 rounded-lg md:top-1/4 md:right-1/4 top-1/4 w-screen md:w-1/2 bg-black-1050 z-50 shadow-2xl">
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
