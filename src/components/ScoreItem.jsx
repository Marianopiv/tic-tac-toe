import React from "react";

const ScoreItem = ({ name, color, value }) => {
  return (
    <div
      className={` ${color} p-3 rounded-md text-xs font-semibold w-24 h-14 mx-2 flex flex-col`}
    >
      <h1 className="text-xs">{name}</h1> <p>{value}</p>
    </div>
  );
};

export default ScoreItem;
