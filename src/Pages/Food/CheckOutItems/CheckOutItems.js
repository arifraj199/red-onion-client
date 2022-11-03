import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CheckOutItems = () => {
  const { id } = useParams();
  const [items, setItems] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/checkoutitems/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [id]);
  console.log(items);
  return (
    <div className="my-24">
      <div className="grid grid-cols-2 gap-0 items-center">
        <div>
          <h1 className="text-4xl font-semibold mb-6">{items.name}</h1>
          <p>{items.description}</p>
          <h2 className="text-2xl font-bold my-4">${items.price}</h2>
          <div>
            <button className="btn capitalize bg-red-500 border-none rounded-2xl px-6 btn-sm font-normal">Add</button>
          </div>
        </div>
        <div>
          <img width='350' src={items.picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CheckOutItems;
