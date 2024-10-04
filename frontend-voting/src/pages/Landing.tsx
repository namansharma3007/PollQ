
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [show, setShow] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
      } font-sans transition duration-300`}
    >
      <div
        className={`flex justify-between items-center p-6 border-b-2 ${
          isDarkMode ? "border-white" : "border-gray-900"
        }`}
      >
        <div className="text-xl ">
          <button
            className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 text-base"
            onClick={() => setShow(true)}
          >
            Options
          </button>
          {show && <Sidebar show={show} onClose={() => setShow(false)} />}
          <span className="px-4">PollQ</span>
        </div>
        <nav className="space-x-6">

          <a
            href="#about"
            className={`hover:text-blue-500 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-500 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contact
          </a>
          <Link to={"/login"}>login</Link>
          <button
            onClick={toggleDarkMode}
            className={`mt-4 px-6 py-3 rounded-full bg-purple-500 text-white hover:bg-purple-600`}/
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
=======
          <a href="#about" className={`hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About</a>
          <a href="/contact" className={`hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact</a>
          <button 
            onClick={toggleDarkMode} 
            className={`mt-4 px-6 py-3 rounded-full bg-purple-500 text-white hover:bg-purple-600`}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}

          </button>
        </nav>
      </div>

      <div
        className={`flex items-center justify-center h-screen ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto text-center font-medium">
          <h1 className="text-7xl ">Poll. Vote. Decide. Anytime, Anywhere.</h1>
          <p className="mt-6 text-lg  font-normal">
            Power Your Decisions with Instant Feedback
          </p>
          <p className="mt-4 text-lg font-normal">
            Create live polls in seconds, get real-time responses, and make
            smarter decisions.{" "}
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600">
            Vote now
          </button>
        </div>
      </div>

      <div
        className={`py-24 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } border-t-2 border-b-2 ${
          isDarkMode ? "border-white" : "border-gray-900"
        }`}
      >
        <h3 className="text-4xl text-center mb-10">Features</h3>
        <div className="flex justify-around items-center space-x-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 3h-4V1a1 1 0 00-2 0v2H9V1a1 1 0 00-2 0v2H3a1 1 0 00-1 1v19a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zM6 21H4v-6h2v6zm4 0H8v-8h2v8zm4 0h-2v-10h2v10zm4 0h-2v-12h2v12z" />
            </svg>
            <p className="mt-2">Easy to use</p>
          </div>

          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 4.249L1 9l1.5 4 9.5-5.249L21 13l1.5-4L12 4.249zm0 2.498l8 4.428-8-4.428-8 4.428 8-4.428z" />
            </svg>
            <p className="mt-2">Cheaper than ballot system</p>
          </div>

          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.707 7.293a1 1 0 00-1.414 0L12 13.586 5.707 7.293a1 1 0 00-1.414 1.414L12 16.414l7.707-7.707a1 1 0 000-1.414z" />
            </svg>
            <p className="mt-2">Faster voting process</p>
          </div>
        </div>
      </div>

      <div
        id="about"
        className={`py-20 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } `}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl mb-6">About</h3>
          <p className="text-xl">
            An online voting system that will replace the old ballot system or
            paper system. Over the time we have utilized the required technology
            in every sector to improve efficiency and save the extra resources.
            But the voting system is still very expensive and requires a bigger
            workforce. The system is slower and still not completely
            tamper-proof. We bring the system that is safe, reliable and solves
            the modern issues like higher reachability of the booth, crowd-free
            voting, inexpensive, faster results, and others.
          </p>
        </div>
      </div>

      <footer
        className={`py-8 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } border-t-2 ${isDarkMode ? "border-white" : "border-gray-900"}`}
      >
        <div className="text-center">
          <div className="text-xl font-bold mb-2">PollQ</div>
          <div className="text-sm">
            © 2024 | Privacy Policy | Terms of Service | Contact Us
          </div>
          <div className="mt-4 space-x-6">
            <a
              href="#facebook"
              className={`hover:text-yellow-400 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Facebook
            </a>
            <a
              href="#twitter"
              className={`hover:text-yellow-400 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Twitter
            </a>
            <a
              href="#linkedin"
              className={`hover:text-yellow-400 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
