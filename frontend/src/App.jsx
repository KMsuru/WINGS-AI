import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Chat from "./pages/Chat/Chat";
import Notes from "./pages/Notes/Notes";
import Planner from "./pages/Planner/Planner";

function App() {
  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        }
      />
      <Route path="/planner" element={<Planner/>}/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;