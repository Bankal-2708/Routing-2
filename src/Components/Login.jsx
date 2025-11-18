import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/");
  };

  return (
    <div className="m-5">
      <label className="text-xl font-bold m-5 ">
        Username:
        <input
          type="text "
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
          className="border rounded-md px-3 py-1 m-2"
        />
      </label>
      <button onClick={handleLogin}
      className="border px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
      >Log In</button>
    </div>
  );
}

export default Login;
