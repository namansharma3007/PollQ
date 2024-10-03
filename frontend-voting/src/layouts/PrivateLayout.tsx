import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

const AuthenticatedLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AuthenticatedLayout;
