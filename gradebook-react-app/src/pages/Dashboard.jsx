import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {
  FaTableCellsLarge,
  FaUserGraduate,
  FaPeopleGroup,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="w-full h-full p-5 relative">
        <div className="w-full h-full grid grid-cols-3 place-items-center mx-auto my-32">
          <Link
            className="bg-yellow-500 w-96 h-44 flex justify-center items-center gap-4 text-2xl font-medium cursor-pointer transform transition-transform hover:scale-110"
            to="/section"
          >
            <FaTableCellsLarge />
            Sections
          </Link>
          <Link
            className="bg-blue-400 w-96 h-44 flex justify-center items-center gap-4 text-2xl font-medium cursor-pointer transform transition-transform hover:scale-110"
            to="/course"
          >
            <FaUserGraduate />
            Courses
          </Link>
          <Link
            className="bg-green-500 w-96 h-44 flex justify-center items-center gap-4 text-2xl font-medium cursor-pointer transform transition-transform hover:scale-110"
            to="/students"
          >
            <FaPeopleGroup />
            Students
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
