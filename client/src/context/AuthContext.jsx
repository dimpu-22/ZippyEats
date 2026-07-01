import { createContext, useContext, useEffect, useState } from "react";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const userData = await getUserProfile(token);

        setUser(userData);

        localStorage.setItem("user", JSON.stringify(userData));
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    };

    loadUser();
  }, []);

  // Register
  const register = async (name, email, phone, password) => {
    const response = await registerUser({
      name,
      email,
      phone,
      password,
    });

    return response;
  };

  // Login
  const login = async (email, password) => {
    const response = await loginUser({
      email,
      password,
    });

    localStorage.setItem("token", response.token);

    const userData = await getUserProfile(response.token);

    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);

    return response;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);