import "./StudyHours.css";

function StudyHours() {
    return (
        <section className="study-hours">

            <div className="study-hours-header">
                <div>
                    <h2>Study Hours Overview</h2>
                    <p>Track your study time throughout the week.</p>
                </div>

                <select className="study-hours-filter">
                    <option>This Week</option>
                    <option>This Month</option>
                </select>
            </div>

            <div className="study-hours-chart">
                <div className="study-hours-y-axis">
                    <span>6h</span>
                    <span>4h</span>
                    <span>2h</span>
                    <span>0h</span>
                </div>

                <div className="study-hours-bars">

                    <div className="study-day">
                        <div className="study-bar" style={{ height: "70%" }}></div>
                        <span>Mon</span>
                    </div>

                    <div className="study-day">
                        <div className="study-bar" style={{ height: "45%" }}></div>
                        <span>Tue</span>
                    </div>

                    <div className="study-day">
                        <div className="study-bar" style={{ height: "85%" }}></div>
                        <span>Wed</span>
                    </div>

                    <div className="study-day">
                        <div className="study-bar" style={{ height: "60%" }}></div>
                        <span>Thu</span>
                    </div>

                    <div className="study-day">
                        <div className="study-bar" style={{ height: "90%" }}></div>
                        <span>Fri</span>
                    </div>

                    <div className="study-day">
                        <div className="study-bar" style={{ height: "55%" }}></div>
                        <span>Sat</span>
                    </div>

                    <div className="study-day">
                        <div className="study-bar" style={{ height: "35%" }}></div>
                        <span>Sun</span>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default StudyHours;