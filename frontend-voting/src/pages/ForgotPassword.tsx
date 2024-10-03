import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add functionality for submitting the email for password reset
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 m-auto w-full">
      <div className="flex flex-col justify-center p-6 rounded-md border border-gray-700 shadow-lg bg-gray-800 max-w-sm w-full">
        {!submitted ? (
          <>
            <h2 className="mt-2 text-center text-2xl font-bold text-gray-100">
              Forgot Password
            </h2>
            <p className="text-center text-gray-400 mt-1 mb-4">
              Enter your email to reset your password
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-200 pb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm pl-3 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Send Reset Link
              </button>
            </form>
            <div className="text-center mt-4">
              <Link
                to="/login"
                className="text-indigo-500 hover:text-indigo-400"
              >
                Back to Login
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-100">
              Check your email
            </h2>
            <p className="text-gray-400 mt-1">
              We’ve sent a password reset link to {email}.
            </p>
            <Link
              to="/login"
              className="text-indigo-500 hover:text-indigo-400 mt-4"
            >
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
