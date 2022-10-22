import React from "react";

const BreakfastItem = ({ breakfast }) => {
  return (
    <div>
      <div className="text-left">
        <div className="w-1/2 mx-auto">
          <img width='180' src={breakfast.picture} alt="" />
        </div>
        <div className="mt-3 text-center">
          <h1 className="font-semibold">{breakfast.name}</h1>
          <p className="font-light mt-1 text-sm">{breakfast.description}</p>
          <h3 className="font-bold mt-2">${breakfast.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default BreakfastItem;
