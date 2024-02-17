import dashboardBackground from "../assets/images/bg3.jpg";
import logo from "../assets/images/egradebook-high-resolution-logo-transparent.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center px-5 py-20 flex flex-col items-start"
      style={{ backgroundImage: `url(${dashboardBackground})` }}
    >
      <div>
        <img className="w-52" src={logo} alt="logo" />
      </div>
      <div className="w-full min-h-[500px] flex flex-col items-start justify-around">
        <div>
          <h1 className="text-7xl font-extrabold w-[700px] mb-4">
            Elevate Learning, Simplify Tracking
          </h1>
          <p className="text-2xl">Your Success, Our Grades</p>
        </div>
        <form className="flex flex-col items-center gap-5 w-full">
          <input
            className="w-[300px] h-10 bg-gray-300 rounded-3xl px-3 placeholder:text-gray-700 outline-none"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-[300px] h-10 bg-gray-300 rounded-3xl px-3 placeholder:text-gray-700 mb-2 outline-none"
            type="password"
            placeholder="Password"
          />
          <button
            className="rounded-3xl w-[100px] py-2 bg-yellow-400 hover:bg-yellow-300"
            onClick={handLogin}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
