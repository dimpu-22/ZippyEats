import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const menus = [
    { name: "Dashboard", path: "/admin" },
    { name: "Restaurants", path: "/admin/restaurants" },
    { name: "Foods", path: "/admin/foods" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Users", path: "/admin/users" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">
        Admin Panel
      </h1>

      <div className="space-y-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `block p-3 rounded ${
                isActive
                  ? "bg-orange-500"
                  : "hover:bg-gray-700"
              }`
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;