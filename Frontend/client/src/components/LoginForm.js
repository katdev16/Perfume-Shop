import React from "react";
import "./LoginForm.css"; // ✅ Add CSS for styling

const LoginForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginForm;
