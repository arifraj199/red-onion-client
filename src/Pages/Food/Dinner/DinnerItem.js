import React from "react";

const DinnerItem = ({ dinner }) => {
  return (
    <div>
      <div>
        <div>
          <div className="text-left">
            <div className="w-1/2 mx-auto">
              <img width="180" src={dinner.picture} alt="" />
            </div>
            <div className="mt-3 text-center">
              <h1 className="font-semibold">{dinner.name}</h1>
              <p className="font-light mt-1 text-sm">{dinner.description}</p>
              <h3 className="font-bold mt-2">${dinner.price}</h3>
            </div>
            <div className="w-1/3 mx-auto mt-4">
          <button
            className="btn btn-sm text-xs capitalize border-none rounded-none bg-red-700 hover:bg-red-800"
          >
            Cheakout Food
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinnerItem;
