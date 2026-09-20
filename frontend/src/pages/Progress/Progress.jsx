import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Progress.css";
import ProgressStats from "../../components/ProgressStats/ProgressStats";
import StudyHours from "../../components/StudyHours/StudyHours";

function Progress() {
  return (
    <div className="progress-page">
      <Sidebar />

     <main className="progress-main">
        <Topbar
            showGreeting={false}
            title="Progress"
            subtitle="Track your learning journey. Every step counts!"
        />

        <div className="progress-content">
            <ProgressStats />
            <StudyHours />
        </div>
    </main>
    </div>
  );
}

export default Progress;