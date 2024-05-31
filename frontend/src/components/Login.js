 import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Definindo o estado 'message'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      setToken(response.data.token);
      setMessage('Login successful');
    } catch (error) {
      console.error(error);
      setMessage('Error logging in');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
      <label className="block mb-2">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>
      <label className="block mb-2">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
        Login
      </button>
      <p className="mt-4 text-center">{message}</p>
    </form>
  );
}

export default Login;