import "./ContinueLearning.css";
import { FaBookOpen } from "react-icons/fa";
import books from "../../assets/illustrations/books.png";


export default function ContinueLearning() {
    return (
        <div className="learning-card">

            <div className="learning-header">
                <div className="learning-title">
                    <FaBookOpen />
                    <h3>Continue Learning</h3>
                </div>
            </div>

            <p className="learning-topic">
                DBMS - Normalization
            </p>

            <div className="learning-progress">

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: "30%" }}
                    ></div>
                </div>

                <span>30%</span>

            </div>

            <div className="learning-book">
                <img src={books} alt="Books" />
            </div>
        </div>
    );
}