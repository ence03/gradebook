import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Grades from "./pages/Grades";
import Analytics from "./pages/Analytics";
import Section from "./pages/Section";
import Course from "./pages/Course";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/section" element={<Section />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
