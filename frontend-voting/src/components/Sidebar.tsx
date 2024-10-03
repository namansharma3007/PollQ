import { CircleUser, Ellipsis, Home, LibraryBig, LogOut, Plus, Trophy, VoteIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative h-[96vh] bg-gray-p md:w-72 w-fit  p-5 rounded-xl m-4">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex align-middle items-center md:justify-between justify-center">
            <div className="flex items-center">
              <div className="   "><img className="w-10 h-10" src="../../public/logo.png" alt=" Logo" /></div>
              <h1 className="ml-2 text-white text-2xl italic font-bold text-center hidden md:block ">
                pollQ
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <Link to={"/createnewpoll"}>
              <div className="w-full border-opacity-70 border-black-p border-2 py-3 bg-light-gray-p bg-opacity-30 hover:bg-black-p hover:border-opacity-50 hover:bg-opacity-50 transition-colors duration-300 rounded-xl">
                <div className="flex justify-center">
                  <Plus color="white" className="" />
                  <div className=" text-white hidden md:block">New Poll</div>
                </div>
              </div>
            </Link>
            <Link to={"/home"} className={`custom-sidebar-links ${isActive("/home") ? "bg-black-p text-white" : ""}`}>
              <div className="flex">
                <div className="">
                  <Home />
                </div>
                <div className="hidden md:block ml-2">Home</div>
              </div>
            </Link>
            <Link to={"/vote"} className={`custom-sidebar-links ${isActive("/vote") ? "bg-black-p text-white" : ""}`}>
              <div className="flex">
                <div className="">
                  <VoteIcon />
                </div>
                <div className="hidden md:block ml-2" >Vote</div>
              </div>
            </Link>
            <Link to={"/result"} className={`custom-sidebar-links ${isActive("/result") ? "bg-black-p text-white" : ""}`}>
              <div className="flex ">
                <div className="">
                  <Trophy />
                </div>
                <div className="hidden md:block ml-2">Results</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full text-white ">
          <Link to={"/profile"} className="">
            <div className="flex md:justify-between justify-center items-center">
              <div className="flex items-center align-middle justify-center ">
                <div className=""><CircleUser size={40} /></div>
                <div className="ml-2 hidden md:block">
                  <div>Name</div>
                  <div className="text-white text-opacity-35">email</div>
                </div>
              </div>
                <div className="relative  hidden md:block">
                <Ellipsis color="white" onClick={() => setShowMenu(!showMenu)} />
                {showMenu && (
                  <div className="absolute bottom-6 mt-2 w-48 bg-white rounded-xl  shadow-lg z-10">
                  <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <div className=" flex">
                    <LibraryBig/>
                    <span className="ml-2">My Poll</span>
                    </div></Link> 
                    <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <div className=" flex">
                    <LogOut/>
                    <span className="ml-2">Logout</span>
                    </div></Link>
                  </div>
                )}
                </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
