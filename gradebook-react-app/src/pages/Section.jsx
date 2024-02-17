import Header from "../components/Header";
import Navbar from "../components/Navbar";
import dashboardBackground from "../assets/images/bg3.jpg";
import SectionTable from "../components/SectionTable";

function Section() {
  return (
    <div>
      <Header />
      <Navbar />
      <div
        className="w-full flex flex-col p-5 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${dashboardBackground})` }}
      >
        <div className="mb-10">
          <label className="mx-3 text-lg">Select a section:</label>
          <select className="outline px-2">
            <option value="">All Sections</option>
          </select>
        </div>
        <SectionTable />
      </div>
    </div>
  );
}

export default Section;
