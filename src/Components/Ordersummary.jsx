import React from "react";
import { useNavigate } from "react-router-dom";

function Ordersummary() {
  const navigate=useNavigate()
  return (
    <div>
      <h1>Order Confirmed!</h1>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-400 px-3 py-1 rounded-md hover:text-orange-300"
      >
        Go Back
      </button>
    </div>
  );
}

export default Ordersummary;
