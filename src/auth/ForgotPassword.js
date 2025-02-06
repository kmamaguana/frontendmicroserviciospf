import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const forgotPasswordUrl = process.env.REACT_APP_AUTH_FORGOT_PASSWORD_URL
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (email === '') {
      setError('Please fill in the email field');
      return;
    }

    try {
      const response = await fetch(`${forgotPasswordUrl}/auth/forgot-password?email=${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to send reset link');
      }

      setSuccess('A reset link has been sent to your email.');

      // Redirect to login page after successful request
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 2000);
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="left-side"></div>

      <div className="right-side">
        <div className="forgot-password-form-container">
          <div className="forgot-password-form">
            <h2>
              <span className="user-icon">🔑</span> Forgot Password
            </h2>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
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

              <button type="submit" className="forgot-password-button">
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
