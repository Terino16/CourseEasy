
import axios from 'axios';
import  { FormEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import { authState } from '../Store/UserStore';
const Signup = () => {
  const BASE_URL_LOCAL="http://localhost:3001";
  const setUser = useSetRecoilState(authState);
  const [Signupdata,setSignupdata]=useState({
    name: '',
    email: '',
    password: ''
  })

  const handlechange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSignupdata({ ...Signupdata, [name]: value });
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL_LOCAL}/user/Signup`, {
        name: Signupdata.name,
        email: Signupdata.email,
        password: Signupdata.password,
      });
      console.log('Signup successful:', response.data);
      const token = response.data.token;
        Cookies.set("token",token);
        Cookies.set("name",response.data.name);
        Cookies.set("id",response.data.id);
        setUser(response.data.name);
        window.location.href="/";
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              placeholder="Name"
              value={Signupdata.name}
              onChange={handlechange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="email"
              placeholder="Email"
              value={Signupdata.email}
              onChange={handlechange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="password"
              placeholder="Password"
              value={Signupdata.password}
              onChange={handlechange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup