import React from "react";

const LunchItem = ({ lunch }) => {
  return (
    <div>
      <div>
        <div className="text-left">
          <div className="w-1/2 mx-auto">
            <img width="180" src={lunch.picture} alt="" />
          </div>
          <div className="mt-3 text-center">
            <h1 className="font-semibold">{lunch.name}</h1>
            <p className="font-light mt-1 text-sm">{lunch.description}</p>
            <h3 className="font-bold mt-2">${lunch.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunchItem;
