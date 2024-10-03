import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Registration from "./pages/Registration";
import Ballotview from "./pages/Ballotview";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
//@ts-ignore
import CreateNewPoll from "./pages/CreateNewpoll";

function App() {
  const [authCheck, setAuthCheck] = useState<boolean>(false);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="h-screen w-screen absolute -z-10 bg-black-p"></div>
      <div>
        {authCheck && (
          <div className="relative">
            <NavBar />
            <Routes>
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
          <div className="relative flex">
            <Sidebar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/createnewpoll" element={<CreateNewPoll />} />
              </Routes>
          </div>
        )}

        <div></div>
      </div>
    </>
  );
}

export default App;
