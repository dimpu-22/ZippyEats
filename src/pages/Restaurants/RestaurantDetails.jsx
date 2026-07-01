import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FoodCard from "../../components/ui/FoodCard";
import foodData from "../../data/foodData";

import { getRestaurantById } from "../../api/restaurantApi";

const RestaurantDetails = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  // Temporary (Day 10: We'll fetch food from MongoDB)
  const foods = foodData;

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Loading Restaurant...
        </h1>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-red-500">
          Restaurant Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Hero Banner */}
      <div className="relative">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-[450px] object-cover rounded-2xl"
        />

        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        <div className="absolute bottom-8 left-8 text-white">

          <h1 className="text-5xl font-bold">
            {restaurant.name}
          </h1>

          <p className="text-xl mt-2">
            🍽 {restaurant.cuisine}
          </p>

          <div className="flex flex-wrap gap-4 mt-5">

            <span className="bg-green-600 px-4 py-2 rounded-lg">
              ⭐ {restaurant.rating}
            </span>

            <span className="bg-orange-500 px-4 py-2 rounded-lg">
              ⏱ {restaurant.deliveryTime}
            </span>

            <span className="bg-blue-500 px-4 py-2 rounded-lg">
              💰 ₹200 for one
            </span>

          </div>

          <p className="mt-5">
            📍 {restaurant.location}
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 mt-8">

        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition">
          ❤️ Add to Wishlist
        </button>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition">
          🛒 View Cart
        </button>

      </div>

      {/* Restaurant Information */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold">⭐ Rating</h3>
          <p className="mt-2 text-lg">{restaurant.rating}/5</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold">⏱ Delivery</h3>
          <p className="mt-2 text-lg">{restaurant.deliveryTime}</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold">💰 Cost</h3>
          <p className="mt-2 text-lg">₹200 for one</p>
        </div>

      </div>

      {/* Description */}

      <div className="mt-10 bg-gray-100 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-3">
          About Restaurant
        </h2>

        <p className="text-gray-700">
          {restaurant.description}
        </p>
      </div>

      {/* Menu */}

      <h2 className="text-3xl font-bold mt-14 mb-8">
        🍴 Our Menu
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {foods.length > 0 ? (
          foods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))
        ) : (
          <p>No food items available.</p>
        )}

      </div>

      {/* Reviews */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          ⭐ Customer Reviews
        </h2>

        <div className="space-y-5">

          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-bold">
              Rahul ⭐⭐⭐⭐⭐
            </h3>

            <p className="mt-2">
              Amazing food and very fast delivery.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-bold">
              Priya ⭐⭐⭐⭐⭐
            </h3>

            <p className="mt-2">
              Loved the food. Will definitely order again.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-bold">
              Kiran ⭐⭐⭐⭐
            </h3>

            <p className="mt-2">
              Great taste and excellent packaging.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default RestaurantDetails;