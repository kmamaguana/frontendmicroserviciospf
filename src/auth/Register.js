import React from "react";

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      {/* Aquí irían los formularios de registro */}
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
