import Header from "../components/Header";
import Navbar from "../components/Navbar";
import dashboardBackground from "../assets/images/bg3.jpg";
import {
  AiOutlineAppstore,
  AiOutlineDatabase,
  AiTwotoneBell,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Header />
      <Navbar />
      <div
        className="w-full min-h-screen bg-cover bg-center flex items-center justify-center flex-col"
        style={{ backgroundImage: `url(${dashboardBackground})` }}
      >
        <div className="flex items-center justify-start w-full px-10">
          <Link className="w-96 h-44 bg-white shadow-lg shadow-gray-500 flex items-center justify-center gap-3 text-2xl font-semibold text-gray-900">
            <AiTwotoneBell className="text-5xl" />
            <p>New Message</p>
          </Link>
        </div>
        <div className="pt-5 px-10 border-t-2 mt-12 w-full border-gray-500">
          <p className="text-2xl mb-5 font-semibold text-gray-700">
            View Course load and Sections:
          </p>
          <div className="flex items-center justify-start gap-20">
            <Link className="w-96 h-44 bg-yellow-500 shadow-lg shadow-gray-500 flex items-center justify-center gap-3 text-2xl font-semibold text-gray-900">
              <AiOutlineAppstore className="text-5xl" />
              <p>Sections</p>
            </Link>
            <Link className="w-96 h-44 bg-blue-500 shadow-lg shadow-gray-500 flex items-center justify-center gap-3 text-2xl font-semibold text-gray-900">
              <AiOutlineDatabase className="text-5xl" />
              <p>Courses</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
