import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {

    const styleClass = ({ isActive }) =>
    isActive
      ? "text-orange-700 font-bold"
      : "text-black";
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <div>
          <input
            type="search"
            placeholder="Search products.. "
            className="bg-white border rounded-md p-1 px-3 "
          />
        </div>
        <nav className=" flex gap-5 text-blue-700 font-bold">
          <Link className={styleClass} to="featured">Featured </Link>
          <Link className={styleClass} to="new">New</Link>
        </nav>
        <Outlet/>
      </div>
    </>
  );
}

export default Product;
