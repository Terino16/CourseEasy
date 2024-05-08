import axios from "axios";
import { useState, FormEvent } from "react";
import Cookies from "js-cookie";
import { authState } from "../Store/UserStore";
import { useSetRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {

  const BASE_URL_LOCAL = "http://localhost:3001";

  //UseStates
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Recoil
  const setUser = useSetRecoilState(authState);

  //HandleSubmit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      try {
        const response = await axios.post(
          `${BASE_URL_LOCAL}/user/Login`,
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const token = response.data.token;
        Cookies.set("token", token);
        Cookies.set("name", response.data.name);
        Cookies.set("id", response.data.id);
        setUser(response.data.id);
        toast(response.data.message);
        window.location.href="/"
      } catch (error) {
        console.error("Error during login:", error);
        alert("Invalid username or password. Please try again.");
      }
    } else {
      alert("Invalid username or password. Please try again.");
    }
};


  return (
    <div className="container mx-auto mt-8">
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setemail(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
