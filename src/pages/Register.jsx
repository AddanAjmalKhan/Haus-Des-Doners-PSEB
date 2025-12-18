import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { registerUser } from "../utils/auth";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(email, password);
    navigate("/");
  };

  return (
    <AuthCard
      title="Create an Account"
      subtitle="Create an account to continue"
      footer={
        <p>
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm text-gray-600">Email address</label>
          <input
            type="email"
            required
            className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            required
            className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="w-full bg-blue-500 text-white py-2.5 rounded-lg">
          Sign Up
        </button>
      </form>
    </AuthCard>
  );
};

export default Register;
