import { useState } from "react";
<<<<<<< Updated upstream
import { toast } from "react-hot-toast";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // Email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format");
            toast.error("Login Failed");
            return;
        }

        // Simple validation for demonstration purposes
        if (email === "user@example.com" && password === "password") {
            toast.success("Login Successful");
            setError("");
        } else {
            setError("Incorrect email or password");
            toast.error("Login Failed");
        }
    };

    const handleGoogleOAuth = () => {
        // Handle Google OAuth logic here
        toast.success("Google OAuth Successful");
    };

    return (
        <div className="text-white flex flex-col items-center justify-center h-screen bg-black-p">
            <h1 className="text-5xl mb-6 animate-bounce">Login</h1>
            <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg text-black border-2 border-purple-500 focus:outline-none focus:border-pink-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg text-black border-2 border-purple-500 focus:outline-none focus:border-pink-500"
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <button
                        onClick={handleLogin}
                        className="w-full h-full bg-gray-p px-4 py-2 rounded-lg hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300"
                        >
                        Login
                    </button>
                    <button
                        onClick={handleGoogleOAuth}
                        className="w-full h-full bg-purple-shade-p px-4 py-2 rounded-lg hover:bg-dark-purple-shade-p transform hover:scale-105 transition-transform duration-300"
                        >
                        Login with Google
                    </button>
                </div>
                <div className="text-center">
                    <a href="#" className="text-purple-500 hover:underline">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}
=======
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#18122B] px-4">
      <div className="flex flex-col justify-center p-6 rounded-md border border-[#635985] shadow-lg bg-[#393053] max-w-sm w-full">
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
        <form className="space-y-6 mt-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-white">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-3 bg-[#443C68] text-white shadow-sm ring-1 ring-inset ring-[#635985] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9B59B6] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-white">
              Password
            </label>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"} // Toggle input type based on state
                required
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm pl-3 bg-[#443C68] ring-1 ring-inset ring-[#635985] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9B59B6] sm:text-sm sm:leading-6"
              />
              <button
                type="button" // Prevent form submission
                className="absolute inset-y-0 right-0 flex items-center pr-3" // Position the button
                onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
              >
                {passwordVisible ? (
                  <AiFillEyeInvisible className="h-5 w-5 text-gray-500" /> // Eye closed icon
                ) : (
                  <AiFillEye className="h-5 w-5 text-gray-500" /> // Eye open icon
                )}
              </button>
            </div>
            <div className="text-sm flex justify-end pt-2">
              <Link
                to="/forgot-password"
                className="font-semibold text-[#635985] hover:text-[#443C68]"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#9B59B6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8E44AD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B59B6]"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-1 items-center p-3">
          <p className="text-center text-sm text-gray-400">
            Don’t have an account?
          </p>
          <Link
            to="/signup"
            className="leading-6 text-[#635985] hover:text-[#443C68]"
          >
            Signup
          </Link>
        </div>
        <div className="flex items-center justify-evenly">
          <hr className="w-36 border-[#635985]" />
          <span className="text-gray-400">Or</span>
          <hr className="w-36 border-[#635985]" />
        </div>
        <div className="flex justify-center border-2 border-solid border-[#635985] rounded-md mt-2 w-full">
          <button className="p-1 font-semibold flex items-center justify-center gap-2 w-full rounded-md hover:bg-[#443C68]">
            <FcGoogle className="h-8 w-6" />
            <span className="text-sm">Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> Stashed changes
