import React, { useState } from "react";
import "./LoginForm.css"; // ✅ Add CSS for styling

const LoginForm = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  const handleGoogleClick = () => {
    // Redirect to your backend OAuth route for Google Sign-In
    window.location.href = "/auth/google"; // Assuming you have an endpoint /auth/google on your backend
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close button (X) at the top right */}
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        <form>
          {isSignup && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignup && <input type="password" placeholder="Confirm Password" required />}

          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span className="toggle-link" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </p>

        {/* Google Sign-In Button */}
        <button className="google-signin-btn" onClick={handleGoogleClick}>
          <i className="fab fa-google google-icon"></i> {/* Font Awesome Google Icon */}
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
