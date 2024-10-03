// src/App.tsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Registration from "./pages/Registration";
import Ballotview from "./pages/Ballotview";
import Home from "./pages/Home";
import CreateNewPoll from "./pages/CreateNewPoll";
import PageNotFound from "./components/PageNotFound"; 
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const AuthLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
const NonAuthLayout = () => {
  return (
    <div className="flex p-1">
      <Sidebar />
      <Outlet />
    </div>
  );
};

function App() {
  const [authCheck, setAuthCheck] = useState<boolean>(false);

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Toaster />
      <div className="h-screen w-screen absolute -z-10 bg-black-p"></div>
      <div className="relative">
        <Routes>
          {!authCheck ? (
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/ballotview" element={<Ballotview />} />
              {/* <Route path="/home" element={<Home />} /> */}
            </Routes>
          </div>
        )}

        {!authCheck && (
          <div className="">
            {/* <Sidebar /> */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/home" element={<Home />} />
              <Route path="/createnewpoll" element={<CreateNewPoll />} />
            </Route>
          ) : (
            <Route element={<NonAuthLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/createnewpoll" element={<CreateNewPoll />} />
            </Route>
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
