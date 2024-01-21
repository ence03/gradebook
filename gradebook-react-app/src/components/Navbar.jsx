import { Link } from "react-router-dom";
import { FaHouse, FaBookOpen, FaChartSimple } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="w-full bg-gray-300 h-20 flex items-center">
      <nav className="w-full text-xl flex gap-9 mx-14 ">
        <Link
          className="flex items-center gap-2 h-20 px-2 hover:bg-yellow-500 transition duration-300 ease-in-out text-2xl"
          to="/dashboard"
        >
          <FaHouse />
          Dashboard
        </Link>
        <Link
          className="flex items-center gap-3 h-20 px-2 hover:bg-yellow-500 transition duration-300 ease-in-out text-2xl"
          to="/grades"
        >
          <FaBookOpen />
          Grades
        </Link>
        <Link
          className="flex items-center gap-3 h-20 px-2 hover:bg-yellow-500 transition duration-300 ease-in-out text-2xl"
          to="/analytics"
        >
          <FaChartSimple />
          Analytics
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
