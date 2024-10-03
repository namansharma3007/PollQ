import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 bg-gray-900 h-screen hidden md:flex">
        <div className="flex flex-col justify-center items-center h-screen text-center w-full">
          <div className="text-white">
            <h1 className="font-bold text-5xl pb-5">Welcome back to pollQ</h1>
            <span className="flex justify-center text-5xl font-bold">
              <span className="text-indigo-500">Login Now</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 w-full md:w-1/2">
        <div className="flex flex-col justify-center p-6 rounded-md border border-gray-700 shadow-lg bg-gray-800 max-w-sm w-full">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-300">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-300">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm pl-3 ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <AiFillEyeInvisible className="h-5 w-5 text-gray-400" />
                  ) : (
                    <AiFillEye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-indigo-500 hover:text-indigo-400"
              >
                Forgot Password?
              </Link>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex justify-center gap-1 items-center p-3">
            <p className="text-center text-sm text-gray-400">New here?</p>
            <Link
              to="/signup"
              className="leading-6 text-indigo-500 hover:text-indigo-400"
            >
              Create an account
            </Link>
          </div>

          <div className="flex items-center justify-evenly">
            <hr className="w-36 border-gray-700" />
            <span className="text-gray-500">Or</span>
            <hr className="w-36 border-gray-700" />
          </div>

          <div className="flex justify-center border-2 border-gray-700 rounded-md mt-2 w-full">
            <button className="p-1 font-semibold flex items-center justify-center gap-2 w-full rounded-md hover:bg-gray-700 text-white">
              <FcGoogle className="h-8 w-6" />
              <span className="text-sm">Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
