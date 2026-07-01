import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import PasswordInput from "../../components/auth/PasswordInput";
import { validateRegister } from "../../utils/validation";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const validationErrors = validateRegister(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      await register(
        formData.name,
        formData.email,
        formData.phone,
        formData.password
      );

      alert("Registration Successful! Please Login.");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <AuthLayout
      title="Create Account 🎉"
      subtitle="Join ZippyEats and start ordering delicious food."
    >
      <form onSubmit={handleRegister}>
        <InputField
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-3">{errors.name}</p>
        )}

        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-3">{errors.email}</p>
        )}

        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mb-3">{errors.phone}</p>
        )}

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-3">{errors.password}</p>
        )}

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mb-4">
            {errors.confirmPassword}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Create Account
        </button>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;