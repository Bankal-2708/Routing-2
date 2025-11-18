import { React } from "react";

import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handlelogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="font-bold m-5 flex  justify-center items-center">
      <h1 className=" text-xl">Welcome <span className="text-red-500">{auth.user}</span></h1>
      <button
        onClick={handlelogout}
        className="border px-3 py-1 m-2 bg-gray-300 rounded-md hover:bg-gray-400"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
