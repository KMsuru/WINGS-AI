import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import DashboardHero from "../../components/DashboardHero/DashboardHero";
import "./Dashboard.css";
import StudyStreak from "../../components/StudyStreak/StudyStreak";
import TodaysGoals from "../../components/TodaysGoals/TodaysGoals";
import UpcomingTasks from "../../components/UpcomingTasks/UpcomingTasks";
import ContinueLearning from "../../components/ContinueLearning/ContinueLearning";
import ContinueChat from "../../components/ContinueChat/ContinueChat";
import VoiceAssistant from "../../components/VoiceAssistant/VoiceAssistant";
import NotesCard from "../../components/NotesCard/NotesCard";


export default function Dashboard() {

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <DashboardHero />

        <div className="dashboard-cards">
          <div className="card">
              <TodaysGoals />
          </div>

          <div className="card">
              <StudyStreak />
          </div>

          <div className="card">
              <UpcomingTasks />
          </div>

          {/* Bottom Cards */}
          <div className="small-card">
              <ContinueLearning />
          </div>

          <div className="small-card">
              <ContinueChat />
          </div>

          <div className="small-card">
              <VoiceAssistant />
          </div>

          <div className="small-card">
              <NotesCard />
          </div>

        </div>
      </main>
    </div>
  );
}