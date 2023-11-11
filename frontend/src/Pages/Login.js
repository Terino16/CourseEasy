import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { UserContext } from '../UserContext';
const LoginPage = () => {
  // State variables to store user input
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setuser}=useContext(UserContext);
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      fetch("http://localhost:3001/user/Login",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json', // Specify JSON content type
    },
      body:JSON.stringify({
        "email":email,
        "password":password
      })},).then(response=>response.json()).then(data=>{
        console.log(data) 
        setuser(data)
      })
      alert('Login successful!');
      Cookies.set('authToken', true)
      navigate('/');

    } else {
      alert('Invalid username or password. Please try again.');
    }
  };
 

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

export default LoginPage;
