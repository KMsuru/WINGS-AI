import "./Auth.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Password reset link sent!");
    }, 2000);
  };

  return (
    <div className="auth-page">

      <div className="auth-right">

        <div className="auth-card">

          <div className="floating-logo">
            <div className="logo-circle">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <h2>Forgot Password</h2>

          <p className="auth-subtitle">
            Enter your email to receive a password reset link.
          </p>

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="primary-btn"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Reset Link"}
            </button>

          </form>

          <p className="switch-auth">
            <Link to="/login">
              ← Back to Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;