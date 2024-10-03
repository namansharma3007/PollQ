import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {" "}
      {/* Added px-4 for horizontal padding on small screens */}
      <div className="flex flex-col justify-center p-6 rounded-md border border-gray-200 shadow-lg bg-white max-w-sm w-full">
        {" "}
        {/* Added shadow and full width */}
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
        <form className="space-y-6 mt-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"} // Toggle input type based on state
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm pl-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-1 items-center p-3">
          <p className="text-center text-sm text-gray-500">Already a user?</p>
          <Link
            to="/login"
            className="leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </div>
        <div className="flex items-center justify-evenly">
          <hr className="w-36" />
          <span className="text-gray-500">Or</span>
          <hr className="w-36" />
        </div>
        <div className="flex justify-center border-2 border-solid rounded-md mt-2 w-full">
          {" "}
          {/* Set width to full */}
          <button className="p-1 font-semibold flex items-center justify-center gap-2 w-full rounded-md hover:bg-gray-200">
            {" "}
            {/* Reduced padding */}
            <FcGoogle className="h-8 w-6" /> {/* Reduced icon size */}
            <span className="text-sm">Google</span> {/* Reduced font size */}
          </button>
        </div>
      </div>
    </div>
  );
}
