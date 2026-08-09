import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import PlannerControls from "../../components/Planner/PlannerControls/PlannerControls";
import CalendarCard from "../../components/Planner/Calendar/CalendarCard";
import GoalsCard from "../../components/Planner/GoalsCard/GoalsCard";
import PlannerTimeline from "../../components/Planner/PlannerTimeline/PlannerTimeline";
import TodaysTasks from "../../components/Planner/TodaysTasks/TodaysTasks";
import "./Planner.css";

export default function Planner() {
    return (
        <div className="planner">
            <Sidebar />

            <main className="planner-main">
                <Topbar
                    showGreeting={false}
                    title="Planner"
                    subtitle="Plan your day. Stay focused. Achieve your goals."
                />

                    <div className="planner-grid">
                

                    <div className="planner-left">
                        <CalendarCard />
                        <GoalsCard />
                    </div>

                    <div className="planner-center">
                        <PlannerControls />
                        <PlannerTimeline />
                    </div>

                    <div className="planner-right">
                        <TodaysTasks />
                    </div>

                </div>
            </main>
        </div>
    );
}