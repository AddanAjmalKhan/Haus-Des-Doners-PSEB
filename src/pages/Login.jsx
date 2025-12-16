import React from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5B8CFF] px-4">
      <AuthCard
        title="Login to Account"
        subtitle="Please enter your email and password to continue"
        className="w-full max-w-md"
        footer={
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium">
              Create Account
            </Link>
          </p>
        }
      >
        <form className="space-y-4">
          <div>
            <label className="text-sm">Email address</label>
            <input
              type="email"
              placeholder="esteban.schiller@gmail.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label className="text-sm">Password</label>
              <span className="text-sm text-blue-600 cursor-pointer">
                Forget Password?
              </span>
            </div>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">Remember Password</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;

