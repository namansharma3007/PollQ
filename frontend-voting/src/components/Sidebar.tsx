import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="relative h-[43rem] bg-gray-p w-72 p-4 rounded-xl m-4">
      <div className="flex flex-col">
        <div>
          <h1 className="text-white text-3xl font-bold text-center mt-2">pollQ</h1>
        </div>

        <div className="flex flex-col gap-4 mt-10">
            <Link to={"/home"} className="custom-sidebar-links">Home</Link>
            <Link to={"/createnewpoll"} className="custom-sidebar-links">Create new poll</Link>
            <Link to={"/home"} className="custom-sidebar-links">Home</Link>
            <Link to={"/home"} className="custom-sidebar-links">Home</Link>
            <Link to={"/home"} className="custom-sidebar-links">Home</Link>
            <Link to={"/home"} className="custom-sidebar-links">Home</Link>

        </div>
      </div>
    </div>
  );
}
