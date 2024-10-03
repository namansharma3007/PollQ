import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
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