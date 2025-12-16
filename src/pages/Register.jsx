import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5B8CFF] px-4">
      <AuthCard
        title="Create an Account"
        subtitle="Create an account to continue"
        className="w-full max-w-md"
        footer={
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 font-medium">
              Login
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
            <label className="text-sm">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">I accept terms and conditions</span>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>
      </AuthCard>
    </div>
  );
};

export default Register;
