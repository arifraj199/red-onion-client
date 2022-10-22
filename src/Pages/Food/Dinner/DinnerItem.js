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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinnerItem;
