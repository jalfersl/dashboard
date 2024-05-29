import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState(null);

  const logout = () => {
    setToken(null);
  };

  if (!token) {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/login">Entrar</Link></li>
              <li><Link to="/register">Cadastro de Usuário</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    );
  }

  const user = jwtDecode(token);

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={logout}>Sair</button>
      <Dashboard />
    </div>
  );
}

export default App;