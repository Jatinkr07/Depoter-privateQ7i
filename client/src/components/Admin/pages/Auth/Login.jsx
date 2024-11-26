/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API_URL from "../../../../utils/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/admin/login`, {
        username,
        password,
      });

      // Save the token to localStorage
      localStorage.setItem("token", response.data.token);

      // Display success toast
      toast.success("Successfully logged in!");

      // Redirect to the dashboard
      navigate("/admin-dashboard");
    } catch (err) {
      // Display error toast
      toast.error("Invalid credentials, please try again!");

      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-700">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
