import { Link } from "react-router-dom";
import {
  FaHouse,
  FaBookOpen,
  FaChartSimple,
  FaChalkboard,
  FaMessage,
} from "react-icons/fa6";

function Navbar() {
  return (
    <div className="w-full bg-gray-300 h-14 flex items-center">
      <nav className="w-full text-xl flex gap-6 mx-14 font-medium">
        <Link
          className="flex items-center gap-2 h-14 px-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          to="/dashboard"
        >
          <FaHouse />
          Dashboard
        </Link>
        <Link
          className="flex items-center gap-3 h-14 px-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          to="/grades"
        >
          <FaBookOpen />
          Grades
        </Link>
        <Link
          className="flex items-center gap-3 h-14 px-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          to="/analytics"
        >
          <FaChartSimple />
          Analytics
        </Link>
        <Link
          className="flex items-center gap-3 h-14 px-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          to="/student-portal"
        >
          <FaChalkboard />
          Student Portal
        </Link>
        <Link
          className="flex items-center gap-3 h-14 px-2 hover:bg-yellow-500 transition duration-300 ease-in-out"
          to="/feedback"
        >
          <FaMessage />
          Feedback
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
