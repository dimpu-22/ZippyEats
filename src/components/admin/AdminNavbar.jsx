import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-orange-500">
        ZippyEats Admin
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminNavbar;