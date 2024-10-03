import { Link } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaPlus, FaPoll, FaList, FaSearch, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar({ show, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className={`h-full bg-gray-p w-72 p-4 rounded-xl transition-width duration-300`}>
        <div className={`flex flex-col`}>
          <div className={`flex justify-between items-center`}>
            <h1 className={`text-white text-3xl font-bold text-center mt-2`}>pollQ</h1>
            <button onClick={onClose} className="text-white">
              <FaBars />
            </button>
          </div>

          <button 
            onClick={onClose} 
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            Cancel
          </button>

          <div className={`flex flex-col gap-4 mt-10`}>
            <Link to={"/home"} className="custom-sidebar-links flex items-center gap-2">
              <FaHome />
              {"Home"}
            </Link>
            <Link to={"/profile"} className="custom-sidebar-links flex items-center gap-2">
              <FaUser />
              {"Profile"}
            </Link>
            <Link to={"/createnewpoll"} className="custom-sidebar-links flex items-center gap-2">
              <FaPlus />
              {"Create Poll"}
            </Link>
            <Link to={"/activepolls"} className="custom-sidebar-links flex items-center gap-2">
              <FaPoll />
              {"Active Polls"}
            </Link>
            <Link to={"/mypolls"} className="custom-sidebar-links flex items-center gap-2">
              <FaList />
              {"My Polls"}
            </Link>
            <Link to={"/search"} className="custom-sidebar-links flex items-center gap-2">
              <FaSearch />
              {"Search Polls"}
            </Link>
            <Link to={"/logout"} className="custom-sidebar-links flex items-center gap-2">
              <FaSignOutAlt />
              {"Logout"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
