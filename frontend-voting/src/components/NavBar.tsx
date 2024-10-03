import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function NavBar() {

    function handleClick() {
        toast.success("Login Successful");
    }
    return (
        <nav className="w-screen flex items-center h-[70px] px-8 justify-end fixed z-10">
          <div className="flex items-center w-full justify-between">
            <h1 className="text-white text-3xl font-bold">pollQ</h1>
            <div className="flex gap-8 bg-gray-p px-6 py-2 rounded-xl">
              <Link to={"/"} className="custom-nav-links">
                Home
              </Link>
              <Link to={"/"} className="custom-nav-links">
                Features
              </Link>
              <Link to={"/ballotview"} className="custom-nav-links">
                Ballotview
              </Link>
              <Link to={"/registration"} className="custom-nav-links">
                Registration
              </Link>
            </div>

            <div className="flex gap-8 items-center">
              <Link to={"/login"} className="custom-nav-links">
                <button
                  className="bg-gray-p px-6 py-2 rounded-xl hover:bg-gray-700 ease-in-out duration-200 text-white"
                >
                    Login
                </button>
                </Link>
              <button className="text-white px-6 py-2 bg-purple-shade-p rounded-xl ease-in-out duration-200 hover:bg-dark-purple-shade-p">
                Get Started
              </button>
            </div>
          </div>
        </nav>
    )
}