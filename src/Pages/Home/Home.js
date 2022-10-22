import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Service from "./Service";

const Home = () => {
  let activeStyle = {
    textDecoration: "underline",
    color:"red",
  };
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

      <div className="my-12">
        <NavLink
          className="font-semibold"
          to="/breakfast"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Breakfast
        </NavLink>

        <NavLink
          className="font-semibold mx-12"
          to="/lunch"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Lunch
        </NavLink>

        <NavLink
          className="font-semibold"
          to="/dinner"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Dinner
        </NavLink>
      </div>

      <Outlet></Outlet>
      <div className="mt-16">
        <button className="btn btn-sm capitalize border-none rounded-none bg-red-700 hover:bg-red-800">
          Cheakout Your Food
        </button>
      </div>
      <Service></Service>
    </div>
  );
};

export default Home;
