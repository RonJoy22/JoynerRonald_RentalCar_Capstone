import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    // Logic to handle user login (e.g., save user info to state or context)
    console.log('User logged in:', user);
  };

  const login = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        // other options like headers and body
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      handleLogin(data.user); // This should now work
      navigate('/home'); // Redirect to home page on successful login
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
        method: 'POST',  // Use POST or GET as per your backend requirements
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
      // Handle the successful login, e.g., save user info, call handleLogin, etc.
      handleLogin(data.user); // Assuming the API returns user data
      navigate('/'); // Redirect to home page on successful login
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
      
      <div className=" z-10 w-full mx-auto max-w-md px-6 py-12 bg-white bg-opacity-80 rounded-lg ">
        <h1 className="text-3xl font-bold text-center audiowide-regular text-gray-800 mb-8">Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
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
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-green-500"
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
  );
}

export default Login;