import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import PasswordInput from "../../components/auth/PasswordInput";

import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);

      alert("Login Successful!");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue ordering your favorite food."
    >
      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

        <p className="text-center mt-5 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;