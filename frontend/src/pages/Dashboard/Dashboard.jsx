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
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) return;

    fetch("http://127.0.0.1:5000/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setUserName(data.name);
        }
      });
  }, []);

  return (
    <div className="dashboard">
      <Sidebar userName={userName} />

      <main className="dashboard-main">
        <Topbar userName={userName} />

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