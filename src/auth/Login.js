import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../config/authContext';
import { LoginAPI } from '../config/urlConstext';
import './Login.css';

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Obtener la ruta de origen
  const { signIn } = useContext(AuthContext);

  // Ruta de origen (si existe) o '/' como predeterminado
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validación de los campos vacíos
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await fetch(`${LoginAPI}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      signIn(data.token); // Guarda el token en el contexto
      navigate(from, { replace: true }); // Redirige a la ruta original o al inicio
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="left-side"></div>

      <div className="right-side">
        <div className="login-form-container">
          <div className="login-form">
            <h2>
              <span className="user-icon">👤</span> Login
            </h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="login-button">
                Login
              </button>

              <div className="forgot-password">
                <a href="/forgot-password">Forgot your password?</a>
              </div>

              <div className="signup-link">
                <p>Don't have an account? <a href="/signup">Sign up here</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
