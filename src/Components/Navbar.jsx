import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./useAuth";

function Navbar() {
  const navlinkclass = ({ isActive }) =>
    isActive
      ? "text-orange-700 font-bold"
      : "text-black";

      const auth=useAuth()

  return (
    <nav className="md:flex bg-gray-200 justify-between p-4 items-center">
      
      <Link to="/">
        <img
          src="https://images.unsplash.com/photo-1680844540129-48dacc7d5d88"
          className="w-16 h-16 object-cover rounded-full"
          alt=""
        />
      </Link>

      <ul className="flex gap-4 items-center">
        <li>
          <NavLink className={navlinkclass} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={navlinkclass} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={navlinkclass} to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink className={navlinkclass} to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink className={navlinkclass} to="/profile">Profile</NavLink>
        </li>
      </ul>

      <div className="flex gap-4  justify-center items-center">
        {
        !auth.user &&(<NavLink className={navlinkclass} to="/login">Log In</NavLink>)
      }
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Get Started
      </button>
      </div>

      

      

    </nav>
  );
}

export default Navbar;
