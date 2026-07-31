import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="notfound-container">
            <h1 className="error-code">404</h1>

            <h2>Page Not Found</h2>

            <p>
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            <Link to="/" className="home-btn">
                Go Back Home
            </Link>
        </div>
    );
}

export default NotFound;