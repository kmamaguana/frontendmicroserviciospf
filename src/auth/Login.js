import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    // Simulación de validación de login (normalmente aquí harías una llamada a una API)
    if (email === 'test@example.com' && password === 'password123') {
      navigate('/cart');  // Redirigir a la página principal del usuario
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="left-side">
      </div>

      <div className="right-side">
        <div className="login-form-container">
          <div className="login-form">
            <h2><span className="user-icon">👤</span> Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
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

              <button type="submit" className="login-button">Login</button>

              <div className="forgot-password">
                <a href="/forgot-password">Forgot your password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
