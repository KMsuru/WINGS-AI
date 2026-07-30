import "./Auth.css";
import logo from "../../assets/logo.png";
import mascot from "../../assets/mascot.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

function Register() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!fullName.trim()) {
    toast.error("Full name is required");
    return;
  }

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

    if (password.length < 8) {
        toast.error("Password must be at least 8 characters");
        return;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
    }

    if (!acceptedTerms) {
        toast.error("Please accept Terms & Conditions");
        return;
    }

    setLoading(true);

    setTimeout(() => {
        setLoading(false);
        toast.success("Account Created Successfully!");
    }, 2000);
    };
  const getPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    switch (score) {
        case 0:
        case 1:
        return {
            label: "Weak",
            color: "#EF4444",
            width: "25%",
        };

        case 2:
        return {
            label: "Medium",
            color: "#F59E0B",
            width: "50%",
        };

        case 3:
        return {
            label: "Strong",
            color: "#3B82F6",
            width: "75%",
        };

        case 4:
        return {
            label: "Very Strong",
            color: "#10B981",
            width: "100%",
        };

        default:
        return {
            label: "",
            color: "#E5E7EB",
            width: "0%",
        };
    }
    };

    const strength = getPasswordStrength(password);

  return (
    <div className="auth-page">

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
            learning, interview preparation, resume building, and
            career success.
            </p>

            <div className="illustration">
            <img src={mascot} alt="WINGS AI Mascot" />
            </div>

        </div>
        </div>

      <div className="auth-right">
        <div className="auth-card">
            <div className="floating-logo">
                <div className="logo-circle">
                    <img src={logo} alt="WINGS AI" />
                </div>
                </div>

                <h2>Create Account</h2>

                <p className="auth-subtitle">
                Start your AI-powered learning journey today.
                </p>

                <form className="register-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        id="fullname"
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>

                    <div className="password-field">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {password && (
                        <div className="password-strength">

                            <div className="strength-bar">
                            <div
                                className="strength-fill"
                                style={{
                                width: strength.width,
                                background: strength.color,
                                }}
                            />
                            </div>

                            <span
                            style={{
                                color: strength.color,
                            }}
                            >
                            {strength.label}
                            </span>

                        </div>
                        )}
                    </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>

                    <div className="password-field">
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    </div>

                <div className="terms">
                    <input
                        type="checkbox"
                        id="terms"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <label htmlFor="terms">
                    I agree to the <span>Terms &amp; Conditions</span>
                    </label>
                </div>

                <button
                type="submit"
                className="primary-btn"
                disabled={loading}
            >
                {loading ? "Creating Account..." : "Create Account"}
            </button>

                </form>

                <div className="divider">
                <span>OR</span>
                </div>

                <div className="social-buttons">

                    <button type="button" className="social-btn">
                        <FcGoogle className="social-icon" />
                        Google
                    </button>

                    <button type="button" className="social-btn">
                        <FaGithub className="social-icon" />
                        GitHub
                    </button>

                </div>

                <p className="switch-auth">
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
        </div>
      </div>

    </div>
  );
}

export default Register;