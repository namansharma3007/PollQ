
import { Link } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://your-image-url.com')" }}></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <FaSadCry className="text-6xl mb-4 animate-bounce" />
        <h1 className="text-8xl font-extrabold animate-pulse">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Oh no! Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-300">
          The page you are looking for does not exist. But don’t worry, you can find your way back!
        </p>
        <Link 
          to="/" 
          className="mt-6 px-6 py-3 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
        <p className="mt-4 text-sm text-gray-400">
          or explore our <Link to="/about" className="text-blue-400 hover:underline">About Page</Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;

