import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-orange-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          🍔 ZippyEats
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/restaurant">Restaurants</Link>
          <Link to="/food">Food</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* User */}
        {user ? (
          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="font-semibold hover:text-yellow-200"
            >
              👤 {user.name}
            </Link>

            <button
              onClick={handleLogout}
              className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/login"
              className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-orange-500"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;