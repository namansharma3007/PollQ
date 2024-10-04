import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod"; // Import Zod for validation
import { ToastContainer, toast } from "react-toastify"; // Import Toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// Zod schema for validation
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({}); // State for errors

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email using Zod
    const validation = forgotPasswordSchema.safeParse({ email });

    if (!validation.success) {
      // Extract and display validation errors
      const errorMessages = validation.error.format();
      setErrors({
        email: errorMessages.email?._errors[0],
      });
      toast.error("Invalid email. Please check the input!"); // Show error toast
    } else {
      // No errors, proceed with form submission
      console.log("Password reset link sent to:", email);
      setErrors({}); // Clear errors
      setSubmitted(true);
      toast.success("Password reset link sent!"); // Show success toast
    }
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
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
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
      <ToastContainer /> {/* Toast container for notifications */}
    </div>
  );
}
