import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getRestaurants } from "../../services/adminRestaurantService";
import { getFoods } from "../../services/adminFoodService";
import { getOrders } from "../../services/adminOrderService";
import { getUsers } from "../../services/adminUserService";

const Dashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    restaurants: 0,
    foods: 0,
    orders: 0,
    users: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [restaurants, foods, orders, users] = await Promise.all([
        getRestaurants(),
        getFoods(),
        getOrders(),
        getUsers(),
      ]);

      setStats({
        restaurants: restaurants.length,
        foods: foods.length,
        orders: orders.length,
        users: users.length,
      });
    } catch (error) {
      console.error("Error loading dashboard:", error);
    }
  };

  const cards = [
    {
      title: "Restaurants",
      value: stats.restaurants,
      icon: "🍽️",
      color: "bg-blue-500",
      path: "/admin/restaurants",
    },
    {
      title: "Foods",
      value: stats.foods,
      icon: "🍔",
      color: "bg-green-500",
      path: "/admin/foods",
    },
    {
      title: "Orders",
      value: stats.orders,
      icon: "📦",
      color: "bg-yellow-500",
      path: "/admin/orders",
    },
    {
      title: "Users",
      value: stats.users,
      icon: "👤",
      color: "bg-purple-500",
      path: "/admin/users",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold">
          Welcome Admin 👋
        </h2>

        <p className="text-gray-600 mt-2">
          Manage restaurants, food items, orders, and users from one place.
        </p>
      </div>

      {/* Dashboard Heading */}
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(card.path)}
            className={`${card.color} text-white rounded-xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-5xl mb-4">
              {card.icon}
            </div>

            <h2 className="text-xl font-semibold">
              {card.title}
            </h2>

            <p className="text-4xl font-bold mt-3">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;