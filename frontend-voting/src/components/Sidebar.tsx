import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaPlus, FaPoll, FaList, FaSearch, FaSignOutAlt, FaChartBar } from "react-icons/fa";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={`h-screen w-70`}>
      <div className={`sticky h-screen bg-gray-p ${isCollapsed ? "w-20" : "w-60"} p-4 transition-width duration-300`}>
      <div className={`flex flex-col`}>
        <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-between'} items-center`}>
          <h1 className={`text-white text-3xl font-bold text-center mt-2 ${isCollapsed ? "hidden" : "block"}`}>pollQ</h1>
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white">
            <FaBars />
          </button>
        </div>

        <div className={`flex flex-col gap-4 mt-10 ${isCollapsed ? "items-center" : ""}`}>
            <Link to={"/home"} className="custom-sidebar-links flex items-center gap-2">
              <FaHome />
              {!isCollapsed && "Home"}
            </Link>
            <Link to={"/profile"} className="custom-sidebar-links flex items-center gap-2">
              <FaUser />
              {!isCollapsed && "Profile"}
            </Link>
            <Link to={"/createnewpoll"} className="custom-sidebar-links flex items-center gap-2">
              <FaPlus />
              {!isCollapsed && "Create Poll"}
            </Link>
            <Link to={"/activepolls"} className="custom-sidebar-links flex items-center gap-2">
              <FaPoll />
              {!isCollapsed && "Active Polls"}
            </Link>
            <Link to={"/mypolls"} className="custom-sidebar-links flex items-center gap-2">
              <FaList />
              {!isCollapsed && "My Polls"}
            </Link>
            <Link to={"/search"} className="custom-sidebar-links flex items-center gap-2">
              <FaSearch />
              {!isCollapsed && "Search Polls"}
            </Link>
            <Link to={"/results"} className="custom-sidebar-links flex items-center gap-2">
              <FaChartBar />
              {!isCollapsed && "Results"}
            </Link>
            <Link to={"/logout"} className="custom-sidebar-links flex items-center gap-2">
              <FaSignOutAlt />
              {!isCollapsed && "Logout"}
            </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
