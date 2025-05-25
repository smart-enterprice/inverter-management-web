import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add auth logic here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-8 p-8 border border-gray-200 rounded-2xl shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Smart Enterprise
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full text-white font-medium bg-purple-400 hover:bg-purple-500 py-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
