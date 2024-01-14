import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Grades from "./pages/Grades";
import Analytics from "./pages/Analytics";
import StudentPortal from "./pages/StudentPortal";
import Feedback from "./pages/Feedback";
import Section from "./pages/Section";
import Course from "./pages/Course";
import Students from "./pages/Students";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/section" element={<Section />} />
          <Route path="/course" element={<Course />} />
          <Route path="/students" element={<Students />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
