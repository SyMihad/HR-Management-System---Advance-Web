'use client'
import axios from 'axios';
import { useState } from 'react';
// import { cookies } from 'next/headers';
import Cookies from 'js-cookie';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, PetPassword] = useState('');

  const handleLogin = async () => {
    try {
      const role = await axios.post('http://localhost:3001/auth/login', {
        Email,
        Password,
      },{
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }},);

      // Retrieve the token from the cookie set by the backend
      const token = Cookies.get('user_token');
      console.log(Cookies.get())
      console.log('token: ', token);
      console.log('role' , role.data);
      console.log('Logging in with:', { Email, Password });

      // Proceed with token-based authentication (e.g., redirect to protected areas)
    } catch (error) {
      // Handle login errors (e.g., display error messages)
    }
    // Add your authentication logic here, e.g., send a request to your NestJS backend
  };

  return (
    <div className="flex items-center from-sky-500 to-indigo-500 bg-gradient-to-r justify-center min-h-screen">
      <div className="w-full max-w-md">
        <form
          className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="Password"
              placeholder="********"
              value={Password}
              onChange={(e) => PetPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;