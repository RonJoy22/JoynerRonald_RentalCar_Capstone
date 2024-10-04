import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from './Footer'
import Sketch from '../carphotos/Sketch.jpg'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = (user) => {
    
    console.log('User logged in:', user);
  };

  const login = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      handleLogin(data.user); 
      navigate('/home'); 
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`http://localhost:8080/AscentRentals/Login/${email}`, { // Adjust this endpoint as necessary
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed.');
        return;
      }

      const data = await response.json();
      
      handleLogin(data.user); 
      navigate('/'); 
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
      <>
      <div style={{ 
      backgroundImage: `url(${Sketch})`,
      backgroundSize:'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    }}>
      <div className=" z-10 w-full mx-auto max-w-md px-6 py-12 bg-transparent h-screen bg-opacity-80 rounded-lg ">
        <h1 className="text-3xl font-bold text-center audiowide-regular text-violet-800 mb-8">Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-center font-medium text-black mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-center text-black mb-2" 
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex audiowide-regular justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <Footer/>
      </div>
      </>
  );
}

export default Login;