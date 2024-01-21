import { useState } from "react";
import logo from "../assets/images/egradebook-high-resolution-logo-transparent.png";
import { FaCircleUser, FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaArrowRightToBracket } from "react-icons/fa6";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="w-full py-7 px-5 flex justify-between items-center bg-gray-50">
      <img className="w-52" src={logo} alt="logo" />
      <div className="flex items-center gap-3">
        <FaCircleUser className="text-5xl cursor-pointer" />
        <p className="text-xl" onClick={toggleDropdown}>
          Welcome! User
        </p>
        <FaChevronDown className="cursor-pointer" onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="absolute top-16 right-5 bg-white border border-gray-800 rounded-lg shadow-md mt-2 w-40 py-3">
            <Link className="flex flex-col items-start gap-4 border-b border-gray-700">
              <div className="flex items-center gap-3 text-xl mb-2">
                <BsFillPersonFill className="ml-4" />
                <p>My Profile</p>
              </div>
            </Link>
            <Link className="flex flex-col items-start gap-4" to="/login">
              <div className="flex items-center gap-3 text-xl mt-2">
                <FaArrowRightToBracket className="ml-4" />
                <p>Logout</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
