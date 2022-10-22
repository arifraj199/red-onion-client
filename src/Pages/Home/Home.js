import React from "react";
import { Link, Outlet } from "react-router-dom";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co/7rZV84V/bannerbackground.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
        }}
      >
        <div className="pt-48">
          <h1 className="text-3xl font-semibold">
            Best Food Waiting For Your Belly
          </h1>
          <div className="items-center flex justify-center mt-5">
            <input
              type="text"
              placeholder="Search Food items ..."
              class="input w-full input-sm max-w-xs rounded-r-none rounded-l-full"
            />
            <button className="btn capitalize btn-sm rounded-l-none rounded-r-full bg-red-600 border-none hover:bg-red-700">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="my-6">
        <Link className="font-semibold" to='/'>Breakfast</Link>
        <Link className="mx-6 font-semibold" to='/lunch'>Lunch</Link>
        <Link className="font-semibold" to='/dinner'>Dinner</Link>
      </div>
      <Outlet></Outlet>
      <Service></Service>
    </div>
  );
};

export default Home;
