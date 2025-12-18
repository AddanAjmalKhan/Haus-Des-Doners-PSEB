import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import { useState } from "react";
import { loginUser } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = loginUser(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <AuthCard
      title="Login to Account"
      subtitle="Please enter your email and password to continue"
      footer={
        <p>
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Create Account
          </Link>
        </p>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

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
          Sign In
        </button>
      </form>
    </AuthCard>
  );
};

export default Login;
