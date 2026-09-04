import "./Auth.css";
import logo from "../../assets/logo.png";
import mascot from "../../assets/mascot.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }


    setLoading(true);

    fetch("http://127.0.0.1:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }

        return data;
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        toast.success(data.message);
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });



  };
  return (
    <div className="auth-page">

      {/* Left Section */}
      <div className="auth-left">
        <div className="left-content">

          <div className="auth-logo">
            <img src={logo} alt="WINGS AI" />
            <h2>WINGS AI</h2>
          </div>

          <h1>
            Learn. Prepare.
            <br />
            Get Hired.
          </h1>

          <p>
            Your AI-powered Academic & Career Platform for smarter
            learning, interview preparation, resume building,
            and career success.
          </p>

          <div className="illustration">
            <img src={mascot} alt="WINGS AI Mascot" />
          </div>

        </div>
      </div>

      {/* Right Section */}
      <div className="auth-right">
        <div className="auth-card">

          <div className="floating-logo">
            <div className="logo-circle">
              <img src={logo} alt="WINGS AI" />
            </div>
          </div>

          <h2>Welcome Back</h2>

          <p className="auth-subtitle">
            Log in to continue your learning journey.
          </p>

          <form className="register-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="primary-btn"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-buttons">

            <button className="social-btn">
              <FcGoogle className="social-icon" />
              Google
            </button>

            <button className="social-btn">
              <FaGithub className="social-icon" />
              GitHub
            </button>

          </div>

          <p className="switch-auth">
            Don't have an account?{" "}
            <Link to="/register">
              Sign Up
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;