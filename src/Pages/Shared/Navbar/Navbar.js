import React from "react";
import { SlBasket } from 'react-icons/sl';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-12">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <a class="btn btn-ghost normal-case text-xl">
            <img width='160' src="https://i.ibb.co/8sVs4nV/logo2.png" alt="" />
          </a>
        </div>
        <div class="navbar-end ">
            <Link to='/'>
                <SlBasket></SlBasket>
            </Link>
          <Link to='/login' class="btn mx-2 hover:text-white capitalize rounded-3xl bg-white text-black border-none px-6 btn-sm">Login</Link>
          <Link to='/signup' class="btn capitalize bg-red-600 border-none rounded-3xl px-6 btn-sm">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
