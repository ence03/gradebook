import Header from "../components/Header";
import Navbar from "../components/Navbar";
import dashboardBackground from "../assets/images/bg3.jpg";

function Course() {
  return (
    <div>
      <Header />
      <Navbar />
      <div
        className="w-full min-h-screen bg-cover bg-center py-5 px-10 flex flex-col"
        style={{ backgroundImage: `url(${dashboardBackground})` }}
      >
        <div className="mb-5 p-2 border-b-2 border-white">
          <h1 className="text-2xl font-semibold">My Course Load:</h1>
        </div>
        <div className="w-full grid place-content-center">
          <div className=" relative bg-blue-400 p-5 w-[350px] h-[180px] flex flex-col items-center justify-around shadow-lg shadow-gray-700">
            <p>2023-1 College of xxxxxx</p>
            <div className="text-center text-xl font-semibold">
              <h3>IT3R2</h3>
              <h3>2023-1 SubjectXxx</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
