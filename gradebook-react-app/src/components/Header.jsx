import logo from "../assets/images/egradebook-high-resolution-logo-transparent.png";
import { FaCircleUser, FaChevronDown } from "react-icons/fa6";

function Header() {
  return (
    <header className="w-full py-3 px-5 flex justify-between items-center bg-gray-50">
      <img className="w-40" src={logo} alt="logo" />
      <div className="flex items-center gap-3">
        <FaCircleUser className="text-3xl cursor-pointer" />
        <p>Welcome! User</p>
        <FaChevronDown className="cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
