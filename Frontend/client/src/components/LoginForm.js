import React, { useState } from "react";
import "./LoginForm.css"; 
import { loginUser, registerUser } from "../services/api"; 
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onClose, onLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For signup
  const [confirmPassword, setConfirmPassword] = useState(""); // For signup
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleGoogleClick = () => {
    window.location.href = "/auth/google";
  };

  // ✅ Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser({ email, password });
      setUserId(userData.id);
      setSuccess("Login successful!");
      onLoginSuccess(userData.id); // Notify parent about successful login
      navigate("/", { state: { userId: userData.id } });
    } catch (err) {
      setError(err.message);
    }
  };

  // ✅ Signup function
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userData = await registerUser({ name, email, password });
      setSuccess("Signup successful! Please login.");
      setIsSignup(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          {isSignup && (
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignup && (
            <input 
              type="password" 
              placeholder="Confirm Password" 
              required 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span className="toggle-link" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </p>

        <button className="google-signin-btn" onClick={handleGoogleClick}>
          <i className="fab fa-google google-icon"></i> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
