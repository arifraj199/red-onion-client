import React from "react";
import { AiFillCar } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { FaShuttleVan } from "react-icons/fa";

const Service = () => {
  return (
    <div className="mt-12 text-left px-12">
      <div className="w-1/2">
        <h1 className="text-3xl font-semibold mb-3">Why Choose Us</h1>
        <p>
          {" "}
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-8">
        <div>
          <img
            src="https://i.ibb.co/9Yd2g0g/adult-blur-blurred-background-687824.png"
            alt=""
          />
          <div className="flex p-6">
            <div className="mt-1">
              <AiFillCar className="bg-red-600 p-1 text-white rounded-full text-xl "></AiFillCar>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
              <p className="text-sm font-normal">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface.
              </p>
              <div>
                <button className="btn btn-link capitalize no-underline pl-0 text-blue-400">
                  See More
                  <BsFillArrowRightCircleFill className="text-lime-500 ml-3"></BsFillArrowRightCircleFill>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/5c5jpyV/chef-cook-food-33614.png"
            alt=""
          />
          <div className="flex p-6">
            <div className="mt-1">
              <BiBell className="bg-red-600 p-1 text-white rounded-full text-xl "></BiBell>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold">A Good Auto Responder</h3>
              <p className="text-sm font-normal">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface.
              </p>
              <div>
                <button className="btn btn-link capitalize no-underline pl-0 text-blue-400">
                  See More
                  <BsFillArrowRightCircleFill className="text-lime-500 ml-3"></BsFillArrowRightCircleFill>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/m4pJcRP/architecture-building-city-2047397.png"
            alt=""
          />
          <div className="flex p-6">
            <div className="mt-1">
              <FaShuttleVan className="bg-red-600 p-1 text-white rounded-full text-xl "></FaShuttleVan>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold">Home Delivery</h3>
              <p className="text-sm font-normal">
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface.
              </p>
              <div>
                <button className="btn btn-link capitalize no-underline pl-0 text-blue-400">
                  See More
                  <BsFillArrowRightCircleFill className="text-lime-500 ml-3"></BsFillArrowRightCircleFill>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
