import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Sketch from '../carphotos/Sketch.jpg'

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:8080/AscentRentals/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed.');
        return;
      }

      // Optionally, you can redirect to the login page on successful signup
      navigate('/LogIn');
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
    <main>
    <div className="container mx-auto px-4 py-8 h-screen">
      <h1 className="text-3xl font-bold text-center text-violet-800 audiowide-regular mb-8">Sign Up</h1>
      <form className="max-w-md bg-white mx-auto" onSubmit={submitData}>
  
        <div className="mb-4">
          <label htmlFor="name" className="block text-center text-black mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-violet-500 focus:border-violet-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-center text-black mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-violet-500 focus:border-violet-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-center text-black mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-violet-500 focus:border-violet-500"
          />
        </div>
        <button type="submit" className="w-full bg-violet-600 text-white audiowide-regular px-4 py-2 rounded hover:bg-green-700 transition-colors">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login</Link>
      </p>
    </div>
    </main>
    <Footer/>
    </div>
    </>
  )
};